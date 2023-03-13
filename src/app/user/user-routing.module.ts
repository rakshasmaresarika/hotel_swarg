import { Component, NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { UserBookhotelComponent } from './user-bookhotel/user-bookhotel.component';
import { UserSuccessComponent } from './user-success/user-success.component';
import { UserComponent } from './user.component';

const routes: Routes = [
  { path: '', component: UserComponent },
  {path: "userSuccess", component: UserSuccessComponent},
  {path:"booking",component:UserBookhotelComponent},
  {path: "signuo", loadChildren: ()=> import('../signuo/signuo-routing.module').then((m => m.SignuoRoutingModule))},
  {path:"",component:UserSuccessComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
