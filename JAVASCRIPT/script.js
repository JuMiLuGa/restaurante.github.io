document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.menu-icon');
    const menuList = document.querySelector('.menu ul');

    menuIcon.addEventListener('click', function() {
        menuList.classList.toggle('active');
    });

    const currentPage = window.location.pathname.split('/').pop();

    const menuLinks = document.querySelectorAll('.menu a');
    menuLinks.forEach(function(link) {
        const linkHref = link.getAttribute('href').split('/').pop();

        if (currentPage === linkHref) {
            link.classList.add('active');
            link.parentElement.classList.add('active');
        }
    });
});