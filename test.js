const Contenedor = require ("./contenedor")

async function main(){
    const product = new Contenedor ("./productos.txt");

     console.log("muestro todos los productos");
     let allProducts = await product.getAll();
     console.log(allProducts);
    

         const idToSearch = 1;
        console.log(`muestro el producto con id ${idToSearch}`)
     let productById = await product.getById(idToSearch);
     console.log(productById);

     const obj = {
         price: 330,
        title: "Filtro Unbleached Slim Lion Rolling Circus 6mm",
          thumbnail: "https://d22fxaf9t8d39k.cloudfront.net/2623920ef440375aa1e1cc34edb1d8070747baf0303657f6877e1d8cedce840e46621.jpeg",

  }

     let newItemSave = await product.save(obj)
     console.log(`Nuevo producto creado con id ${newItemSave}`)

    const deleteId = 5

    await product.deleteById(deleteId)
    console.log(`se borro el id ${deleteId}`)
}
 
main();