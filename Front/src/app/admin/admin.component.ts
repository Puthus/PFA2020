import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  Renderer2,
} from "@angular/core";
import { Router } from "@angular/router";
import { UserService } from "../services/user.service";
import { Observable, Subject } from "rxjs";
import { User } from "../model/user";
import { Ng2SmartTableModule } from "ng2-smart-table";

@Component({
  selector: "app-admin",
  templateUrl: "./admin.component.html",
  styleUrls: ["./admin.component.css"],
})
export class AdminComponent implements OnDestroy, OnInit {
  board: string;
  errorMessage: string;
  dtOptions: DataTables.Settings = {
    pagingType: "full_numbers",
    pageLength: 2,
  };
  dtTrigger: Subject<any> = new Subject<any>();
  settings = {
    columns: {
      id: {
        title: "ID",
      },
      nom: {
        title: "Nom",
      },
      username: {
        title: "Prenom",
      },
      email: {
        title: "Email",
      },
      roles: {
        title: "Role",
        valuePrepareFunction: (data) => {
          return data[0].name;
        },
      },
    },
  };
  data: User[];

  constructor(
    private userService: UserService,
    private renderer: Renderer2,
    private router: Router
  ) {}

  ngOnInit() {
    this.userService.getUsers().subscribe(
      (data) => {
        this.data = data["list"];
        this.dtTrigger.next();
        console.table(this.data);
      },
      (error) => {
        this.errorMessage = `${error.status}: ${
          JSON.parse(error.error).message
        }`;
      }
    );
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
}
