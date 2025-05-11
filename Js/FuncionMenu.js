document.addEventListener('DOMContentLoaded', function() {
    const enlacesMenu = document.querySelectorAll('#menu-principal ul li a');

    enlacesMenu.forEach(enlace => {
        enlace.addEventListener('mouseenter', () => {
            enlace.classList.add('hovered');
        });

        enlace.addEventListener('mouseleave', () => {
            enlace.classList.remove('hovered');
        });
    });
});