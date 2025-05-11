document.addEventListener("DOMContentLoaded", () => {
    const formularioAgregarProducto = document.getElementById("addProductForm");
    const cuerpoDeLaTablaDeProductos = document.querySelector("#productTable tbody");
    const vistaPreviaDeLaImagen = document.getElementById("imagePreview");

    document.getElementById('productImage').addEventListener('change', function(event) {
        const archivo = event.target.files[0];
        if (archivo) {
            const lector = new FileReader();
            lector.onload = function(e) {
                vistaPreviaDeLaImagen.src = e.target.result;
                vistaPreviaDeLaImagen.style.display = 'block';
            }
            lector.readAsDataURL(archivo);
        } else {
            vistaPreviaDeLaImagen.src = '#';
            vistaPreviaDeLaImagen.style.display = 'none';
        }
    });

    formularioAgregarProducto.addEventListener("submit", (evento) => {
        evento.preventDefault();

        const nombreProducto = document.getElementById("productName").value;
        const descripcionProducto = document.getElementById("productDescription").value;
        const precioProducto = document.getElementById("productPrice").value;
        const cantidadProducto = document.getElementById("productQuantity").value;
        const imagenProducto = document.getElementById("productImage").files[0];

        const nuevaFila = cuerpoDeLaTablaDeProductos.insertRow();

        const celdaImagen = nuevaFila.insertCell();
        if (imagenProducto) {
            const imagen = document.createElement('img');
            imagen.src = URL.createObjectURL(imagenProducto);
            imagen.style.maxWidth = '50px';
            imagen.style.maxHeight = '50px';
            celdaImagen.appendChild(imagen);
        } else {
            celdaImagen.textContent = 'Sin imagen';
        }

        const celdaNombre = nuevaFila.insertCell();
        celdaNombre.textContent = nombreProducto;

        const celdaDescripcion = nuevaFila.insertCell();
        celdaDescripcion.textContent = descripcionProducto;

        const celdaPrecio = nuevaFila.insertCell();
        celdaPrecio.textContent = precioProducto;

        const celdaCantidad = nuevaFila.insertCell();
        celdaCantidad.textContent = cantidadProducto;

        const celdaAcciones = nuevaFila.insertCell();
        celdaAcciones.innerHTML = '<button class="action-btn edit-btn"><i class="fas fa-edit"></i></button> <button class="action-btn delete-btn"><i class="fas fa-trash-alt"></i></button>';


        vistaPreviaDeLaImagen.src = '#';
        vistaPreviaDeLaImagen.style.display = 'none';
    });
});