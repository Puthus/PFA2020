import { Component, OnInit } from '@angular/core';
import {Region} from "../../../modules/region";
import {RegionService} from "../../../service/region.service";

@Component({
  selector: 'ngx-list-region',
  templateUrl: './list-region.component.html',
  styleUrls: ['./list-region.component.scss']
})
export class ListRegionComponent implements OnInit {
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
      libelle: {
        title: "Libelle",
        type: "string",
      },
      adminRegional: {
        title: "Admin Regional",
        type: "AdminRegional",
      },
    },
  };
  source: Region[];
  constructor(private service: RegionService) {
    this.service.getAll().subscribe((data) => (this.source = data["list"]));
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
