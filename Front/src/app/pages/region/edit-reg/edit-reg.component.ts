import { Component, OnInit } from '@angular/core';
import { Region } from '../../../modules/region';
import { AdminRegional } from '../../../modules/admin-regional';
import { RegionService } from '../../../service/region.service';
import { Router } from '@angular/router';
import { AdminRegionalService } from '../../../service/admin-regional.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'ngx-edit-reg',
  templateUrl: './edit-reg.component.html',
  styleUrls: ['./edit-reg.component.scss']
})
export class EditRegComponent implements OnInit {

  region: Region;
  admregs: AdminRegional[];

  constructor(private appService: RegionService, private router: Router, private etuservice: AdminRegionalService) { }

  ngOnInit(): void {
    this.etuservice.getAll().subscribe(data => {this.admregs = data; });
  }
  onSubmit(f: NgForm): void {
    const nom = f.value.nom;
    const libelle = f.value.libelle;
    const admreg = f.value.admreg;
    this.region = new Region();
    this.region.adminRegional = new AdminRegional();
    this.region.nom = nom;
    this.region.libelle = libelle;
    this.region.adminRegional.id = admreg;
    this.appService.save(this.region).subscribe(result => this.gotoList());
  }
  gotoList(): void {
    this.router.navigate(['/regions']);
  }

}
