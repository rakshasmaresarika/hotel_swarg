import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserSuccessComponent } from './user-success/user-success.component';
import { UserBookhotelComponent } from './user-bookhotel/user-bookhotel.component';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';


@NgModule({
  declarations: [
    UserComponent,
    UserSuccessComponent,
    UserBookhotelComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    MatRadioModule,
    MatCardModule ,
    MatFormFieldModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule ,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule
  ]
})
export class UserModule { }
