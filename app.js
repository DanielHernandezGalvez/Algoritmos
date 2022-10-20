const getProducts = async () => {
    try {
        const response = await fetch('./data/stock.json');
        const data = await response.json();
        return data;
    } catch (error) {
        console.log('Hubo un error:', error);
    }
   
}



const mostrarProductos = data  => {
    const contenedorProductos= document.getElementById('producto-contenedor')
    
    data.forEach(producto => {
        const div = document.createElement('div');
        div.classList.add('card');
        div.innerHTML += `
        <div class="card-image">
            <img src="${producto.img}">
            <span class="card-title">${producto.nombre}</span>
        </div>
        <div class="card-content">
            <p>Antes <del>${producto.antes}</del>, Ahora ${producto.precio}</p>
            </div>
            <div>
            <button id="boton${producto.id}" class="btn1">Comprar</button>
            </div>
         `;
    
        contenedorProductos.appendChild(div)

        const boton = document.getElementById(`boton${producto.id}`);
        boton.addEventListener('click', ()=>{
            carritoIndex(producto.id)
            //alert(`Se agrego ${producto.nombre} al carrito`)
            Swal.fire({
                title: 'Se agregó al carrito',
                icon: 'success',
                timer: 2000,
                allowOutsideClick: true,
                confirmButtonColor: '#FF8000',
            
            })
        } )

    })

}
mostrarProductos(productos)


