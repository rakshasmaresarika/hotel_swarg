import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminOwnerlistComponent } from './admin-ownerlist/admin-ownerlist.component';
import { AdminSuccessComponent } from './admin-success/admin-success.component';
import { AdminUserlistComponent } from './admin-userlist/admin-userlist.component';
import { AdminComponent } from './admin.component';

const routes: Routes = [
  { path: '', component: AdminComponent },
  {path:'adminSuccess', component:AdminSuccessComponent},
  {path:'ownerlist',component:AdminOwnerlistComponent},
  {path:'userlist',component:AdminUserlistComponent},
{path: "signuo", loadChildren: ()=> import('../signuo/signuo-routing.module').then((m => m.SignuoRoutingModule))},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
