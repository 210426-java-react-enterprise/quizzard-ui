(function() {
    if (!APP_STATE.authUser) render('login');
    window.history.pushState('dashboard', 'Dashboard', '/dashboard.html');
    document.getElementById('current-user').innerText = APP_STATE.authUser.username;
})();