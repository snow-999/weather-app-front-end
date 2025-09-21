import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Signup } from './signup/signup';
import { NotFoundPage } from './not-found-page/not-found-page';
import { HomePage } from './home-page/home-page';
import { Profile } from './profile/profile';
import { authGuard } from './gaurd/outhGaurd.gaurd';

export const routes: Routes = [
    { path: '', component: Login },
    { path: 'home', component: HomePage },
    { path: 'signup', component: Signup },
    { path: 'profile', component: Profile, canActivate: [authGuard] },
    { path: '**', component: NotFoundPage }
];
