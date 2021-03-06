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
import { AccountManagementComponent } from './account-management/account-management.component';
import { ProductsComponent } from './products/products.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';

import { AccountModalComponent } from './account-management/account-modal/account-modal.component';
import { ToastrModule } from 'ngx-toastr';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ModalModule } from 'ngx-bootstrap/modal';


import { FormsModule } from '@angular/forms';
import { ProductModalComponent } from './products/product-modal/product-modal.component';
import { DataTableComponent } from './data-table/data-table.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'

import { OrderFormComponent } from './order-form/order-form.component';
import { DataService } from './data.service';

@NgModule({
  declarations: [
    AppComponent,
    MainNavigationComponent,
    LoginPageComponent,
    SettingsComponent,
    AccountManagementComponent,
    ProductsComponent,
    TransactionsComponent,
    AccountModalComponent,
    ProductModalComponent,
    DataTableComponent,
    OrderFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule,
    MatListModule,
    MatGridListModule,
    ModalModule.forRoot(),
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    ToastrModule.forRoot(),
    TabsModule.forRoot(),
    FormsModule,
    MatCardModule,
    MatDialogModule,
    MatTableModule,
    MatMenuModule,
    MatRadioModule,
    MatProgressSpinnerModule, MatPaginatorModule, MatSortModule, MatSelectModule,
    HttpClientModule,
  ],
  entryComponents: [AccountModalComponent, ProductModalComponent],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
