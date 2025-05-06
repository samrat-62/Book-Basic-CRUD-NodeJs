const express = require('express')
const app = express()

require("./database/connection")

// let app = require('express')()

// app.get("/",(req,res)=>{
//     res.json({
//         name:"samrat",
//         address:"dharan"
//     })
// })

// app.get("/request",(req,res)=>{
//     res.send("Good day")
// })

// app.get("/about",function(req,res){
//     res.send("He is fine")
// })

// app.post("/register",(req,res)=>{
//     res.send("I am a tall boy")
// })


// Here is the APIs for Book Management System
app.get("/books",function(req,res){
    // Logic to fetch book from database
    res.json({
        message : "Book fetched successfully"
    })
})

app.post("/books",(req,res)=>{
    // Logic to add book from database
    res.json({
        message : "Book added successfully"
    })
})

app.delete("/books/:id",(req,res)=>{
    // Logic to delete book from database
    res.json({
        message : "Book deleted successfully"
    })
})

app.patch("/books/:id",(req,res)=>{
    // Logic to edit/update book from database
    res.json({
        message : "Book edited successfully"
    })
})

app.listen(3000, function (){
    console.log('Server is running on port 3000')
})