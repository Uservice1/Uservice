const express = require('express')
const router = express.Router()
const mysql = require('mysql')

const db = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "usman1234",
    database : "Uservice"
})
router.post('/contact',(req,res)=>{
    console.log('contactApi',req.body)
    const message=req.body
    console.log(message)

    let SQL = "INSERT INTO messages SET ?"
    db.query(SQL,message,(err,result)=>{
        if(err)
        throw err
        
        console.log("inserted:",result)
    })
})

module.exports.router = router