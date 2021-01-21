import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { RecenseurComponent } from "./recenseur/recenseur.component";
import { RegisterComponent } from "./register/register.component";
import { HomeComponent } from "./home/home.component";
import { AdminComponent } from "./admin/admin.component";
import { GestionnaireComponent } from "./gestionnaire/gestionnaire.component";

import { httpInterceptorProviders } from "./auth/auth-interceptor";
import { MapComponent } from "./map/map.component";
import { DataTablesModule } from "angular-datatables";
import { Ng2SmartTableModule } from "ng2-smart-table";
import {
  NbActionsModule,
  NbContextMenuModule,
  NbIconModule,
  NbMenuModule,
  NbSearchModule,
  NbSelectModule,
  NbThemeModule,
  NbUserModule,
} from "@nebular/theme";
import { RouterModule } from "@angular/router"; // we also need angular router for Nebular to function properly
import {
  NbSidebarModule,
  NbLayoutModule,
  NbButtonModule,
} from "@nebular/theme";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NbEvaIconsModule } from "@nebular/eva-icons";
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RecenseurComponent,
    RegisterComponent,
    HomeComponent,
    AdminComponent,
    GestionnaireComponent,
    MapComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    Ng2SmartTableModule,
    HttpClientModule,
    DataTablesModule,
    NbMenuModule.forRoot(),
    NbLayoutModule,
    NbSidebarModule.forRoot(),
    NbButtonModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: "dark" }),
    NbEvaIconsModule,
    NbActionsModule,
    NbSearchModule,
    NbUserModule,
    NbContextMenuModule,
    NbSelectModule,
    NbIconModule,
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}
