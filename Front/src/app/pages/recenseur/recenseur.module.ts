import { NgModule } from "@angular/core";
import { NbCardModule, NbIconModule, NbInputModule, NbTreeGridModule } from "@nebular/theme";
import { Ng2SmartTableModule } from "ng2-smart-table";

import { ThemeModule } from "../../@theme/theme.module";
import { RecenseurRoutingModule, routedComponents } from "./recenseur-routing.module";
import { AddMonumentComponent } from "./add-monument/add-monument.component";
import { ListMonumentComponent } from "./list-monument/list-monument.component";
import { AddConstatComponent } from './add-constat/add-constat.component';
import { ListConstatComponent } from './list-constat/list-constat.component';

@NgModule({
  imports: [
    RecenseurRoutingModule,
    NbCardModule,
    NbTreeGridModule,
    NbIconModule,
    NbInputModule,
    ThemeModule,
    Ng2SmartTableModule,
  ],
  declarations: [...routedComponents, AddMonumentComponent, ListMonumentComponent, AddConstatComponent, ListConstatComponent],
})
export class RecenseurModule {}
