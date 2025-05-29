//JS for nav dropdown
document.addEventListener("DOMContentLoaded", function () {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navLinks');

    navToggle.addEventListener('click', function () {
        navMenu.classList.toggle('active');
    });

    document.querySelectorAll('.nav__link--anchor').forEach(link => {
        link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        });
    });
});

