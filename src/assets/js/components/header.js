document.getElementById('menu-toggle').addEventListener('click', function () {
    var mobileMenu = document.getElementById('menu-mobile');
    if (mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.remove('hidden');
    } else {
        mobileMenu.classList.add('hidden');
    }
});
document.addEventListener("DOMContentLoaded", function() {
    function normalizePath(path) {
        // Asegurarse de que la ruta no termine con '/'
        return path.endsWith('/') ? path.slice(0, -1) : path;
    }
    const currentLocation = normalizePath(window.location.pathname);
    const menuLinks = document.querySelectorAll('header nav .menu-option a');

    menuLinks.forEach(link => {
        if(normalizePath(link.getAttribute('href')) === currentLocation) {
            link.classList.add('bg-gray-900', 'text-white');
            link.classList.remove('text-gray-300', 'hover:text-white', 'hover:bg-gray-700');
        } else {
            link.classList.add('text-gray-300', 'hover:text-white', 'hover:bg-gray-700');
            link.classList.remove('bg-gray-900', 'text-white');
        }
    });

});
