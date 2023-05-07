const product=require('../models/product');

exports.productadd=async(req,res)=>{
//console.log(req.body)
const {name,desc,price}=req.body
const record= new product({product:name,decs:desc,price:price})
 await record.save()
 res.json(record);
}


exports.adminAllproduct=async(req,res)=>{

    const record =await product.find()
    res.json(record)
}
exports.singleproduct=async(req,res)=>{
    const id=req.params.id;
const record=await product.findById(id)
 
res.json(record)
   
}

exports.productupdate=async(req,res)=>{
    const id=req.params.id
   console.log(id)
   console.log(req.body)
//     const{product,decs,price,status}=req.body

//    const Record= await product.findByIdAndUpdate(id,{product:product,decs:decs,price:price,status:status})
  
//      res.json({message:'Successfully Update'})

     
}