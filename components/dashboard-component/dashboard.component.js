(function() {
    window.history.pushState('dashboard', 'Dashboard', '/dashboard.html');
    document.getElementById('current-user').innerText = APP_STATE.authUser.username;
})();