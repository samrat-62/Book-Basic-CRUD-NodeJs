// yah database ko code ra logic lekxum

const {Sequelize, DataTypes} = require("sequelize")

const sequelize = new Sequelize("postgresql://postgres.vhhhbhoypvrltqlblvfp:Iamlearningsupabase@aws-0-ap-south-1.pooler.supabase.com:6543/postgres")

// const sequelize = require("./models/book.model")

sequelize.authenticate()
.then(()=>{
    console.log("Authenticated vayo, connected!!")
})
.catch((err)=>{
    console.log("Error aayo" + err)
})

const db = {}
db.Sequelize = Sequelize
db.sequelize = sequelize

db.books = require("./models/book.model")(sequelize, DataTypes)
db.users = require("./models/user.model")(sequelize, DataTypes)
db.admins = require("./models/admin.model")(sequelize, DataTypes)
db.products = require("./models/product.model")(sequelize, DataTypes)
db.abouts = require("./models/about.model")(sequelize, DataTypes)
db.homes = require("./models/home.admin")(sequelize, DataTypes)

sequelize.sync({alter : false}).then(()=>{
    console.log("Migrate vayo hai")
})

module.exports = db