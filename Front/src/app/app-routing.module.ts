import { ExtraOptions, RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { AuthModule } from "./auth/auth.module";
import { AuthGuardService } from "./auth-guard.service";

export const routes: Routes = [
  {
    path: "pages",
    canActivate: [AuthGuardService],
    loadChildren: () => import("./pages/pages.module").then((m) => m.PagesModule),
  },
  { path: "", redirectTo: "auth/login", pathMatch: "full" },
  { path: "**", redirectTo: "auth/login" },
];

const config: ExtraOptions = {
  useHash: false,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config), AuthModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
