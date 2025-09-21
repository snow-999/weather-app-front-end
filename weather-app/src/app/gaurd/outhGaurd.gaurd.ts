import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';



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