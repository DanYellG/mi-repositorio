// Array para almacenar los productos
let productos = [
    { nombre: 'Paracetamol', precio: 'S/ 1.50', cantidad: 100 },
    { nombre: 'Ibuprofeno', precio: 'S/ 3.00', cantidad: 50 },
    { nombre: 'Vitamina C', precio: 'S/ 4.00', cantidad: 80 }
  ];
  
  // Variable global para determinar si se está editando un producto y su posición
  let productoEditandoIndex = -1;
  
  // Función para mostrar el formulario (por ejemplo, desplegarlo)
  function mostrarFormulario() {
    const formulario = document.getElementById("formulario");
    formulario.style.display = "block"; // Se muestra el formulario
  }
  
  // Función para ocultar el formulario
  function cancelarFormulario() {
    const formulario = document.getElementById("formulario");
    formulario.style.display = "none"; // Se oculta el formulario
    // Reinicia el índice de edición
    productoEditandoIndex = -1;
    // Limpia los campos del formulario, si es necesario
    document.getElementById('nombreProducto').value = '';
    document.getElementById('precioProducto').value = '';
    document.getElementById('cantidadProducto').value = '';
  }
  
  // Función para agregar o actualizar un producto
  function agregarProducto() {
    const nombre = document.getElementById('nombreProducto').value;
    const precio = parseFloat(document.getElementById('precioProducto').value);
    const cantidad = parseInt(document.getElementById('cantidadProducto').value);
  
    // Validación de campos
    if (!nombre || isNaN(precio) || isNaN(cantidad)) {
      alert('Por favor, complete todos los campos correctamente.');
      return;
    }
  
    // Si se está editando (productoEditandoIndex distinto de -1), actualiza ese producto
    if (productoEditandoIndex !== -1) {
      productos[productoEditandoIndex] = {
        nombre,
        precio: `S/ ${precio.toFixed(2)}`,
        cantidad
      };
      productoEditandoIndex = -1; // Reinicia la variable de edición
    } else {
      // Si es un nuevo producto, lo agrega al array
      productos.push({
        nombre,
        precio: `S/ ${precio.toFixed(2)}`,
        cantidad
      });
    }
  
    actualizarTabla(); // Actualiza la tabla con los productos
    cancelarFormulario(); // Oculta y reinicia el formulario
  }
  
  // Función para actualizar la tabla de productos
  function actualizarTabla() {
    const tabla = document.getElementById('tabla-productos').getElementsByTagName('tbody')[0];
    tabla.innerHTML = ''; // Se limpia la tabla
    
    productos.forEach((producto, index) => {
      const row = tabla.insertRow();
      row.innerHTML = `
        <td>${producto.nombre}</td>
        <td>${producto.precio}</td>
        <td>${producto.cantidad}</td>
        <td>
          <button onclick="editarProducto(${index})">Editar</button>
          <!-- Aquí podrías agregar otros botones, p.ej. eliminar -->
        </td>
      `;
    });
  }
  
  // Función para editar un producto
  function editarProducto(index) {
    const producto = productos[index];
    if (producto) {
      // Coloca los valores en el formulario
      document.getElementById('nombreProducto').value = producto.nombre;
      // Extraer el número del precio (asumiendo que tiene el formato "S/ XX.XX")
      document.getElementById('precioProducto').value = parseFloat(producto.precio.replace('S/ ', ''));
      document.getElementById('cantidadProducto').value = producto.cantidad;
      
      // Establece el índice del producto que se está editando
      productoEditandoIndex = index;
      
      mostrarFormulario(); // Muestra el formulario para editar
    }
  }
  
  // Inicializar la tabla cuando se carga la página
  document.addEventListener('DOMContentLoaded', actualizarTabla);