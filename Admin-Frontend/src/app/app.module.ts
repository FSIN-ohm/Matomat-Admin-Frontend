import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RouterModule, Routes} from '@angular/router';
import { MatSidenavModule, MatToolbarModule, MatButtonModule, MatIconModule, MatListModule, MatCardModule, MatDialogModule, MatTableModule,
         MatMenuModule, MatProgressSpinnerModule } from '@angular/material';
import { MainNavigationComponent } from './main-navigation/main-navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { LoginPageComponent } from './login-page/login-page.component';
import { SettingsComponent } from './settings/settings.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccountManagementComponent } from './account-management/account-management.component';
import { ProductsComponent } from './products/products.component';
import { InventoryListComponent } from './inventory-list/inventory-list.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { SalesStatisticsComponent } from './sales-statistics/sales-statistics.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';
import { UserPageComponent } from './user-page/user-page.component';
import { CommonModule } from '@angular/common';

// internalSiteRoutes declares all Routes that can be visited on our Project-page:
// NOTE: internalSiteRoutes must be inserted top to bottom and from most specific to least specific.
const internalSiteRoutes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'acc-management', component: AccountManagementComponent},
  {path: 'stock', component: InventoryListComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'statistics', component: SalesStatisticsComponent},
  {path: 'settings', component: SettingsComponent},
  {path: 'transactions', component: TransactionsComponent},
  {path: 'user', component: UserPageComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    MainNavigationComponent,
    LoginPageComponent,
    SettingsComponent,
    DashboardComponent,
    AccountManagementComponent,
    ProductsComponent,
    InventoryListComponent,
    TransactionsComponent,
    SalesStatisticsComponent,
    UserPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(internalSiteRoutes),
    BrowserAnimationsModule,
    MatSidenavModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    ModalModule.forRoot(),
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    ToastrModule.forRoot(),
    FormsModule,
    MatCardModule, 
    MatDialogModule, 
    MatTableModule,
    MatMenuModule, 
    MatProgressSpinnerModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
