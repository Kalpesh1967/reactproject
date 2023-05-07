const mongoose=require('mongoose')

const productSchema=mongoose.Schema({
     product:String,
     decs:String,
     price:Number,
     status:{type:String,default:'Out of Stock'}
})
module.exports=mongoose.model('product',productSchema);