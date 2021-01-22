import { Component, OnInit } from "@angular/core";
import { SmartTableData } from "../../../@core/data/smart-table";
import { LocalDataSource } from "ng2-smart-table";
import { Monument } from "../../../modules/monument";
import { UsersService } from "../../../service/users.service";
import { MonumentService } from "../../../service/monument.service";

@Component({
  selector: "ngx-list-monument",
  templateUrl: "./list-monument.component.html",
  styleUrls: ["./list-monument.component.scss"],
})
export class ListMonumentComponent implements OnInit {
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
      latitude: {
        title: "Latitude",
        type: "number",
      },
      longitude: {
        title: "Longitude",
        type: "number",
      },
      region: {
        title: "Region",
        type: "Region",
      },
      recenseur: {
        title: "Recenseur",
        type: "Recenseur",
      },
      adminRegional: {
        title: "Admin Regional",
        type: "AdminRegional",
      },
      dateCreation: {
        title: "Date de creation",
        type: "Date",
      },
    },
  };
  source: Monument[];
  constructor(private service: MonumentService) {
    this.service.getAll().subscribe((data) => (this.source = data));
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
