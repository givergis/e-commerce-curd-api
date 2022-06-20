const dbConnection = require('../dbConnection');
const moment = require('moment')

//create
const insertPurchase = ((req,res)=>{
    let productId = req.body.product_id;
    let purchase_amount = req.body.amount;
    var timeStamp = moment(Date.now()).format('YYYY-MM-DD HH:mm:ss');

    let qr = `insert into purchase(product_Id,purchase_amount,oncreate) values('${productId}','${purchase_amount}','${timeStamp}')`;

    dbConnection.query(qr,(err,result)=>{
        if(err){
            console.log(err);
            res.send({error:"purchase insertion failed"})
        }else{
          //  console.log(result);
            res.send({success:"purchase insertion success"})
        }
    })

})

//read

const purchase = ((req,res)=>{
    let purchase_id = req.params.id;
    let qr = `select * from purchase where purchase_id=${purchase_id}`;

    dbConnection.query(qr,(err,result)=>{
        if(err){
            res.json(err)
        }
        res.json(result);
    })
})


//delete


const purchaseDelete = ((req,res)=>{
  
    let purchase_id = req.params.id;

    let qr = `delete from purchase where purchase_id='${purchase_id}'`;
    dbConnection.query(qr,(err,result)=>{
        if(err){
            console.log(err);
            res.send({error:"deletion failed"})
        }else{
            res.send({success:"deletion success"})
        }
    })

})



module.exports = {insertPurchase,purchase,purchaseDelete}