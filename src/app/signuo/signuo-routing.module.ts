import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignuoComponent } from './signuo.component';

const routes: Routes = [{ path: '', component: SignuoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignuoRoutingModule { }


