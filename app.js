const APP_ROOT = document.getElementById('app-root');

const APP_STATE = {
    currentView: 'login',
    authUser: null
}

const API_ROOT = 'http://localhost:5000';
const ROUTER = new Router();

window.onload = () => {
    ROUTER.navigate('/login');
}

function ViewComponent(viewName) {

    let templateHolder = '';
    let frag = `components/${viewName}/${viewName}.component`;

    this.viewMetadata = {
        name: viewName,
        url: `/${viewName}`,
        templateUrl: `${frag}.html`,
        stylesheetUrl: `${frag}.css`,
        scriptUrl: `${frag}.js`
    }

    this.injectTemplate = function(cb) {

        if (templateHolder) {
            APP_ROOT.innerHTML = templateHolder;
        } else {
            fetch(this.viewMetadata.templateUrl)
                .then(resp => resp.text())
                .then(body => {
                    templateHolder = body
                    APP_ROOT.innerHTML = templateHolder;
                    cb();
                })
                .catch(err => console.error(err))
        }

    }

    this.injectStylesheet = function() {
        let stylesheet = document.getElementById('dynamic-css');
        if (stylesheet) stylesheet.remove();
        stylesheet = document.createElement('link');
        stylesheet.id = 'dynamic-css'
        stylesheet.rel = 'stylesheet';
        stylesheet.href = this.viewMetadata.stylesheetUrl;
        document.head.appendChild(stylesheet);
    }

}
