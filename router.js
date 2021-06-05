const routes = [
    {
        path: '/login',
        templateUrl: 'components/login/login.component.html',
        scriptUrl: 'components/login/login.component.js',
        cssUrl: 'components/login/login.component.css'
    },
    {
        path: '/register',
        template: 'components/register/register.component.html',
        scriptUrl: 'components/register/register.component.js',
        cssUrl: 'components/register/register.component.css'
    },
    {
        path: '/dashboard',
        template: 'components/dashboard/dashboard.component.html',
        scriptUrl: 'components/dashboard/dashboard.component.js',
        cssUrl: 'components/dashboard/dashboard.component.css'
    },
]

function Router(startingViewName) {

    let views = routes.map(view => {
        fetch(view.template)
            .then(resp => resp.json())
            .then(template => view.template = template)
            .catch(err => console.error(err));
    });

    let currentView = views.filter(v => v.name == startingViewName).pop();

    return {

        renderCurrentView() {
            if (this.currentView) {
    
                APP_ROOT.innerHTML = currentView.template;
    
                let stylesheet = document.getElementById('dynamic-css');
                if (stylesheet) stylesheet.remove();
                stylesheet = document.createElement('link');
                stylesheet.id = 'dynamic-css'
                stylesheet.rel = 'stylesheet';
                stylesheet.href = currentView.cssUrl;
                document.head.appendChild(stylesheet);
    
                let script = document.getElementById('dynamic-js');
                if (script) script.remove();
                script = document.createElement('script');
                script.id = 'dynamic-js'
                script.src = currentView.scriptUrl;
                document.body.appendChild(script);
    
            }
        }
    }

}