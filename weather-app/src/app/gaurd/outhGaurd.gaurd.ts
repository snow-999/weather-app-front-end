import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChildFn, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { UserService } from '../services/user-service';



export const authGuard: CanActivateFn = (route, state) => {

    const cookieService = inject(CookieService)
    const router = inject(Router)
    const token = cookieService.get('JWT_TOKEN');
    if (token) {
        return true;
    } else {
        router.navigate([''])
        return false;
    }

};
export const adminGuard: CanActivateFn = (childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    const authService = inject(UserService)
    return authService.hasRole("SUPER_ADMIN")
};