//JS for nav dropdown
document.addEventListener("DOMContentLoaded", function () {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navLinks');

    if (!navToggle || !navMenu) return; // defensive: noop if nav isn't present

    navToggle.addEventListener('click', function () {
        navMenu.classList.toggle('active');
    });

    document.querySelectorAll('.nav__link--anchor').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });

    // Auto-apply image preserve class to content images (src under Media/) so
    // they aren't cropped. Skip images explicitly marked with image--no-preserve.
    try {
        document.querySelectorAll('img').forEach(img => {
            if (img.classList.contains('image--preserve') || img.classList.contains('image--no-preserve')) return;
            const src = img.getAttribute('src') || '';
            if (/\bMedia\b/.test(src)) {
                img.classList.add('image--preserve');
            }
        });
    } catch (e) {
        // harmless if DOM differs; do nothing
    }
});

