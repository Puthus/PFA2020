import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { RegisterComponent } from "./register/register.component";
import { LoginComponent } from "./login/login.component";
import { HomeComponent } from "./home/home.component";
import { RecenseurComponent } from "./recenseur/recenseur.component";
import { GestionnaireComponent } from "./gestionnaire/gestionnaire.component";
import { AdminComponent } from "./admin/admin.component";
import { UsersListComponent } from "./pages/users-list/users-list.component";

const routes: Routes = [
  {
    path: "home",
    component: HomeComponent,
  },
  {
    path: "recenseur",
    component: RecenseurComponent,
  },
  {
    path: "gestionnaire",
    component: GestionnaireComponent,
  },
  {
    path: "admin",
    component: AdminComponent,
  },
  {
    path: "auth/login",
    component: LoginComponent,
  },
  {
    path: "signup",
    component: RegisterComponent,
  },
  {
    path: "pages",
    children: [
      {
        path: "users-list",
        component: UsersListComponent,
      },
    ],
  },
  {
    path: "",
    redirectTo: "auth/login",
    pathMatch: "full",
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    RouterModule.forRoot(routes, { useHash: true }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
