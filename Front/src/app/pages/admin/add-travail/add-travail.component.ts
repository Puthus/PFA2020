import { Component, OnInit } from '@angular/core';
import {Travail} from '../../../modules/travail';
import {Monument} from '../../../modules/monument';
import {TravailService} from '../../../service/travail.service';
import {Router} from '@angular/router';
import {MonumentService} from '../../../service/monument.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'ngx-add-travail',
  templateUrl: './add-travail.component.html',
  styleUrls: ['./add-travail.component.scss'],
})
export class AddTravailComponent implements OnInit {
  travail: Travail;
  monuments: Monument[];

  constructor(private appService: TravailService, private router: Router, private monservice: MonumentService) { }

  ngOnInit(): void {
    this.monservice.getAll().subscribe(data => {this.monuments = data; });
  }
  onSubmit(f: NgForm): void {
    const nom = f.value.nom;
    const typeTravail = f.value.typeTravail;
    const monument = f.value.monument;
    this.travail = new Travail();
    this.travail.monument = new Monument();
    this.travail.nom = nom;
    this.travail.typeTravail = typeTravail;
    this.travail.monument.id = monument;
    this.appService.save(this.travail).subscribe(result => this.gotoList());
  }
  gotoList(): void {
    this.router.navigate(['/list-travail']);
  }
}
