import { useState } from "react";
import Left from "./Left";
import { useNavigate } from "react-router-dom";
function Adminproductadd() {
    const navigate=useNavigate()
    const [name,setname]=useState('')
    const [desc,setdesc]=useState('')
    const [price,setprice]=useState('')
   

    function handleform(e){
        e.preventDefault()
       // console.log(name,desc,price)
       const formdata={name,desc,price}
       fetch('/api/productadd',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(formdata)

       }).then((res)=>{return res.json()}).then((data)=>{
        //console.log(data)
        if(data._id){
               
               navigate('/adminproducts')
        } 
       })
    }

    return ( <>
         
        <section id="product">
       <div className="container">
       <div className="row">
       <Left/>
       <div className="col-md-6"><h2>Product Add Here</h2> 
       <form onSubmit={(e)=>{handleform(e)}}>
        <label>Product Name</label>
        <input type="text" className="form-control"
        value={name}
        onChange={(e)=>{setname(e.target.value)}}
        ></input>
        <label>Product Description</label>
         <textarea className="form-control"
         value={desc}
         onChange={(e)=>{setdesc(e.target.value)}}></textarea>
        <label>Product Price</label>
        <input type="text"  className="form-control"
        value={price}
        onChange={(e)=>{setprice(e.target.value)}}></input>
        <button className="btn btn-success form-control mb-2 mt-2"> Add</button>
       </form>
       
       </div>

       </div>
       </div>


   </section>
   
       </>);
}

export default Adminproductadd;