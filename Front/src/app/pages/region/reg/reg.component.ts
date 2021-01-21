import { Component, OnInit, Input } from '@angular/core';
import { RegionService } from '../../../service/region.service';
import { Router } from '@angular/router';
import { AdminRegional } from '../../../modules/admin-regional';
import { Region } from '../../../modules/region';

@Component({
  selector: 'ngx-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.scss']
})
export class RegComponent implements OnInit {

  region: Region;
  @Input() public regionnom: string;
  @Input() public regionLibelle: string;
  @Input() public regionadmin: string;
  @Input() public position: number;

  constructor(private appService: RegionService, private router: Router) { }

  ngOnInit(): void {
  }
  public deleteRegion(): void{
    this.appService.delete(this.position).subscribe(result => this.gotoList());
  }

  update(): void{
    this.region = new Region();
    this.appService.update(this.position, this.region).subscribe(result => this.gotoList());
  }
  gotoList(): void{
    this.router.navigate(['/regions']);
  }

}
