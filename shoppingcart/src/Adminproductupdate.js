
import {useParams } from "react-router-dom";
import Left from "./Left";
import { useEffect, useState } from "react";
 
function Adminproductupdate() {
    const {id}= useParams()
    const[product,setproduct]=useState('');
    const[decs,setdecs]=useState('');
    const[status,setstatus]=useState('');
    const[price,setprice]=useState();
     
    useEffect(()=>{
        fetch(`/api/singleproduct/${id}`).then((res)=>{return res.json()}).then((data)=>{
            // console.log(data)
            setproduct(data.product)
            setdecs(data.decs)
            setprice(data.price)
            setstatus(data.status)
            })
       },[])  

   function handleform(e){
    e.preventDefault()
   
  const formdata={product,decs,price,status}
  fetch(`/api/productupdate/${id}`,{
    method:'PUT',
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify(formdata)
    })
    //  .then((res)=>{return res.json()}).then((data)=>{
    //      console.log(data)
         
        
    // })
}
  
     
    return (   <>
         
        <section id="product">
       <div className="container">
       <div className="row">
       <Left/>
       <div className="col-md-6"><h2>UpdatePorduct</h2> 
       
       <form onSubmit={(e)=>{handleform(e)}}>
        <label>productName</label>
        <input type="text" className="form-control"
        value={product}
        onChange={(e)=>{setproduct(e.target.value)}}></input>
        <label>productDescription</label>
        <input type="text" className="form-control"
         value={decs}
         onChange={(e)=>{setdecs(e.target.value)}}></input>
        <label>productPrice</label>
        <input type="text" className="form-control"
        value={price}
        onChange={(e)=>{setprice(e.target.value)}}></input>
        <label>product Status</label>
        <select value={status}
        onChange={(e)=>{setstatus(e.target.value)}}>
            <option value={'Out of Stock'}>Out of Stock</option>
            <option value={'In Stock'}> In Stock</option>
        </select>
        <button className="btn btn-success form-control mt-2 mb-2">Update</button>
       </form>
       
       </div>

       </div>
       </div>


   </section>
   
       </> );
}

export default Adminproductupdate;