import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ListMonumentComponent } from "./list-monument/list-monument.component";
import { AdminComponent } from "./admin.component";
import { ListRegionComponent } from "./list-region/list-region.component";
import { AddRegionComponent } from "./add-region/add-region.component";
import { ListTravailComponent } from "./list-travail/list-travail.component";
import { AddTravailComponent } from "./add-travail/add-travail.component";
import { ListConstatComponent } from "./list-constat/list-constat.component";

const routes: Routes = [
  {
    path: "list-monument",
    component: ListMonumentComponent,
  },
  {
    path: "list-region",
    component: ListRegionComponent,
  },
  {
    path: "add-region",
    component: AddRegionComponent,
  },
  {
    path: "list-travail",
    component: ListTravailComponent,
  },
  {
    path: "add-travail",
    component: AddTravailComponent,
  },
  {
    path: "list-constat",
    component: ListConstatComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}

export const routedComponents = [];
