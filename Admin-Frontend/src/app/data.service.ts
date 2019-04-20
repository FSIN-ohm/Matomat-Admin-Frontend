import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  mockUp = "http://127.0.0.1:5000/v1/";

  constructor(private http: HttpClient) { } // richtiger Client?

  public uploadImage(image: File): Observable<Object> {
    const formData = new FormData();
    formData.append('image', image);

    return this.http.post('/api/v1/image-upload', formData); // TODO: DB Anbindung
  }

  public getUsers() {
    return this.http.get(this.mockUp + 'users');
  }

  public getUserById(id: number) {
    return this.http.get(this.mockUp + 'users/' + id);
  }

  public addUser(user: any) {
    return this.http.post(this.mockUp + 'users/', user);
  }

  public editUser(user: any) {
    return this.http.patch(this.mockUp + 'users', user)
  }

  public deleteUser(id: number) {
    return this.http.delete(this.mockUp + 'users/' + id);
  }

  public getProducts() {
    console.log(this.mockUp + 'product_infos');
    return this.http.get(this.mockUp + 'product_infos');
  }

  public getProductById(id: number) {
    return this.http.get(this.mockUp + 'product_infos/' + id);
  }

  public addProduct(product: any) {
    return this.http.post(this.mockUp + 'product_infos', product);
  }

  public editProduct(product: any) {
    return this.http.patch(this.mockUp + 'product_infos', product);
  }

  public deleteProduct(id: number) {
    return this.http.delete(this.mockUp + 'product_infos/' + id);
  }

  public getTransactions() {
    return this.http.get(this.mockUp + 'transactions');
  }
}
