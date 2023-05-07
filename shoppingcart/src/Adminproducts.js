import { Link } from "react-router-dom";
import Left from "./Left";
import { useEffect, useState } from "react";
function Adminproduct() {
const [product,setproduct]=useState([])

    useEffect(()=>{
        fetch('/api/adminAllproduct').then((res)=>{return res.json()}).then((data)=>{
           //console.log(data)
           setproduct(data)
        })
    },[])
    return (  
        <>
         
        <section id="product">
       <div className="container">
       <div className="row">
       <Left/>
       <div className="col-md-6">
        <h2>Products-management</h2> 
        <Link to="/adminproductadd"><button className="btn btn-danger form-control">Add-products</button></Link>
        <table className="table table-hover">
            <thead>
                <td>Product Name</td>
                <td>Product Description</td>
                <td>Product Price</td>
                <td>Product Status</td>
                <td>Product Delete</td>
                </thead>
            <tbody>
                {product.map((result)=>(
                <tr key={result._id}>
                    <td>{result.product}</td>
                    <td>{result.decs}</td>
                    <td>{result.price}</td>
                    <td>{result.status}</td>
                 <td><Link to= {`/adminproductupdate/${result._id}`}><button>Update</button></Link></td>
                </tr>
                ))}
            </tbody>

            </table>
        </div>
           
       
       </div>
       </div>


   </section>
   
       </>
    );
}

export default Adminproduct;