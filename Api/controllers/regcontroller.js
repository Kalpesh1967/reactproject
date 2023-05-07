const Reg=require('../models/reg')


exports.insert=async(req,res)=>{
     const{username,password}=req.body
     const usercheck=await Reg.findOne({username:username})
     if(usercheck==null){
     const record= new Reg({username:username,password:password});
     await record.save();
     res.json(record)
}else{
     res.json({message:"username Already Exist"})
}
}

exports.login=async(req,res)=>{
    // console.log(req.body)
    const{username,password}=req.body 
    const record= await Reg.findOne({username:username})
    if(record!==null){
     if(record.password==password){
          res.json(record)
     }else{
          res.json({message:"password incorrect"})
     }

    }else{
     res.json({message:"incorrect credentail"})
    }
    
}
