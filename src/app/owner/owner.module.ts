import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OwnerRoutingModule } from './owner-routing.module';
import { OwnerComponent } from './owner.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OwnerSuccessComponent } from './owner-success/owner-success.component';
import { OwnerNewHotelRgistrationComponent } from './owner-new-hotel-rgistration/owner-new-hotel-rgistration.component';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    OwnerComponent,
    OwnerSuccessComponent,
    OwnerNewHotelRgistrationComponent
  ],
  imports: [
    CommonModule,
    OwnerRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule
  ]
})
export class OwnerModule { }
