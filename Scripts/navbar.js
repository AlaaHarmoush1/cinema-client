const isLoggedin = localStorage.getItem("isLoggedIn");

if (isLoggedin !== "true") {
    window.location.href = "../index.html";
}

document.getElementById("humberger-menu").addEventListener('click', () => {
    const menu = document.getElementById("mobile-menu-section");
    menu.classList.toggle("active");
});