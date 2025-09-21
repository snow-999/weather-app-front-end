import { NavItem } from "./models/navItemModel";

export const navItems: NavItem[] = [
    {
        title: "Home",
        routerLink: "home",
        class: "nav-link",
        show: true
    },
    {
        title: "Profile",
        routerLink: "profile",
        class: "nav-link",
        show: false
    },
    {
        title: "Login",
        routerLink: "",
        class: "nav-link",
        show: true
    },
    {
        title: "Signup",
        routerLink: "signup",
        class: "nav-link",
        show: true
    },
    {
        title: "Logout",
        routerLink: "",
        class: "nav-link",
        show: false,
        // func: logOut
    }
]


export const SuoerAdminNavItems: NavItem[] = [
    {
        title: "Home",
        routerLink: "home",
        class: "nav-link",
        show: true
    },
    {
        title: "Profile",
        routerLink: "profile",
        class: "nav-link",
        show: false
    },
    {
        title: "Users",
        routerLink: "users",
        class: "nav-link",
        show: true
    },
    {
        title: "Logout",
        routerLink: "",
        class: "nav-link",
        show: false,
        // func: logOut
    }
]
