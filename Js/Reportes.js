document.addEventListener('DOMContentLoaded', function() {
    const reportsFilterForm = document.getElementById('reportsFilterForm');
    const reportsDataContainer = document.getElementById('reportsData');
    const elementosEntradaSuave = document.querySelectorAll('.entrada-suave');
    const listaClientes = [
        'Ana López',
        'Carlos Pérez',
        'Sofía Gómez',
        'Mateo Rodríguez',
        'Isabella Vargas',
        'Javier Soto',
        'Valentina Ruiz',
        'Sebastián Castro',
        'Camila Flores',
        'Diego Núñez'

    ];

    elementosEntradaSuave.forEach(elemento => {
        elemento.classList.add('visible');
    });

    reportsFilterForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const reportType = document.getElementById('reportType').value;
        const startDate = document.getElementById('startDate').value;
        const endDate = document.getElementById('endDate').value;

        console.log('Generando reporte:', { reportType, startDate, endDate });

        const reportResults = generarDatosReporte(reportType, startDate, endDate);

        mostrarReporte(reportResults);
    });

    function generarDatosReporte(type, start, end) {
        if (type === 'ventas') {
            return `<p><strong>Reporte de Ventas del ${start} al ${end}:</strong></p><ul><li><strong>Producto A:</strong> 100 unidades</li><li><strong>Producto B:</strong> 50 unidades</li></ul>`;
        } else if (type === 'inventario') {
            return `<p><strong>Reporte de Inventario al ${end}:</strong></p><ul><li><strong>Producto A:</strong> <span>25 unidades restantes</span></li><li><strong>Producto B:</strong> <span>75 unidades restantes</span></li></ul>`;
        } else if (type === 'clientes') {
            const indiceAleatorio = Math.floor(Math.random() * listaClientes.length);
            const clienteAleatorio = listaClientes[indiceAleatorio];
            return `<p><strong>Reporte de Clientes Activos del ${start} al ${end}:</strong></p><p>Cliente seleccionado aleatoriamente: <strong>${clienteAleatorio}</strong></p>`;
        }
        return '<p>No se encontraron datos para este reporte.</p>';
    }

    function mostrarReporte(data) {
        reportsDataContainer.innerHTML = data;
    }
});