NavbarComponent.prototype = new ViewComponent('login');
let navbarComponent = new NavbarComponent();
navbarComponent.render();

function NavbarComponent() {
    
    this.render = function() {
        document.getElementById('navbar').innerHTML = '<h1>NavbarComponent works!</h1>';
    }

}