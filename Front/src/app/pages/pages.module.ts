import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ECommerceModule } from './e-commerce/e-commerce.module';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { GestionnaireModule } from './gestionnaire/gestionnaire.module';
import { AdminModule } from './admin/admin.module';
import { RecenseurModule } from './recenseur/recenseur.module';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    DashboardModule,
    ECommerceModule,
    MiscellaneousModule,
    GestionnaireModule,
    AdminModule,
    RecenseurModule,
  ],
  declarations: [PagesComponent],
})
export class PagesModule {}
