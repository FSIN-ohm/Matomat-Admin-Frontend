import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})

export class AuthService {
    user: string;
    password: string;
    isAuthorized = false;
    private url = environment.URL + 'v1/admins/me'

    constructor(private http: HttpClient) { }

    login(username: string, password: string) {
        this.user = username;
        this.password = password;
        const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
        return this.http.get(this.url, { responseType: 'text', observe: 'response', headers: headers });
    }

    logout() {
        this.user = '';
        this.password = '';
        this.isAuthorized = false;
    }
}