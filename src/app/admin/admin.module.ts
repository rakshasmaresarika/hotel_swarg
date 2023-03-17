import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { FormsModule } from '@angular/forms';
import { AdminSuccessComponent } from './admin-success/admin-success.component';
import { MatButtonModule } from '@angular/material/button';
import { AdminOwnerlistComponent } from './admin-ownerlist/admin-ownerlist.component';
import { AdminUserlistComponent } from './admin-userlist/admin-userlist.component';


@NgModule({
  declarations: [
    AdminComponent,
    AdminSuccessComponent,
    AdminOwnerlistComponent,
    AdminUserlistComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    MatButtonModule
  ]
})
export class AdminModule { }
