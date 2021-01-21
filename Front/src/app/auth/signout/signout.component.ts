import { Component, OnInit } from "@angular/core";
import { NbAuthService } from "@nebular/auth";

@Component({
  selector: "ngx-signout",
  templateUrl: "./signout.component.html",
  styleUrls: ["./signout.component.scss"],
})
export class SignoutComponent implements OnInit {
  constructor(private authService: NbAuthService) {}

  ngOnInit(): void {
    this.authService.logout("username");
  }
}
