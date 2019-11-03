import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ENDPOINT_URL } from '../config';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(
        private http: HttpClient,
    ) { }

    public signin(username: string, password: string) {
        const url = `${ENDPOINT_URL}/api/TokenAuth/Authenticate`;
        return this.http.post(url, {
            username,
            password,
        });
    }

    public isAuthenticated() {
        const token = localStorage.getItem('token');
        return token;
    }
}
