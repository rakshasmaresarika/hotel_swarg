import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OwnerRoutingModule } from './owner-routing.module';
import { OwnerComponent } from './owner.component';
import { FormsModule } from '@angular/forms';
import { OwnerSuccessComponent } from './owner-success/owner-success.component';


@NgModule({
  declarations: [
    OwnerComponent,
    OwnerSuccessComponent
  ],
  imports: [
    CommonModule,
    OwnerRoutingModule,
    FormsModule
  ]
})
export class OwnerModule { }
