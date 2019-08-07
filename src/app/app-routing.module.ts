import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountManagementComponent } from './account-management/account-management.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ProductsComponent } from './products/products.component';
import { SettingsComponent } from './settings/settings.component';
import { TransactionsComponent } from './transactions/transactions.component';

// internalSiteRoutes declares all Routes that can be visited on our Project-page:
// NOTE: internalSiteRoutes must be inserted top to bottom and from most specific to least specific.
const internalSiteRoutes: Routes = [
  { path: 'acc-management', component: AccountManagementComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'product-management', component: ProductsComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'transactions', component: TransactionsComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(internalSiteRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
