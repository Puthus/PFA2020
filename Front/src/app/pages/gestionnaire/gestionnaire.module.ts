import { NgModule } from '@angular/core';
import {
  NbInputModule,
  NbRadioModule,
  NbAlertModule,
  NbButtonModule,
  NbCheckboxModule,
  NbCardModule,
  NbDatepickerModule,
  NbSelectModule,
} from '@nebular/theme';
import {
  GestionnaireRoutingModule,
  routedComponents,
} from './gestionnaire-routing.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ListUserComponent } from './list-user/list-user.component';
import { AddUserComponent } from './add-user/add-user.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    GestionnaireRoutingModule,
    CommonModule,
    RouterModule,
    NbAlertModule,
    FormsModule,
    NbSelectModule,
    NbInputModule,
    NbButtonModule,
    NbCardModule,
    NbRadioModule,
    NbDatepickerModule,
    Ng2SmartTableModule,
    NbCheckboxModule,
  ],
  declarations: [...routedComponents, ListUserComponent, AddUserComponent],
})
export class GestionnaireModule {}
