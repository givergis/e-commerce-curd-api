const dbConnection = require('../dbConnection');


//create
const insertPurcase = ((req,res)=>{
    let productId = req.body.id;
    let purchase_amount = req.body.amount;

    let qr = `insert into purchase(,product_Id,purchase_amount) values('${productId}','${purchase_amount}'`;

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
    dbConnection.query(`select * from purchase where purchase_id='${purchase_id}`,(err,result)=>{
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



module.exports = {insertPurcase,purchase,purchaseDelete}