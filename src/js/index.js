// aca hacemos constante que toma por query selector la clase .productContainer
const productContainer = $(".product-container");
// agregar evento onclick que llama a la funcion addProduct
productContainer.click(addProduct);

// funcion para agregar productos al carrito
function addProduct (event) {
    let target = $(event.target)
    if( target.hasClass("add-item-btn") ) {
        console.log(event.target.value);
        // agarra un producto que tiene el mismo value que el boton
        const product = myJSON.find( product => product.nombre == event.target.value);
        // le pasas el producto del data set , lo parseas y agregas al local storage
        loadPage(product);
    }
}

let myJSON = [];


$.ajax({url: './src/js/products.json',
        type: 'get',
        dataType: 'JSON',
        success: (json) => myJSON = json
})

function loadPage(product) {
    sessionStorage.setItem("curso-asignado", JSON.stringify(product));
    window.location.assign("./src/pages/service.html");
}
