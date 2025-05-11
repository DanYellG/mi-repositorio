document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.getElementById('newInquiryForm');
    const mensajeConfirmacion = document.getElementById('mensaje-confirmacion');
    const elementosEntradaSuave = document.querySelectorAll('.entrada-suave');

    console.log('El script AtencionClientes.js se ha cargado.'); 

    elementosEntradaSuave.forEach(elemento => {
        elemento.classList.add('visible');
    });

    if (formulario) {
        console.log('Formulario encontrado:', formulario); 
        formulario.addEventListener('submit', function(event) {
            event.preventDefault();
            console.log('Formulario enviado.'); 

            const nombre = document.getElementById('customerName').value;
            const edad = document.getElementById('customerAge').value;
            const dni = document.getElementById('customerDNI').value;
            const email = document.getElementById('customerEmail').value;
            const telefono = document.getElementById('customerPhone').value;
            const detalles = document.getElementById('inquiryDetails').value;

            const consulta = { nombre, edad, dni, email, telefono, detalles, fecha: new Date().toLocaleDateString() };
            console.log('Datos de la consulta a guardar:', consulta); 
            guardarConsultaLocal(consulta);

            mensajeConfirmacion.style.display = 'block';
            mensajeConfirmacion.classList.add('aparecer-animado');

            setTimeout(() => {
                formulario.reset();
                mensajeConfirmacion.classList.remove('aparecer-animado');
                mensajeConfirmacion.style.display = 'none';
            }, 3000);
        });
    } else {
        console.error('No se encontró el formulario con el ID "newInquiryForm".'); 
    }

    function guardarConsultaLocal(consulta) {
        console.log('Función guardarConsultaLocal() llamada con:', consulta); 
        const consultasGuardadas = localStorage.getItem('consultasClientes') ? JSON.parse(localStorage.getItem('consultasClientes')) : [];
        consultasGuardadas.push(consulta);
        localStorage.setItem('consultasClientes', JSON.stringify(consultasGuardadas));
        console.log('Consulta guardada en localStorage:', consulta); 
    }
});