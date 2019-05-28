import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private _productsUrl = environment.URL + 'products';
  private _transactionsUrl = environment.URL + 'transactions';
  private _usersUrl = environment.URL + 'users';
  private _adminUrl = environment.URL + 'admins'

  constructor(private http: HttpClient) { }

  login(username: string, password: string) {
    return this.http.post<any>(`https://api.matohmat.fachschaft.in/`, { username, password })
      .pipe(map(user => {
        // login successful if there's a user in the response
        if (user) {
          // store user details and basic auth credentials in local storage 
          // to keep user logged in between page refreshes
          user.authdata = window.btoa(username + ':' + password);
          localStorage.setItem('currentUser', JSON.stringify(user));
        }

        return user;
      }));
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
  }

  public getUsers() {
    return this.http.get(this._usersUrl);
  }

  public getUserById(id: number) {
    return this.http.get(this._usersUrl + '/' + id);
  }

  public editUser(user: any, id: number) {
    return this.http.patch(this._usersUrl + '/' + id, user)
  }

  public deleteUser(id: number) {
    return this.http.delete(this._usersUrl + '/' + id);
  }

  public getAdmins() {
    return this.http.get(this._adminUrl);
  }

  public getAdminById(id: number) {
    return this.http.get(this._adminUrl + '/' + id);
  }

  public addAdmin(admin: any) {
    return this.http.post(this._adminUrl, admin);
  }

  public editAdmin(admin: any, id: number) {
    return this.http.patch(this._adminUrl + '/' + id, admin);
  }

  public deleteAdmin(id: number) {
    return this.http.delete(this._adminUrl + '/' + id);
  }

  public getProducts() {
    return this.http.get(this._productsUrl);
  }

  public getProductById(id: number) {
    return this.http.get(this._productsUrl + '/' + id);
  }

  public addProduct(product: any) {
    return this.http.post(this._productsUrl, product);
  }

  public editProduct(product: any, id: number) {
    return this.http.patch(this._productsUrl + '/' + id, product);
  }

  public deleteProduct(id: number) {
    return this.http.delete(this._productsUrl + '/' + id);
  }

  public getTransactions() {
    return this.http.get(this._transactionsUrl);
  }
}
