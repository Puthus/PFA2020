import { Component, OnInit } from "@angular/core";
import { SmartTableData } from "../../../@core/data/smart-table";
import { User } from "../../../modules/user";
import { UserService } from "../../../service/user.service";

@Component({
  selector: "ngx-list-user",
  templateUrl: "./list-users.component.html",
  styleUrls: ["./list-users.component.scss"],
})
export class ListUserComponent implements OnInit {
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
      prenom: {
        title: "Prenom",
        type: "string",
      },
      username: {
        title: "Username",
        type: "string",
      },
      email: {
        title: "Username",
        type: "string",
      },
      active: {
        title: "Active",
        type: "string",
      },
      roles: {
        title: "Roles",
        type: "string",
        valuePrepareFunction: (data) => {
          return data[0]["name"];
        },
      },
    },
  };
  source: User[];
  constructor(private service: UserService) {}

  ngOnInit(): void {
    this.service.getAll().subscribe((data) => {
      console.log("data ", data);
      this.source = data["list"];
      console.log("source ", this.source);
    });
  }

  onDeleteConfirm(event): void {
    if (window.confirm("Are you sure you want to delete?")) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}
