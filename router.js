function Router(startingViewName) {

    let routes = [
        {
            path: '/login',
            scriptPath: 'components/login/login.component.js'
        },
        {
            path: '/dashboard',
            scriptPath: 'components/dashboard/dashboard.component.js'
        }
    ]


    function updateDynamicJsSource(scriptPath) {
        let script = document.getElementById('dynamic-js');
        if (script) script.remove();
        script = document.createElement('script');
        script.id = 'dynamic-js'
        script.src = scriptPath;
        document.body.appendChild(script);
    }

    return {
        navigate(routePath) {
            let nextViewScriptPath = routes.filter(r => r.path == routePath).pop().scriptPath;
            updateDynamicJsSource(nextViewScriptPath);
        }
    }

}