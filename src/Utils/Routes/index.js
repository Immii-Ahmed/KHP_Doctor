import { Apointment, ContactUs, Home, Services } from "../../Components";
import { DoctorsElement, LoginElement, SignupElement } from "../../Elements";

export const unAuthenticatedRoutes = [
    {
        path: '/',
        element:<Home/>
    },
    {
        path: '/login',
        element:<LoginElement/>
    },
    {
        path: '/signup',
        element: <SignupElement/>
    }
];

export const unAuthenticatedRouteNames = ['Home', 'Login', 'Signup'];

export const authenticatedRoutes = [
    {
        path: '/',
        element:<Home/>
    },
    {
        path: '/contactus',
        element:<ContactUs/>
    },
    {
        path: '/doctors',
        element:<DoctorsElement/>
    },
    {
        path: '/Services',
        element:<Services/>
    },
    {
        path: '/apointments',
        element:<Apointment/>
    }
];

export const authenticatedRouteNames = ['Home','Contact US','Doctors','Services']