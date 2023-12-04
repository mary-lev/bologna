function switchStyle(sheet) {
    document.getElementById('pagestyle').setAttribute('href', sheet);
    window.scrollTo(0, 0); // Scrolls to the top of the document

    // Get the navbar collapse element
    var navbarCollapse = document.querySelector('.navbar-collapse');

    // Check if the navbarCollapse has the 'show' class and remove it if present
    if (navbarCollapse.classList.contains('show')) {
        navbarCollapse.classList.remove('show');
    }
}
