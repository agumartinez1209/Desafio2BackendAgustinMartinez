const {promises: fs} = require("fs")

class Contenedor {
    constructor (ruta){
        this.ruta = ruta;
    }

    async save (obj){
        try {
            const products = await this.getAll();
            const saveProduct =  products[products.length - 1]
            obj.id = saveProduct.id + 1;
            products.push(obj);
            fs.writeFile(this.ruta, JSON.stringify(products, null,2) ) ;
            return obj.id
          } catch (error) {
            
          }
}
    async getById (id){

        const products = await this.getAll();
        const productById = products.find(p => p.id == id);
        return productById


    }

    async getAll (){
        try {
            const products = await fs.readFile(this.ruta, "utf-8")
            return JSON.parse(products);
        } catch (error) {
            return [];
        }
    }

    async deleteById (id){
        try {
            const products = await this.getAll();
            const productId = products.findIndex(p => p.id == id );
            if (productId >= 0) {
              products.splice(productId,1);
              fs.writeFile(this.ruta, JSON.stringify(products, null,2) ) ;
            }
            else { throw error}
          } catch (error) {
            console.log("no se encontro")
          }
        
    }

    async deleteAll (obj){
        try {
            fs.unlink(this.ruta)
        } catch (error) {
            console.log("no se borro")
        }
    }

}

module.exports = Contenedor;