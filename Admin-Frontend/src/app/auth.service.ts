import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class AuthService {
    user: string;
    password: string;
    isAuthorized = false;

    constructor(private http: HttpClient) { }

    login(username: string, password: string) {
        console.log(username);
        console.log(password);
        this.user = username;
        this.password = password;
        const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
        return this.http.get('https://api.matohmat.fachschaft.in', { responseType: 'text', observe: 'response', headers: headers });
    }

    logout() {
        this.user = '';
        this.password = '';
        this.isAuthorized = false;
    }
}