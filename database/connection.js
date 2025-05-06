// yah database ko code ra logic lekxum

const {Sequelize} = require("sequelize")

const sequelize = new Sequelize("postgresql://postgres.vhhhbhoypvrltqlblvfp:Iamlearningsupabase@aws-0-ap-south-1.pooler.supabase.com:6543/postgres") 

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

module.exports = db