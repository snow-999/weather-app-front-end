import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Signup } from './signup/signup';
import { NotFoundPage } from './not-found-page/not-found-page';
import { HomePage } from './home-page/home-page';
import { Profile } from './profile/profile';
import { adminGuard, authGuard } from './gaurd/outhGaurd.gaurd';
import { Users } from './users/users';

export const routes: Routes = [
    { path: '', component: Login },
    { path: 'home', component: HomePage },
    { path: 'signup', component: Signup },
    { path: 'profile', component: Profile, canActivate: [authGuard] },
    { path: 'users', component: Users, canActivate: [authGuard, adminGuard], data: { roles: ['ADMIN'] } },
    { path: '**', component: NotFoundPage }
];
