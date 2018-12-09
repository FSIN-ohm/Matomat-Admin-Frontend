import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserPageComponent } from './user-page/user-page.component';
import { LoginPageComponent } from './login-page/login-page.component';

const routes: Routes = [
  { path: 'user-page', component: UserPageComponent },
  { path: 'login-page', component: LoginPageComponent },
  { path : '', redirectTo: '/login-page', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
