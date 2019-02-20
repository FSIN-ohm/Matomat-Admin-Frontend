import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatSidenavModule, MatToolbarModule, MatButtonModule, MatIconModule, MatListModule, MatCardModule, MatDialogModule, MatTableModule,
  MatMenuModule, MatProgressSpinnerModule, MatPaginatorModule, MatSortModule, MatSelectModule
} from '@angular/material';
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
import { ProductModalComponent } from './products/product-modal/product-modal.component';
import { DeleteAccountModalComponent } from './account-management/delete-account-modal/delete-account-modal.component';
import { DeleteProductModalComponent } from './products/delete-product-modal/delete-product-modal.component';

import { AlertComponent } from './directives';
import { AuthGuard, AlertService, AuthenticationService, UserService } from './auth';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

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
    DeleteAccountModalComponent,
    UserPageComponent,
    ProductModalComponent,
    DeleteProductModalComponent,
    AlertComponent
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
    MatProgressSpinnerModule, MatPaginatorModule, MatSortModule, MatSelectModule,
    HttpClientModule,
  ],
  
  entryComponents: [AccountModalComponent, DeleteAccountModalComponent, ProductModalComponent, DeleteProductModalComponent],
  providers: [
    AuthGuard,
    AlertService,
    AuthenticationService,
    UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
