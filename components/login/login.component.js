import { ViewComponent } from '../view.component.js';
import env from '../../util/env.js';
import state from '../../util/state.js';
import router from '../../app.js';

LoginComponent.prototype = new ViewComponent('login');
function LoginComponent() {

    let usernameFieldElement;
    let passwordFieldElement;
    let loginButtonElement;
    let errorMessageElement;

    let username = '';
    let password = '';
    
    function updateUsername(e) {
        username = e.currentTarget.value;
    }
    
    function updatePassword(e) {
        password = e.currentTarget.value;
    }

    function updateErrorMessage(errorMsg) {
        if (!errorMsg) {
            errorMessageElement.setAttribute('hidden', true);
            errorMessageElement.value = '';
        } else {
            console.log('update error message: ' + errorMsg)
            errorMessageElement.removeAttribute('hidden');
            errorMessageElement.innerText = errorMsg;
        }
    }

    function login() {

        console.log(username, password);

        if (!username || !password) {
            updateErrorMessage('You need to provide a username and a password!');
            return;
        }
        
        let credentials = {
            username: username,
            password: password
        };

        fetch(`${env.apiUrl}/auth`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
        })
            .then(resp => resp.json())
            .then(payload => {
                if (payload) {
                    state.authUser = payload;
                    console.log('SUCCESS: ', payload);
                    updateErrorMessage('');
                    router.navigate('/dashboard');
                } else {
                    updateErrorMessage('No account matching provided credentials!');
                }
            });
        

    }

    this.render = function() {

        LoginComponent.prototype.injectStylesheet();
        LoginComponent.prototype.injectTemplate(() => {

            usernameFieldElement = document.getElementById('login-form-field-username');
            passwordFieldElement = document.getElementById('login-form-field-password');
            loginButtonElement = document.getElementById('login-form-button');
            errorMessageElement = document.getElementById('error-msg');
    
            usernameFieldElement.addEventListener('keyup', updateUsername);
            passwordFieldElement.addEventListener('keyup', updatePassword);
    
            loginButtonElement.addEventListener('click', login);
    
            window.history.pushState('login', 'Login', '/login');

        });
                
    }

};

export default new LoginComponent();
