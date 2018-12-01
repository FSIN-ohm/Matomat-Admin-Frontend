import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import { AccountModalComponent } from './account-management/account-modal/account-modal.component';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';
import { UserPageComponent } from './user-page/user-page.component';


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
    AccountModalComponent,
    UserPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
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
    MatProgressSpinnerModule
  ],
  entryComponents: [AccountModalComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
