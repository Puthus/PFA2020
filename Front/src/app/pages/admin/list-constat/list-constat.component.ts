import { Component, OnInit } from '@angular/core';
import {Travail} from "../../../modules/travail";
import {TravailService} from "../../../service/travail.service";

@Component({
  selector: 'ngx-list-constat',
  templateUrl: './list-constat.component.html',
  styleUrls: ['./list-constat.component.scss'],
})
export class ListConstatComponent implements OnInit {

  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      id: {
        title: "ID",
        type: "number",
      },
      nom: {
        title: "Nom",
        type: "string",
      },
      typeTravail: {
        title: "Type",
        type: "string",
      },
      monument: {
        title: "Monument",
        type: "number",
      },
    },
  };
  source: Travail[];
  constructor(private service: TravailService) {
    this.service.getTous().subscribe((data) => (this.source = data["list"]));
  }

  ngOnInit(): void {}

  onDeleteConfirm(event): void {
    if (window.confirm("Are you sure you want to delete?")) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}
