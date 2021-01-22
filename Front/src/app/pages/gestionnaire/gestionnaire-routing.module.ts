import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { GestionnaireComponent } from "./gestionnaire.component";
import { ListUserComponent } from "./list-users/list-users.component";

const routes: Routes = [
  {
    path: "list-users",
    component: ListUserComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GestionnaireRoutingModule {}

export const routedComponents = [GestionnaireComponent, ListUserComponent];
