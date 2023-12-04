function switchStyle(sheet) {
    document.getElementById('pagestyle').setAttribute('href', sheet);
    window.scrollTo(0, 0); 

    var navbarCollapse = document.querySelector('.navbar-collapse');

    if (navbarCollapse.classList.contains('show')) {
        navbarCollapse.classList.remove('show');
    }
}
