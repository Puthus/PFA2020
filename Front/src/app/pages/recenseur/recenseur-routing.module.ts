import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RecenseurComponent } from "./recenseur.component";

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecenseurRoutingModule {}

export const routedComponents = [RecenseurComponent];
