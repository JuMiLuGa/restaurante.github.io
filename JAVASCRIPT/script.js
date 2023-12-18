document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.menu-icon');
    const menuList = document.querySelector('.menu ul');

    // Toggle del menú desplegable
    menuIcon.addEventListener('click', function() {
        menuList.classList.toggle('active');
    });

    // Obtener la URL de la página actual
    const currentPage = window.location.pathname.split('/').pop();

    // Iterar sobre los enlaces del menú
    const menuLinks = document.querySelectorAll('.menu a');
    menuLinks.forEach(function(link) {
        const linkHref = link.getAttribute('href').split('/').pop();

        // Si la URL de la página actual coincide con la URL del enlace, agrega la clase 'active'
        if (currentPage === linkHref) {
            link.classList.add('active');
            link.parentElement.classList.add('active');
        }
    });
});