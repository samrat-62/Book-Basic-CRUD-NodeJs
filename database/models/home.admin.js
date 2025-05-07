const homeModel = (sequelize, DataTypes)=>{
    const Home = sequelize.define("home", {
        homeName : {
            type : DataTypes.STRING,
            allowNull : false
        },
        homePrice : {
            type : DataTypes.INTEGER,
            allowNull : false
        },
        homeAuthor : {
            type : DataTypes.STRING,
            allowNull : false
        },
        homeGenre : {
            type : DataTypes.STRING
        }
    })   
    return Home
}
module.exports = homeModel