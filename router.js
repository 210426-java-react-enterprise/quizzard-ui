function Router() {

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

    return {
        navigate(routePath) {
            let nextView = routes.filter(r => r.path == routePath).pop();
            if (nextView)  {
                loadJS(nextView.scriptPath);
            }
        }
    }

}