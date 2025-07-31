function toggleMenu() {
    const menuItems = document.getElementById('menu-items');
    menuItems.classList.toggle('open');
}

function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark-theme');

    const themeToggle = document.getElementById('theme-toggle');
    if (body.classList.contains('dark-theme')) {
        themeToggle.textContent = 'light_mode';
    } else {
        themeToggle.textContent = 'dark_mode';
    }   
}