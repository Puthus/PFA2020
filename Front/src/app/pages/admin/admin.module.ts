import { NgModule } from "@angular/core";
import { NbCardModule, NbIconModule, NbInputModule, NbTreeGridModule } from "@nebular/theme";
import { Ng2SmartTableModule } from "ng2-smart-table";

import { ThemeModule } from "../../@theme/theme.module";
import { AdminRoutingModule, routedComponents } from "./admin-routing.module";
import { AddRegionComponent } from "./add-region/add-region.component";
import { ListRegionComponent } from "./list-region/list-region.component";
import { ListTravailComponent } from "./list-travail/list-travail.component";
import { AddTravailComponent } from "./add-travail/add-travail.component";
import { ListConstatComponent } from "./list-constat/list-constat.component";
import { AdminComponent } from "./admin.component";
import { ListMonumentComponent } from "./list-monument/list-monument.component";

@NgModule({
  imports: [
    AdminRoutingModule,
    NbCardModule,
    NbTreeGridModule,
    NbIconModule,
    NbInputModule,
    ThemeModule,
    Ng2SmartTableModule,
  ],
  declarations: [
    AdminComponent,
    ListMonumentComponent,
    ListRegionComponent,
    AddRegionComponent,
    ListTravailComponent,
    AddTravailComponent,
    ListConstatComponent,
  ],
})
export class AdminModule {}
