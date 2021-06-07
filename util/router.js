export function Router(routes) {

    this.navigate = function(routePath) {
        console.log(routes)
        let nextView = routes.filter(r => r.path == routePath).pop();
        if (nextView)  {
            console.log(nextView)
            nextView.component.render();
        }
    }

}
