const jwt = require("jsonwebtoken")
const {JWT_SECRET} = require('../config/keys')
const mysql = require('mysql')


const db = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "usman1234",
    database : "Uservice"
})


module.exports = (req,res,next)=>{

    const {authorization} = req.headers
    if(!authorization)
    return res.status(401).json({error:"You must be logged in"})
    
    const token =authorization.replace("Bearer ","")
    jwt.verify(token,JWT_SECRET,(err,payload)=>{
        if(err)
        {
            return res.status(401).json({error:"You are not logged in"})
        }
        const {_id} = payload
        let SQL = "SELECT * FROM Users WHERE userName = "+mysql.escape(_id)
        db.query(SQL,(err,result,feilds)=>{
            console.log("result: ",result[0])
            req.user = result[0]
            next()
        })
        
    })
    
}