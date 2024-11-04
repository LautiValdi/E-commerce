// Array de productos
let productos = JSON.parse(localStorage.getItem("productos")) || [
    {
        id: 1,
        nombre: "Buzo Camboya Negro Tascani",
        precio: 97100,
        descripcion: "Chaleco de rustico CORTE CHILLFIT con terminacion al corte en mangas. Cuenta con cordones con punteras personalizados y estampa en espalda a contratono.",
        stock: 10,
        categoria: "Buzos",
        imagen: "/assets/producto1.jpg",
    },
    {
        id: 2,
        nombre: "Jeans Mom Con Rotura",
        precio: 39710,
        descripcion: "Jeans Mom con rotura celeste claro y con babucha en el tobillo.",
        stock: 10,
        categoria: "Pantalones",
        imagen: "/assets/producto2.jpg",
    },
    {
        id: 3,
        nombre: "Buzo Hoodie Oversize Estampado - Positive Rife",
        precio: 44500,
        descripcion: "Buzo corte oversized con capucha y amplio bolsillo tipo canguro al frente, estampado en mangas y capucha.",
        stock: 10,
        categoria: "Buzos",
        imagen: "/assets/producto3.jpg",
    },
    {
        id: 4, 
        nombre: "Bermuda Mom Jean Celeste",
        precio: 36100, 
        descripcion: "Bermuda Mom Jean Celeste con rotura",
        stock: 10,
        categoria: "Pantalones",
        imagen: "/assets/producto4.jpg"
    },
    {
        id: 5, 
        nombre: "Remera Lisa Unisex Polo Oversized",
        precio: 16101, 
        descripcion: "La Remera Lisa Unisex Polo Oversized Remeron Liso 100% Algodon es la prenda perfecta para lucir un estilo moderno y cómodo.",
        stock: 10,
        categoria: "Remeras",
        imagen: "/assets/producto5.jpg"
    },
    {
        id: 6, 
        nombre: "Conjunto Remera Oversize Y Short",
        precio: 54180, 
        descripcion: "Hecha de algodón suave y transpirable, esta remera ofrece un ajuste cómodo y ligero, perfecto para tus aventuras diarias.",
        stock: 10,
        categoria: "Remeras",
        imagen: "/assets/producto6.jpg"
    },
    {
        id: 7, 
        nombre: "Remera Oversize - Palm Angels",
        precio: 18999, 
        descripcion: "100% algodón jersey peinado de Calidad PREMIUM - Prenda armada de Overlock de 4 hilos - No destiñe ni encoje.",
        stock: 10,
        categoria: "Remeras",
        imagen: "/assets/producto7.jpg"
    },
    {
        id: 8, 
        nombre: "Campera Buzo Hoodies Canguro Slim Fit A21",
        precio: 29999, 
        descripcion: "Confeccionada en algodón friza premium, esta prenda ofrece una suavidad excepcional y un calce slim que se adapta a la silueta masculina, brindando un look moderno y desenfadado.",
        stock: 10,
        categoria: "Buzos",
        imagen: "/assets/producto8.jpg"
    }
];

// Guardar productos en localStorage
function guardarProductos() {
    localStorage.setItem("productos", JSON.stringify(productos));
}

// Renderizar productos en la tabla de administración
function renderizarTabla() {
    const tableBody = document.getElementById('product-table-body');
    tableBody.innerHTML = '';

    productos.forEach((producto) => {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${producto.id}</td>
            <td>${producto.nombre}</td>
            <td>${producto.descripcion}</td>
            <td><img src="${producto.imagen}" alt="${producto.nombre}" style="width: 50px; height: 50px;"></td>
            <td>${producto.precio}</td>
            <td>${producto.stock}</td>
            <td>${producto.categoria}</td>
            <td><button class="btn btn-danger btn-sm eliminar-producto" data-id="${producto.id}">Eliminar</button></td>
        `;
        tableBody.appendChild(row);
    });

    // Agregar evento a los botones de eliminar
    document.querySelectorAll('.eliminar-producto').forEach((button) => {
        button.addEventListener('click', eliminarProducto);
    });
}

// Convertir imagen a base64 y agregar producto
document.getElementById('product-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const fileInput = document.getElementById('imagen-producto');
    const reader = new FileReader();

    reader.onload = function(event) {
        const nuevoProducto = {
            id: productos.length ? productos[productos.length - 1].id + 1 : 1,
            nombre: document.getElementById('nombre-producto').value,
            descripcion: document.getElementById('descripcion-producto').value,
            precio: parseFloat(document.getElementById('precio-producto').value),
            imagen: event.target.result, // URL base64 de la imagen
            stock: parseInt(document.getElementById('stock-producto').value, 10),
            categoria: document.getElementById('categoria-producto').value
        };

        productos.push(nuevoProducto);
        guardarProductos(); // Guarda en localStorage
        renderizarTabla(); // Actualiza la tabla
        document.getElementById('product-form').reset();
    };

    reader.readAsDataURL(fileInput.files[0]);
});

// Eliminar producto
function eliminarProducto(e) {
    const id = parseInt(e.target.getAttribute('data-id'), 10);
    productos = productos.filter(producto => producto.id !== id);
    guardarProductos(); // Guarda en localStorage
    renderizarTabla(); // Actualiza la tabla
}

// Renderizar productos en la tabla al cargar la página
renderizarTabla();