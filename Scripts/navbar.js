const isLoggedIn = localStorage.getItem('isLoggedIn')



window.addEventListener('DOMContentLoaded', () => {
    if(isLoggedIn == 'false' || isLoggedIn == null){
    window.location.href = "http://127.0.0.1:5500//Fontend/cinema-client/index.html"
}
})




document.getElementById("humberger-menu").addEventListener('click', () => {
    const menu = document.getElementById("mobile-menu-section");
    menu.classList.toggle("active");
});


function Logout() {
    localStorage.setItem('isLoggedIn', false);
    localStorage.setItem('email', null);
    localStorage.setItem('user_id', null);
    localStorage.setItem('name', null);
    window.location.href = 'http://127.0.0.1:5500//Fontend/cinema-client/index.html'
}