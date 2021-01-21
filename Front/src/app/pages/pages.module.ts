import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UsersListComponent } from "./users-list/users-list.component";
import { RouterModule } from "@angular/router"; // we also need angular router for Nebular to function properly
import {
  NbSidebarModule,
  NbLayoutModule,
  NbButtonModule,
  NbCardModule,
} from "@nebular/theme";
import { Ng2SmartTableModule } from "ng2-smart-table";

@NgModule({
  declarations: [UsersListComponent],
  imports: [
    CommonModule,
    RouterModule, // RouterModule.forRoot(routes, { useHash: true }), if this is your app.module
    NbLayoutModule,
    NbSidebarModule, // NbSidebarModule.forRoot(), //if this is your app.module
    NbButtonModule,
    NbCardModule,
    Ng2SmartTableModule,
    NbCardModule,
    Ng2SmartTableModule,
  ],
})
export class PagesModule {}
