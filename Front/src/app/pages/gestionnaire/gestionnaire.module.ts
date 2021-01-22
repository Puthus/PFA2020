import { NgModule } from "@angular/core";
import {
  NbInputModule,
  NbRadioModule,
  NbAlertModule,
  NbButtonModule,
  NbCheckboxModule,
  NbCardModule,
} from "@nebular/theme";
import { GestionnaireRoutingModule, routedComponents } from "./gestionnaire-routing.module";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { Ng2SmartTableModule } from "ng2-smart-table";
import { FormsModule } from "../forms/forms.module";
import { ListConstatComponent } from './list-constat/list-constat.component';
import { ListUserComponent } from './list-user/list-user.component';
import { AddUserComponent } from './add-user/add-user.component';

@NgModule({
  imports: [
    GestionnaireRoutingModule,
    CommonModule,
    FormsModule,
    RouterModule,
    NbAlertModule,
    NbInputModule,
    NbButtonModule,
    NbCardModule,
    NbRadioModule,
    Ng2SmartTableModule,
    NbCheckboxModule,
  ],
  declarations: [...routedComponents, ListConstatComponent, ListUserComponent, AddUserComponent],
})
export class GestionnaireModule {}
