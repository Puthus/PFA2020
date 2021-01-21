import { Component, OnInit, Renderer2 } from "@angular/core";
import { User } from "../../model/user";
import { UserService } from "../../services/user.service";

@Component({
  selector: "app-users-list",
  templateUrl: "./users-list.component.html",
  styleUrls: ["./users-list.component.css"],
})
export class UsersListComponent implements OnInit {
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
        title: "Last Name",
        type: "string",
      },
      prenom: {
        title: "First Name",
        type: "string",
      },
      username: {
        title: "Username",
        type: "string",
      },
      email: {
        title: "E-mail",
        type: "string",
      },
    },
  };
  data: User[];
  board: string;
  errorMessage: string;
  constructor(private userService: UserService) {
    this.userService.getUsers().subscribe(
      (data) => {
        this.data = data["list"];
        console.table(this.data);
      },
      (error) => {
        this.errorMessage = `${error.status}: ${
          JSON.parse(error.error).message
        }`;
      }
    );
  }

  ngOnInit() {}

  onDeleteConfirm(event): void {
    if (window.confirm("Are you sure you want to delete?")) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}
