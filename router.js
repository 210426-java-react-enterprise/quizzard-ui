function Route(name) {
    this.name = name;
    this.path = '/' + name;
    this.templateUrl = `components/${name}/${name}.component.html`;
    this.scriptUrl = `components/${name}/${name}.component.js`;
    this.cssUrl = `components/${name}/${name}.component.css`;
    this.template = undefined;
    this.fetchTemplate = () => {
        return this.template || fetch(this.templateUrl)
                                    .then(resp => resp.text())
                                    .then(body => this.template = body);
    }
}

function Router(startingViewName) {

    let views = [
        new Route('login'),
        new Route('register'),
        new Route('dashboard')
    ];

    let currentView = views.filter(v => v.name == startingViewName).pop();

    function injectCss() {
        let stylesheet = document.getElementById('dynamic-css');
        if (stylesheet) stylesheet.remove();
        stylesheet = document.createElement('link');
        stylesheet.id = 'dynamic-css'
        stylesheet.rel = 'stylesheet';
        stylesheet.href = currentView.cssUrl;
        document.head.appendChild(stylesheet);
    }

    function injectJs() {
        let script = document.getElementById('dynamic-js');
        if (script) script.remove();
        script = document.createElement('script');
        script.id = 'dynamic-js'
        script.src = currentView.scriptUrl;
        document.body.appendChild(script);
    }

    return {
        navigate(viewName) {
            currentView = views.filter(v => v.name == viewName).pop()
            currentView.fetchTemplate()
                       .then(template => {
                           APP_ROOT.innerHTML = template
                           injectCss();
                           injectJs();
                       });
                 
        }
    }

}