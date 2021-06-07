/*  
    Convenience variables for commonly referenced objects
*/
const APP_ROOT = document.getElementById('app-root');

const APP_STATE = {
    currentView: 'login',
    authUser: null
}

const API_ROOT = 'http://localhost:5000';
const ROUTER = new Router();

//-----------------------------------------------------------------

/*
    Immediately load the NavbarComponent's JS file to the document. This needs to be done
    within this IIFE outside of the window.onload callback to avoid a ReferenceError
*/
(function() {
    loadJS('components/navbar/navbar.component.js', 'navbar-js');
})();

//-----------------------------------------------------------------

/*
    When the window is finished loading the document, we will:
        1. Render the NavbarComponent to the screen.
        2. Navigate the main view to the LoginComponent
*/
window.onload = () => {
    new NavbarComponent().render();
    ROUTER.navigate('/login');
}

//-----------------------------------------------------------------

/**
 * Creates (or updates) a script tag within the body of the document whose 
 * src attribute value is the provided path to a JavaScript file.
 * 
 * @param {string} scriptPath 
 * @param {string} scriptId 
 */
function loadJS(scriptPath, scriptId = 'dynamic-js') {
    let script = document.getElementById(scriptId);
    if (script) script.remove();
    script = document.createElement('script');
    script.id = scriptId;
    script.src = scriptPath;
    document.body.appendChild(script);
}

//-----------------------------------------------------------------

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
        console.log(`injecting template: ${viewName}`)
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
