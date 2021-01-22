import { NgModule } from '@angular/core';
import {
  NbCardModule,
  NbDatepickerModule,
  NbIconModule,
  NbInputModule,
  NbSelectModule,
  NbTreeGridModule,
} from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ThemeModule } from '../../@theme/theme.module';
import {
  RecenseurRoutingModule,
  routedComponents,
} from './recenseur-routing.module';
import { AddMonumentComponent } from './add-monument/add-monument.component';
import { ListMonumentComponent } from './list-monument/list-monument.component';
import { AddConstatComponent } from './add-constat/add-constat.component';
import { ListConstatComponent } from './list-constat/list-constat.component';
import { FormsModule } from '@angular/forms';
import { NbCheckboxModule, NbRadioModule, NbAlertModule } from '@nebular/theme';

@NgModule({
  imports: [
    RecenseurRoutingModule,
    NbCardModule,
    NbTreeGridModule,
    NbIconModule,
    NbInputModule,
    FormsModule,
    NbSelectModule,
    NbDatepickerModule,
    NbCheckboxModule,
    NbRadioModule,
    NbAlertModule,
    ThemeModule,
    Ng2SmartTableModule,
  ],
  declarations: [
    ...routedComponents,
    AddMonumentComponent,
    ListMonumentComponent,
    AddConstatComponent,
    ListConstatComponent,
  ],
})
export class RecenseurModule {}
