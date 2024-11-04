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

// Función para cargar los datos del producto seleccionado
function cargarProducto() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get("id"));
    
    let producto = null;

    // Bucle for para buscar el producto en el array
    for (let i = 0; i < productos.length; i++) {
        if (productos[i].id === productId) {
            producto = productos[i];
            break;
        }
    }

    // Rellenar los datos del producto en la página si existe
    if (producto) {
        document.getElementById("product-image").src = producto.imagen;
        document.getElementById("product-image").alt = producto.nombre;
        document.getElementById("product-name").textContent = producto.nombre;
        document.getElementById("product-description").textContent = producto.descripcion;
        document.querySelector(".product-price").textContent = `ARS$${producto.precio.toLocaleString()}`;
        document.getElementById("product-stock").textContent = `${producto.stock} en stock`;
    } else {
        document.querySelector(".detalle").innerHTML = "<p>Producto no encontrado.</p>";
    }
}

// Ejecutar la función al cargar la página
document.addEventListener("DOMContentLoaded", cargarProducto);
