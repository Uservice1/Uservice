const express = require('express')
const router = express.Router()
const mysql = require('mysql')
const bcrypt=require('bcryptjs')
const {JWT_SECRET} = require('../config/keys')
const jwt=require('jsonwebtoken')

const nodemailer = require("nodemailer");
const url = `http://localhost:4000/authenticateemail`
const pass="123"

let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "uservice.authentication@gmail.com", // generated ethereal user
      pass: "uservice1234", // generated ethereal password
    },
  });

  const db = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "usman1234",
    database : "Uservice"
})

router.post('/signin',(req,res)=>{

    if(!req.body.email||!req.body.password)
    {
        res.status(422).json({error:"Missing Feilds"})
    }
    else
    {
        let SQL = "SELECT * FROM Users WHERE email = "+ mysql.escape(req.body.email)
        db.query(SQL,(err,result,feilds)=>{
            if(!result[0])
            {
                res.status(404).json({error:"The email address that you've entered doesn't match any account."})
            }
            else
            {
                bcrypt.compare(req.body.password,result[0].passcode)
                .then((doMatch)=>{
                    if(doMatch)
                    {

                        const token=jwt.sign({_id:result[0].userName},JWT_SECRET)
                        req.user=result[0]
                        res.json({message:"Signedin Successfully",token:token,user:result[0]})
                    }
                    else
                    {
                        res.status(422).json({error:"Invalid email and/or password"})
                    }
                })
            }
        })
    }

})

router.post('/signup',(req,res)=>{

    if(!req.body.email||!req.body.userName||!req.body.password)
    {
        res.status(422).json({error:"Missing Fields"})
    }
    else
    {
        let SQL = "SELECT * FROM Users WHERE email = "+ mysql.escape(req.body.email)
        db.query(SQL,(err,result,feilds)=>{
            if(!result[0])
            {   
                res.json({error:"User Already Exists"})
            }
            else
            {
                
                bcrypt.hash(req.body.password,12)
                .then((password)=>{
                    let info = {
                        from: '"UserVice" <uservice.authentication@gmail.com>',  // sender address
                        to: req.body.email,                                      // list of receivers
                        subject: "Email confirmation!",                           // Subject line
                        text:"Click on the link to confirm your Email: "+url+"?username="+req.body.userName+"&email="+req.body.email+"&passcode="+password, // plain text body
                        
                      }
    
                    transporter.sendMail(info,(error,msg)=>{
                        if(error)
                        {
                            return console.log(error)
                        }
                        console.log("Message Sent",msg)
                    })
                     
                })
                res.json({message:"SignedUp successfully"})
            }
        })
       
        
    }


})

router.get('/authenticateemail',(req,res)=>{
    console.log('Authenticate Api',req.query)
    const user = req.query

    let SQL1 = "SELECT * FROM Users WHERE email = "+ mysql.escape(req.query.email)
    db.query(SQL1,(error,result,feilds)=>{
        console.log('Inside db.query');
        if(error)
        {
        console.log(error)
        return error}
        else if(result[0])
        {
            console.log("if con\n",result)
            res.send("Your Email has already been confirmed")
        }
        else
        {
            console.log('else con');
            let SQL = "INSERT INTO Users SET ?";
            db.query(SQL,user,(err,result)=>{
            if(err)
            throw err
            else
            {
                res.send("Your Account has been registered")
            }

    })
        }
    })
    
    
  
})




module.exports.router = router