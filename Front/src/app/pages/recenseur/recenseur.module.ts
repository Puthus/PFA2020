import { NgModule } from "@angular/core";
import { NbCardModule, NbIconModule, NbInputModule, NbTreeGridModule } from "@nebular/theme";
import { Ng2SmartTableModule } from "ng2-smart-table";

import { ThemeModule } from "../../@theme/theme.module";
import { RecenseurRoutingModule, routedComponents } from "./recenseur-routing.module";

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
  declarations: [...routedComponents],
})
export class RecenseurModule {}
