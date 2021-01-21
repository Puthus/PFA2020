import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListMonumentComponent } from './list-monument/list-monument.component';
import { AdminComponent } from './admin.component';

const routes: Routes = [
  {
    path: '',
    component: ListMonumentComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}

export const routedComponents = [AdminComponent, ListMonumentComponent];
