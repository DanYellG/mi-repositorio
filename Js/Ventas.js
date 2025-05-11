document.addEventListener("DOMContentLoaded", () => {
    console.log("El archivo Ventas.js se ha cargado correctamente.");

    const addSaleBtn = document.querySelector('.add-sale-btn');
    const newSaleForm = document.getElementById('new-sale-form');
    const cancelSaleBtn = document.querySelector('.cancel-sale-btn');
    const saleForm = document.getElementById('saleForm');
    const salesList = document.getElementById('sales-list');
    const viewSalesBtn = document.querySelector('.view-sales-btn');
    let sales = [
        { product: 'Paracetamol 500mg', quantity: 2, price: 1.50, id: 1 },
        { product: 'Amoxicilina 250mg', quantity: 1, price: 3.20, id: 2 },
        { product: 'Ibuprofeno 400mg', quantity: 3, price: 2.10, id: 3 },
        { product: 'Omeprazol 20mg', quantity: 1, price: 5.50, id: 4 }
    ];

    let salesRendered = false;

    addSaleBtn.addEventListener('click', () => {
        newSaleForm.style.display = 'block';
        newSaleForm.classList.add('animate-fade-in');
    });

    cancelSaleBtn.addEventListener('click', () => {
        newSaleForm.style.display = 'none';
        newSaleForm.classList.remove('animate-fade-in');
        saleForm.reset();
    });

    saleForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const product = document.getElementById('product').value;
        const quantity = parseInt(document.getElementById('quantity').value);
        const price = parseFloat(document.getElementById('price').value);

        if (product && !isNaN(quantity) && !isNaN(price)) {
            const newSale = { product, quantity, price, id: Date.now() };
            sales.push(newSale);
            renderSalesTable();
            newSaleForm.style.display = 'none';
            saleForm.reset();
            alert(`Venta de ${quantity} x ${product} registrada.`);
        } else {
            alert('Por favor, complete todos los campos de la venta.');
        }
    });

    viewSalesBtn.addEventListener('click', () => {
        if (salesList.style.display === 'block') {
            salesList.style.display = 'none';
            salesList.classList.remove('animate-fade-in');
        } else {
            salesList.style.display = 'block';
            salesList.classList.add('animate-fade-in');
            if (!salesRendered) {
                renderSalesTable();
                salesRendered = true;
            }
        }
    });

    function renderSalesTable() {
        salesList.innerHTML = '<h3>Ventas Registradas</h3>';
        if (sales.length === 0) {
            salesList.innerHTML += '<p>No hay ventas registradas.</p>';
            return;
        }

        const table = document.createElement('table');
        table.classList.add('sales-table');

        const thead = document.createElement('thead');
        const headerRow = document.createElement('tr');
        const headers = ['Producto', 'Cantidad', 'Precio Unitario', 'Total'];
        headers.forEach(headerText => {
            const th = document.createElement('th');
            th.textContent = headerText;
            headerRow.appendChild(th);
        });
        thead.appendChild(headerRow);
        table.appendChild(thead);

        const tbody = document.createElement('tbody');
        sales.forEach(sale => {
            const row = document.createElement('tr');
            const total = (sale.quantity * sale.price).toFixed(2);
            row.innerHTML = `
                <td>${sale.product}</td>
                <td>${sale.quantity}</td>
                <td>S/ ${sale.price.toFixed(2)}</td>
                <td>S/ ${total}</td>
            `;
            tbody.appendChild(row);
        });
        table.appendChild(tbody);

        salesList.appendChild(table);
    }

    const addSupplierBtn = document.querySelector('.add-supplier-btn');
    const newSupplierForm = document.getElementById('new-supplier-form');
    const cancelSupplierBtn = document.querySelector('.cancel-supplier-btn');
    const supplierForm = document.getElementById('supplierForm');
    const supplierDetailsModal = document.getElementById('supplier-details-modal');
    const closeButton = document.querySelector('.close-button');
    const supplierNameDisplay = document.getElementById('supplier-name');
    const supplierRUCDisplay = document.getElementById('supplier-ruc');
    const supplierContactDisplay = document.getElementById('supplier-contact');
    const supplierPhoneDisplay = document.getElementById('supplier-phone-detail');
    const supplierCards = document.querySelectorAll('.supplier-card');

    addSupplierBtn.addEventListener('click', () => {
        newSupplierForm.style.display = 'block';
        newSupplierForm.classList.add('animate-fade-in');
    });

    cancelSupplierBtn.addEventListener('click', () => {
        newSupplierForm.style.display = 'none';
        newSupplierForm.classList.remove('animate-fade-in');
        supplierForm.reset();
    });

    supplierForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const name = document.getElementById('supplierName').value;
        const ruc = document.getElementById('supplierRUC').value;
        const contact = document.getElementById('supplierContact').value;
        const phone = document.getElementById('supplierPhone').value;

        if (name && ruc && contact && phone) {
            const newSupplierCard = document.createElement('div');
            newSupplierCard.classList.add('supplier-card');
            newSupplierCard.innerHTML = `
                <h3>${name}</h3>
                <p><strong>RUC:</strong> ${ruc}</p>
                <p><strong>Contacto:</strong> ${contact}</p>
                <p><strong>Teléfono:</strong> ${phone}</p>
                <button class="btn btn-info view-supplier-details"><i class="fas fa-eye"></i> Detalles</button>
            `;
            document.querySelector('.suppliers-list').appendChild(newSupplierCard);
            newSupplierForm.style.display = 'none';
            supplierForm.reset();
            alert(`Proveedor ${name} agregado.`);

            newSupplierCard.querySelector('.view-supplier-details').addEventListener('click', () => {
                supplierNameDisplay.textContent = name;
                supplierRUCDisplay.textContent = ruc;
                supplierContactDisplay.textContent = contact;
                supplierPhoneDisplay.textContent = phone;
                supplierDetailsModal.style.display = 'flex';
                supplierDetailsModal.classList.add('animate-fade-in');
            });

        } else {
            alert('Por favor, complete todos los campos del proveedor.');
        }
    });

    supplierCards.forEach(card => {
        card.querySelector('.view-supplier-details').addEventListener('click', () => {
            const supplierId = card.dataset.supplierId;
            let name = '';
            let ruc = '';
            let contact = '';
            let phone = '';

            if (supplierId === '1') {
                name = 'Distribuidora Farmacéutica del Perú S.A.C.';
                ruc = '20100012345';
                contact = 'Juan Pérez';
                phone = '(01) 555-1212';
            } else if (supplierId === '2') {
                name = 'Corporación Peruana de Productos Farmacéuticos S.R.L.';
                ruc = '20500067890';
                contact = 'María Gómez';
                phone = '(01) 444-5656';
            } else if (supplierId === '3') {
                name = 'Importadora y Exportadora de Medicamentos Inkafarma E.I.R.L.';
                ruc = '20600112233';
                contact = 'Carlos López';
                phone = '(01) 333-9898';
            }

            supplierNameDisplay.textContent = name;
            supplierRUCDisplay.textContent = ruc;
            supplierContactDisplay.textContent = contact;
            supplierPhoneDisplay.textContent = phone;
            supplierDetailsModal.style.display = 'flex';
            supplierDetailsModal.classList.add('animate-fade-in');
        });
    });

    closeButton.addEventListener('click', () => {
        supplierDetailsModal.style.display = 'none';
        supplierDetailsModal.classList.remove('animate-fade-in');
    });

    window.addEventListener('click', (event) => {
        if (event.target === supplierDetailsModal) {
            supplierDetailsModal.style.display = 'none';
            supplierDetailsModal.classList.remove('animate-fade-in');
        }
    });
});