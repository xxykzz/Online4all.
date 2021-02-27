const data = JSON.parse( sessionStorage.getItem("curso-asignado") );

const addCartBtn = $(".add-cart-btn");

addCartBtn.click(comprar);
renderProduct();

function renderProduct() {
    const productTitle = $(".title");
    const productPrice = $(".price");
    
    productTitle.text(`Curso seleccionado: ${data.nombre}`);
    productPrice.text(`Precio: $${data.precio}`);

}



function comprar () {
    console.log("Curso comprado");
    alert(`Compraste el curso ${data.nombre}`);
}

