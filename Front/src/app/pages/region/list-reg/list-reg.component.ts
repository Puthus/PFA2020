import { Component, OnInit } from '@angular/core';
import { Region } from '../../../modules/region';
import { RegionService } from '../../../service/region.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-list-reg',
  templateUrl: './list-reg.component.html',
  styleUrls: ['./list-reg.component.scss']
})
export class ListRegComponent implements OnInit {

  regions: Region[];
  constructor(private appService: RegionService, private router: Router) { }

  ngOnInit(): void {
    this.appService.getAll().subscribe(data => {this.regions = data; });
  }

}
