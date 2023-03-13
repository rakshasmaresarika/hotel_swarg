import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminSuccessComponent } from './admin-success/admin-success.component';
import { AdminComponent } from './admin.component';

const routes: Routes = [
  { path: '', component: AdminComponent },
  {path:'adminSuccess', component:AdminSuccessComponent},
{path: "signuo", loadChildren: ()=> import('../signuo/signuo-routing.module').then((m => m.SignuoRoutingModule))},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
