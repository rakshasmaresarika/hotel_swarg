import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OwnerNewHotelRgistrationComponent } from './owner-new-hotel-rgistration/owner-new-hotel-rgistration.component';
import { OwnerSuccessComponent } from './owner-success/owner-success.component';
import { OwnerComponent } from './owner.component';

const routes: Routes = [
  { path: '', component: OwnerComponent },
  {path:'ownerSuccess', component:OwnerSuccessComponent},
  {path:'new',component:OwnerNewHotelRgistrationComponent},
  {path: "signuo", loadChildren: ()=> import('../signuo/signuo-routing.module').then((m => m.SignuoRoutingModule))},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OwnerRoutingModule { }
