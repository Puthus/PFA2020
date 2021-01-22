import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { GuestComponent } from "./guest.component";

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GuestRoutingModule {}

export const routedComponents = [GuestComponent];
