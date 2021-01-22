import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";

import { PagesComponent } from "./pages.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ECommerceComponent } from "./e-commerce/e-commerce.component";
import { NotFoundComponent } from "./miscellaneous/not-found/not-found.component";
import { AuthGuardService } from "../auth-guard.service";
import {ListRegComponent} from "./region/list-reg/list-reg.component";
import {EditRegComponent} from "./region/edit-reg/edit-reg.component";

const routes: Routes = [
  {
    path: "",
    component: PagesComponent,
    children: [
      {
        path: "admin",
        canActivate: [AuthGuardService],
        loadChildren: () => import("./admin/admin.module").then((m) => m.AdminModule),
      },
      {
        path: "guest",
        canActivate: [AuthGuardService],
        loadChildren: () => import("./guest/guest.module").then((m) => m.GuestModule),
      },
      {
        path: "recenseur",
        canActivate: [AuthGuardService],
        loadChildren: () => import("./recenseur/recenseur.module").then((m) => m.RecenseurModule),
      },
      {
        path: "gestionnaire",
        canActivate: [AuthGuardService],
        loadChildren: () => import("./gestionnaire/gestionnaire.module").then((m) => m.GestionnaireModule),
      },

      {
        path: "dashboard",
        component: ECommerceComponent,
      },
      {
        path: "regions",
        component: EditRegComponent,
      },
      {
        path: "iot-dashboard",
        component: DashboardComponent,
      },
      {
        path: "layout",
        loadChildren: () => import("./layout/layout.module").then((m) => m.LayoutModule),
      },
      {
        path: "forms",
        loadChildren: () => import("./forms/forms.module").then((m) => m.FormsModule),
      },
      {
        path: "ui-features",
        loadChildren: () => import("./ui-features/ui-features.module").then((m) => m.UiFeaturesModule),
      },
      {
        path: "modal-overlays",
        loadChildren: () => import("./modal-overlays/modal-overlays.module").then((m) => m.ModalOverlaysModule),
      },
      {
        path: "extra-components",
        loadChildren: () => import("./extra-components/extra-components.module").then((m) => m.ExtraComponentsModule),
      },
      {
        path: "maps",
        loadChildren: () => import("./maps/maps.module").then((m) => m.MapsModule),
      },
      {
        path: "charts",
        loadChildren: () => import("./charts/charts.module").then((m) => m.ChartsModule),
      },
      {
        path: "editors",
        loadChildren: () => import("./editors/editors.module").then((m) => m.EditorsModule),
      },
      {
        path: "tables",
        loadChildren: () => import("./tables/tables.module").then((m) => m.TablesModule),
      },
      {
        path: "miscellaneous",
        loadChildren: () => import("./miscellaneous/miscellaneous.module").then((m) => m.MiscellaneousModule),
      },
      {
        path: "",
        redirectTo: "dashboard",
        pathMatch: "full",
      },
      {
        path: "**",
        component: NotFoundComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
