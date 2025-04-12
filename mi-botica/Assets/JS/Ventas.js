// Escuchar el evento de envío del formulario
document.getElementById("ventaForm").addEventListener("submit", function(e) {
  e.preventDefault(); // Prevenir el envío por defecto

  // Obtener valores del formulario
  const producto = document.getElementById("producto").value;
  const cantidad = document.getElementById("cantidad").value;
  
  // Validación: la cantidad debe ser mayor o igual a 1
  if (parseInt(cantidad) < 1) {
    document.getElementById("errorCantidad").style.display = "inline";
    return;
  } else {
    document.getElementById("errorCantidad").style.display = "none";
  }

  // Formatear la fecha actual como dd/mm/yyyy
  const fechaActual = new Date();
  const dia = fechaActual.getDate().toString().padStart(2, '0');
  const mes = (fechaActual.getMonth() + 1).toString().padStart(2, '0');
  const anio = fechaActual.getFullYear();
  const fechaFormateada = `${dia}/${mes}/${anio}`;

  // Mostrar mensaje de confirmación
  const mensajeConfirmacion = document.getElementById("mensaje-confirmacion");
  mensajeConfirmacion.style.display = "block";
  setTimeout(() => {
    mensajeConfirmacion.style.display = "none";
  }, 3000);

  // Crear un nuevo registro para el historial de ventas
  const registroDiv = document.createElement("div");
  registroDiv.className = "registro";
  registroDiv.innerHTML = `
    <p><strong>Producto:</strong> ${producto}</p>
    <p><strong>Cantidad:</strong> ${cantidad}</p>
    <p><strong>Fecha:</strong> ${fechaFormateada}</p>
  `;

  // Agregar el nuevo registro al final de la sección de registros
  const registrosSection = document.querySelector(".registros");
  registrosSection.appendChild(registroDiv);

  // Limpiar el formulario
  document.getElementById("ventaForm").reset();
});
