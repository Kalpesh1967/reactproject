import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LoginContext } from "./LoginContext";
function Header() {
    const{loginname,setloginname}=useContext(LoginContext)
const navigate=useNavigate()
    function handlelogout(e){
        localStorage.setItem('loginname','')
        setloginname(localStorage.getItem('loginname'))
navigate('/login')
    }
    return ( <>   
    
    <section id="Header">
        <div className="container">
        <div className="row">
        <div className="col-md-8"><h2>wellocome to {loginname}</h2></div>

        <div className="col-md-4"><button onClick={(e)=>{handlelogout(e)}} className="btn btn-danger">logout</button>
        <Link to='/login'><button className="btn btn-danger">login</button></Link>
        </div>

        </div>
        </div>


    </section>
    </> );
}

export default Header;