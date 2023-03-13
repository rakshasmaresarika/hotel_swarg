import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingScreenComponent } from './landing-screen/landing-screen.component';

const routes: Routes = [
  { path: '', redirectTo:'Home', pathMatch:'full'},
  { path: 'Home', component:LandingScreenComponent},

  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
   { path: 'owner', loadChildren: () => import('./owner/owner.module').then(m => m.OwnerModule) },
    { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule) }, 
    { path: 'signup', loadChildren: () => import('./signuo/signuo.module').then(m => m.SignuoModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
