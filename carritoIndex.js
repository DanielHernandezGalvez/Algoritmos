const carritoDeCompras = [];

	const contenedorCarrito = document.getElementById('carrito-contenedor');



	const renderProdcutoCarrito = () => {

    	contenedorCarrito.innerHTML = ''; //con esta linea, limpiamos el carrito para que no se agregen como productos diferentes



    	for (let producto of carritoDeCompras) { //recorremos el array y se muestran los productos

        	let div = document.createElement('div')

        	div.classList.add('productoEnCarrito')

        	div.innerHTML = `<p>${producto.nombre}</p>

                    <p>Precio: ${producto.precio}</p> 

                    <p id="cantidad${producto.id}">Cantidad: ${producto.cantidad}</p>

                    <button onclick = "eliminarDelCarrito(${producto.id})" class="boton-eliminar" ><i class="fas fa-trash-alt"></i></button>`;

        	contenedorCarrito.appendChild(div)

    	}

	}

	


	const carritoIndex = (productoId) => {

    	let producto = productos.find(producto => producto.id == productoId);



    	if (carritoDeCompras.some(prod => prod.id == producto.id)) { //si ya esta el tipo de producto en el carrito

        	let indice = carritoDeCompras.findIndex(el => el.id === producto.id) //lo busca

        	carritoDeCompras[indice].cantidad++; //y aumenta la cantidad en 1

    	}

    	else carritoDeCompras.push(producto); //sino hay de ese tipo de producto, lo agrega al carrito.



    	renderProdcutoCarrito()

	}
	const eliminarDelCarrito = (productoId) => {
		const item = carritoDeCompras.find((producto) => producto.id == productoId)
		const indice = carritoDeCompras.indexOf(item)
		carritoDeCompras.splice(indice, 1)
		renderProdcutoCarrito()
	}

   

