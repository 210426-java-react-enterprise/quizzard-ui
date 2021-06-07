import { Router } from './util/router.js';
import navbarComponent from './components/navbar/navbar.component.js';
import loginComponent from './components/login/login.component.js';
import dashboardComponent from './components/dashboard/dashboard.component.js';

//-----------------------------------------------------------------
let routes = [
    {
        path: '/login',
        component: loginComponent
    },
    {
        path: '/dashboard',
        component: dashboardComponent
    }
]

const router = new Router(routes);

/*
    When the window is finished loading the document, we will:
        1. Render the NavbarComponent to the screen.
        2. Navigate the main view to the LoginComponent
*/
window.onload = () => {
    
    navbarComponent.render();
    router.navigate('/login');
}

export default (() => router)();