import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';
import { FormsModule } from '@angular/forms';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ECommerceModule } from './e-commerce/e-commerce.module';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { RegComponent } from './region/reg/reg.component';
import { EditRegComponent } from './region/edit-reg/edit-reg.component';
import { ListRegComponent } from './region/list-reg/list-reg.component';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    DashboardModule,
    ECommerceModule,
    MiscellaneousModule,
    FormsModule
  ],
  declarations: [
    PagesComponent,
    RegComponent,
    EditRegComponent,
    ListRegComponent,
  ],
})
export class PagesModule {
}
