const dbConnection = require('../dbConnection');
const moment = require('moment')

//create
const insertUser = ((req,res)=>{
    let username = req.body.name;
    let useremail = req.body.email;
    var timeStamp = moment(Date.now()).format('YYYY-MM-DD HH:mm:ss');

    console.log(username,'username');

    let qr = `insert into user(user_name,user_email,oncreate,onupdate) values('${username}','${useremail}','${timeStamp}','${timeStamp}')`;

    dbConnection.query(qr,(err,result)=>{
        if(err){
            console.log(err);
            res.send({error:"user insertion failed"})
        }else{
          //  console.log(result);
            res.send({success:"user insertion success"})
        }
    })

})

//read

const users = ((req,res)=>{
    dbConnection.query("select * from user",(err,result)=>{
        if(err){
            res.json(err)
        }
        res.json(result);
    })
})

//update

const userUpdate = ((req,res)=>{
    let username = req.body.name;
    let useremail = req.body.email;
    let id = req.params.id;
    var timeStamp = moment(Date.now()).format('YYYY-MM-DD HH:mm:ss');

    let qr = `update user set user_name='${username}', user_email='${useremail}', onupdate='${timeStamp}'  where user_id='${id}'`;
    dbConnection.query(qr,(err,result)=>{
        if(err){
            console.log(err);
            res.send({error:"updation failed"})
        }else{
            res.send({success:"updation success"})
        }
    })

})

//delete


const userDelete = ((req,res)=>{
  
    let id = req.params.id;

    let qr = `delete from user where user_id='${id}'`;
    dbConnection.query(qr,(err,result)=>{
        if(err){
            console.log(err);
            res.send({error:"deletion failed"})
        }else{
            res.send({success:"deletion success"})
        }
    })

})



module.exports = {insertUser,users,userUpdate,userDelete}