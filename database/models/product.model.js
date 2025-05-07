const productModel = (sequelize, DataTypes)=>{
    const Product = sequelize.define("product", {
        productName : {
            type : DataTypes.STRING,
            allowNull : false
        },
        productPrice : {
            type : DataTypes.INTEGER,
            allowNull : false
        },
        productAuthor : {
            type : DataTypes.STRING,
            allowNull : false
        },
        productGenre : {
            type : DataTypes.STRING
        }
    })   
    return Product
}
module.exports = productModel