const express = require('express')
const requireLogin = require('../middleware/requireLogin')
const router = express.Router()
const mysql = require('mysql')
const uploadfile =require('express-fileupload');

const db = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "usman1234",
    database : "Uservice"
})

router.get('/myprofile',(requireLogin),(req,res)=>{
    console.log("userInfoApi: ",req.user)


})

router.post('/addExpertise',(requireLogin),(req,res)=>{
    console.log("addExpertiseApi: ",req.body)
    const skill = {
        userName: req.user.userName,
        skills:req.body.skill.toLowerCase()
    }
    console.log("Skill: ",skill)
    
    let SQL = "INSERT INTO user_skills SET ?"
    db.query(SQL, skill, (err,result)=>{
        if(err)
            throw err
        else 
        {
            console.log(result)
        }
    })
   

})

router.post('/uploadprofilepic',requireLogin,(req,res)=>{
    console.log('uploadProfilePicAPI: ', req.body)

    profilePicture = req.body.profilePicture
    user = req.user.userName

    let SQL = 'UPDATE Users SET profilePicture = ? WHERE userName = ? '
    db.query(SQL,[profilePicture,user],(err,result)=>{
        if(err)
            throw err
        console.log(result)
    })

})

router.post('/userprofile',requireLogin,(req,res)=>{
    console.log("userProfileAPI")
})


router.get('/chat', requireLogin,(req,res)=>{
    console.log("userInfoApi: ",req.user)
})


router.post('/uploads', requireLogin, (req, res)=>{
    if(req.files === null){
        return res.status(400).json({ msg: 'No file uploaded..!'});
    }

    const file = req.files.file;
    file.mv(`${__dirname}/front-end/public/uploads/${file.name}`, err =>{

        console.log(`${file.name}`)
        if(err) {
            console.error(err);
            return res.status(500).send(err);
        }

        res.json({
            fileName: file.name,
            filePath: `/front-end/public/uploads/${file.name}`
        });
    });
});

module.exports.router=router