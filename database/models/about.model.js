const aboutModel = (sequelize, DataTypes)=>{
    const About = sequelize.define("about", {
        aboutName : {
            type : DataTypes.STRING,
            allowNull : false
        },
        aboutPrice : {
            type : DataTypes.INTEGER,
            allowNull : false
        },
        aboutAuthor : {
            type : DataTypes.STRING,
            allowNull : false
        },
        aboutGenre : {
            type : DataTypes.STRING
        }
    })   
    return About
}
module.exports = aboutModel