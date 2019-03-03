import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { } // richtiger Client?

  public uploadImage(image: File): Observable<Object> {
    const formData = new FormData();
    formData.append('image', image);

    return this.http.post('/api/v1/image-upload', formData); // TODO: DB Anbindung
  }
}
