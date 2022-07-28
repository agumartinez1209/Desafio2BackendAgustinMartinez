const {promises: fs} = require("fs")

class Contenedor {
    constructor (ruta){
        this.ruta = ruta;
    }

    async save (obj){
        if(fileExists(this.ruta)) {
        try {
            const products = await this.getAll();
            const newProduct = products[products.length -1]. id + 1;
            object.id = newProduct;
            products.push(object)
            await fs.writeFile(this.ruta, JSON.stringify(products));
            return newProduct;

        } catch (error) {
            throw new Error ("error al guardar")
        }
    
} else {
    object.id = 1;
    let lastProduct = [];
    lastProduct.push(objet)
    try {
        await fs.writeFile(this.ruta, JSON.stringify(lastProduct))
        return objet.id

    } catch (error) {
        throw new Error('Error')
    }

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
            const productId = products.find(p => p.id == id);
            if (productId >= 0){
                products.splice(productId,1);
                fs.writeFile(this.ruta, JSON.stringify(products,null, 2))
            } else {throw error}

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