const Contenedor = require ("./contenedor")

async function main(){
    const product = new Contenedor ("./productos.txt");

    console.log("muestro todos los productos");
    let allProducts = await product.getAll();
    console.log(allProducts);
    

    const idToSearch = 1;
    console.log(`muestro el producto con id ${idToSearch}`)
    let productById = await product.deleteById(idToSearch);
    console.log(productById);
}
 
main();