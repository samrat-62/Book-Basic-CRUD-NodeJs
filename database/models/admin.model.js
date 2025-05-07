const adminModel = (sequelize, DataTypes)=>{
    const Admin = sequelize.define("admin", {
        adminName : {
            type : DataTypes.STRING,
            allowNull : false
        },
        adminPrice : {
            type : DataTypes.INTEGER,
            allowNull : false
        },
        adminAuthor : {
            type : DataTypes.STRING,
            allowNull : false
        },
        adminGenre : {
            type : DataTypes.STRING
        }
    })   
    return Admin
}
module.exports = adminModel