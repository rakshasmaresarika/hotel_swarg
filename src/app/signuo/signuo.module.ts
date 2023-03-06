import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignuoRoutingModule } from './signuo-routing.module';
import { SignuoComponent } from './signuo.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SignuoComponent
  ],
  imports: [
    CommonModule,
    SignuoRoutingModule,
    ReactiveFormsModule
  ]
})
export class SignuoModule { }
