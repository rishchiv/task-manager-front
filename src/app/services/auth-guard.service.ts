import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuardService {

    constructor(
        private auth: AuthService,
        private router: Router
    ) { }

    canActivate(route: ActivatedRouteSnapshot) {
        const requiresLogin = route.data.requiresLogin || false;

        if (requiresLogin) {
            return this.auth.isAuthenticated() ? true : this.router.navigate(['/signin']);
        }

        if (!requiresLogin && this.auth.isAuthenticated()) {
            return this.router.navigate(['/home']);
        }

        return true;
    }
}
