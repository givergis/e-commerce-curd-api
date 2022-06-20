const dbConnection = require('../dbConnection');


//create
const insertProduct = ((req,res)=>{
    let productname = req.body.name;
    let productPrice = req.body.price;
    let productCode = req.body.code;

    console.log(username,'username');

    let qr = `insert into user(product_name,product_price,product_code) values('${productname}','${productPrice}','${productCode}')`;

    dbConnection.query(qr,(err,result)=>{
        if(err){
            console.log(err);
            res.send({error:"product insertion failed"})
        }else{
          //  console.log(result);
            res.send({success:"product insertion success"})
        }
    })

})

//read

const products = ((req,res)=>{
    dbConnection.query("select * from product",(err,result)=>{
        if(err){
            res.json(err)
        }
        res.json(result);
    })
})

//update

const productUpdate = ((req,res)=>{
    let productname = req.body.name;
    let productPrice = req.body.price;
    let productCode = req.body.code;
    let product_id = req.body.id;

    let qr = `update product set product_name='${productname}, product_price=${productPrice},product_code=${productCode} where product_id='${product_id}'`;
    dbConnection.query(qr,(err,result)=>{
        if(err){
            res.send({error:"updation failed"})
        }else{
            res.send({success:"updation success"})
        }
    })

})

//delete


const productDelete = ((req,res)=>{
  
    let product_id = req.params.id;

    let qr = `delete from product where product_id='${product_id}'`;
    dbConnection.query(qr,(err,result)=>{
        if(err){
            console.log(err);
            res.send({error:"deletion failed"})
        }else{
            res.send({success:"deletion success"})
        }
    })

})



module.exports = {insertProduct,products,productUpdate,productDelete}