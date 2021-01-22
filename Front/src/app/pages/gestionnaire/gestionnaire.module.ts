import { NgModule } from "@angular/core";
import { NbCardModule, NbIconModule, NbInputModule, NbTreeGridModule } from "@nebular/theme";
import { Ng2SmartTableModule } from "ng2-smart-table";

import { ThemeModule } from "../../@theme/theme.module";
import { GestionnaireRoutingModule, routedComponents } from "./gestionnaire-routing.module";

@NgModule({
  imports: [
    GestionnaireRoutingModule,
    NbCardModule,
    NbTreeGridModule,
    NbIconModule,
    NbInputModule,
    ThemeModule,
    Ng2SmartTableModule,
  ],
  declarations: [...routedComponents],
})
export class GestionnaireModule {}
