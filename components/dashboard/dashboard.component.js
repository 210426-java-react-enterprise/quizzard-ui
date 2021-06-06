(function() {
    if (!APP_STATE.authUser) ROUTER.navigate('/login');
})();

DashboardComponent.prototype = new ViewComponent('dashboard');
let dashboardComponent = new DashboardComponent();
dashboardComponent.render();

function DashboardComponent() {

    let welcomeUserElement;
    let currentUsername = APP_STATE.authUser.username;

    this.render = function() {

        DashboardComponent.prototype.injectStylesheet();
        DashboardComponent.prototype.injectTemplate(() => {

            welcomeUserElement = document.getElementById('welcome-user');
            welcomeUserElement.innerText = currentUsername;
   
            window.history.pushState('dashboard', 'Dashboard', '/dashboard');

        });
                
    }

}