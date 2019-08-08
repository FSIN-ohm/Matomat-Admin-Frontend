import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private _productsUrl = environment.URL + 'v1/products';
  private _transactionsUrl = environment.URL + 'v1/transactions';
  private _usersUrl = environment.URL + 'v1/users';
  private _adminUrl = environment.URL + 'v1/admins'

  constructor(private http: HttpClient, private authService: AuthService) { }

  private createHeader(): HttpHeaders {
    return new HttpHeaders({ Authorization: 'Basic ' + btoa(this.authService.user + ':' + this.authService.password) });
  }

  public getUsers() {
    return this.http.get(this._usersUrl, { headers: this.createHeader() });
  }

  public getUserById(id: number) {
    return this.http.get(this._usersUrl + '/' + id, { headers: this.createHeader() });
  }

  public editUser(user: any, id: number) {
    return this.http.patch(this._usersUrl + '/' + id, user, { headers: this.createHeader() });
  }

  public deleteUser(id: number) {
    return this.http.delete(this._usersUrl + '/' + id, { headers: this.createHeader() });
  }

  public getAdmins() {
    return this.http.get(this._adminUrl, { headers: this.createHeader() });
  }

  public getAdminById(id: number) {
    return this.http.get(this._adminUrl + '/' + id, { headers: this.createHeader() });
  }

  public getLoggedInAdmin() {
    return this.http.get(this._adminUrl + '/me', { headers: this.createHeader() });
  }

  public addAdmin(admin: any) {
    return this.http.post(this._adminUrl, admin, { headers: this.createHeader() });
  }

  public editAdmin(admin: any, id: number) {
    return this.http.patch(this._adminUrl + '/' + id, admin, { headers: this.createHeader() });
  }

  public deleteAdmin(id: number) {
    return this.http.delete(this._adminUrl + '/' + id, { headers: this.createHeader() });
  }

  public getProducts() {
    return this.http.get(this._productsUrl, { headers: this.createHeader() });
  }

  public getProductById(id: number) {
    return this.http.get(this._productsUrl + '/' + id, { headers: this.createHeader() });
  }

  public addProduct(product: any) {
    return this.http.post(this._productsUrl, product, { headers: this.createHeader() });
  }

  public editProduct(product: any, id: number) {
    return this.http.patch(this._productsUrl + '/' + id, product, { headers: this.createHeader() });
  }

  public deleteProduct(id: number) {
    return this.http.delete(this._productsUrl + '/' + id, { headers: this.createHeader() });
  }

  public getTransactions() {
    return this.http.get(this._transactionsUrl, { headers: this.createHeader() });
  }

  public makeOrderTransaction(order: any) {
    return this.http.post(this._transactionsUrl + '/order', order, { headers: this.createHeader() });
  }

  public makePurchaseTransaction(order:any) {
    return this.http.post(this._transactionsUrl + '/purchases', order, { headers: this.createHeader() });
  }
}
