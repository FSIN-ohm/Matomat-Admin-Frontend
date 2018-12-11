import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountManagementComponent} from './account-management/account-management.component';
import { DashboardComponent} from './dashboard/dashboard.component';
import { InventoryListComponent } from './inventory-list/inventory-list.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ProductsComponent} from './products/products.component';
import { SalesStatisticsComponent} from './sales-statistics/sales-statistics.component';
import { SettingsComponent} from './settings/settings.component';
import { TransactionsComponent} from './transactions/transactions.component';
import { UserPageComponent } from './user-page/user-page.component';

// internalSiteRoutes declares all Routes that can be visited on our Project-page:
// NOTE: internalSiteRoutes must be inserted top to bottom and from most specific to least specific.
const internalSiteRoutes: Routes = [
  {path: 'acc-management', component: AccountManagementComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'stock', component: InventoryListComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'statistics', component: SalesStatisticsComponent},
  {path: 'settings', component: SettingsComponent},
  {path: 'transactions', component: TransactionsComponent},
  {path: 'user', component: UserPageComponent },
  {path : '', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(internalSiteRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
