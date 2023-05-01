import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AddClientComponent } from './add-client.component';
import { SharedModule } from '../shared/shared.module';

import { FormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';

@NgModule({
  declarations: [AddClientComponent],
  imports: [
    CommonModule,
    SharedModule,
    NgxMaskModule.forRoot(),
    RouterModule.forChild([
      {
        path: '',
        component: AddClientComponent,
      },
    ]),
    FormsModule,
  ],
})
export class AddClientModule {}
