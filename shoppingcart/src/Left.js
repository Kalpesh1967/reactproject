import { Link } from "react-router-dom";

function Left() {
    return (  <>
    <div className="col-md-3">
        
         <Link to='/adminproducts'><button className="btn btn-success form-control">Product-Management</button></Link>
         
         </div>
    </>
     );
}

export default Left;