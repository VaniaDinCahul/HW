class Product {

    static all = []

    constructor(productName, productDescription, productPrice, productDiscountPrice, productImage, productCategories) {
        this.name            = productName
        this.description     = productDescription
        this.price           = productPrice
        this.discountPrice   = productDiscountPrice
        this.image           = productImage
        this.categories      = productCategories

        Product.all.push(this)
    }

}