import env from '../util/env.js';

export function ViewComponent(viewName) {

    let templateHolder = '';
    let frag = `components/${viewName}/${viewName}.component`;

    this.viewMetadata = {
        name: viewName,
        url: `/${viewName}`,
        templateUrl: `${frag}.html`,
        stylesheetUrl: `${frag}.css`
    }

    this.injectTemplate = function(cb) {
        if (templateHolder) {
            env.rootDiv.innerHTML = templateHolder;
        } else {
            fetch(this.viewMetadata.templateUrl)
                .then(resp => resp.text())
                .then(body => {
                    templateHolder = body
                    env.rootDiv.innerHTML = templateHolder;
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