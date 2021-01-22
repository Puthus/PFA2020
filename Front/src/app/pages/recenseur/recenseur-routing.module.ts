import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RecenseurComponent } from "./recenseur.component";
import { ListMonumentComponent } from "./list-monument/list-monument.component";
import { AddMonumentComponent } from "./add-monument/add-monument.component";
import { ListConstatComponent } from "./list-constat/list-constat.component";
import { AddConstatComponent } from "./add-constat/add-constat.component";

const routes: Routes = [
  {
    path: "list-monument",
    component: ListMonumentComponent,
  },
  {
    path: "add-monument",
    component: AddMonumentComponent,
  },
  {
    path: "list-constat",
    component: ListConstatComponent,
  },
  {
    path: "add-constat",
    component: AddConstatComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecenseurRoutingModule {}

export const routedComponents = [RecenseurComponent, AddMonumentComponent, ListMonumentComponent];
