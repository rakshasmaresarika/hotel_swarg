import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
   { path: 'owner', loadChildren: () => import('./owner/owner.module').then(m => m.OwnerModule) },
    { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule) }, 
    { path: 'signup', loadChildren: () => import('./signuo/signuo.module').then(m => m.SignuoModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
