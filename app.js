const APP_ROOT = document.getElementById('app-root');
const DYNAMIC_JS = document.getElementById('dynamic-js');
const DYNAMIC_CSS = document.getElementById('dynamic-css');

const APP_STATE = {
    authUser: null
}

const API_ROOT = 'http://localhost:5000';

window.onload = () => {
    render('login');
}

function render(viewName) {
    let xhr = new XMLHttpRequest();
    let path = `components/${viewName}-component/${viewName}.component`;
    xhr.open('GET', `${path}.html`);
    xhr.send();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            APP_ROOT.innerHTML = xhr.responseText;
            loadViewScript(`${path}.js`);
        }
    }
}

function loadViewScript(scriptPath) {
    let script = document.getElementById('dynamic-js');
    if (script) script.remove();
    script = document.createElement('script');
    script.id = 'dynamic-js'
    script.src = scriptPath;
    document.body.appendChild(script);
}
