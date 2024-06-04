document.getElementById('menu-toggle').addEventListener('click', function () {
    var mobileMenu = document.getElementById('menu-mobile');
    if (mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.remove('hidden');
    } else {
        mobileMenu.classList.add('hidden');
    }
});
