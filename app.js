const APP_ROOT = document.getElementById('app-root');

const APP_STATE = {
    currentView: 'login',
    authUser: null
}

const API_ROOT = 'http://localhost:5000';
const ROUTER = new Router();

window.onload = async () => {
    ROUTER.navigate('login');
}
