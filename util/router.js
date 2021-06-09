export function Router(routes) {

    this.navigate = function(routePath) {
        let nextView = routes.filter(r => r.path == routePath).pop();
        if (nextView)  {
            nextView.component.render();
        }
    }

}
