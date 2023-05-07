import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
function Reg() {

    const [username,setusername]=useState('')
    const [password,setpassword]=useState('')
    const [message,setmessage]=useState('')
const navigate=useNavigate();

   
    

    function handleform(e){
        e.preventDefault()
       // console.log(username,password)
       const formData={username,password}
       fetch('/api/reg',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(formData)
    }).then((res)=>{ return res.json()}).then((data)=>{
    //    console.log(data)
    if(data._id){
        setmessage("")
        navigate('/login')
    }else{
        setmessage(data.message)
    }
    })
    }
    return ( 
        <>
    <div id="login">
        <div className="container">
        <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4">
            {message}
            <h2>Regestration</h2>
          <form onSubmit={(e)=>{handleform(e)}}>
            <label>usrname</label>
            <input type="text" className="form-control"
            value={username}
            onChange={(e)=>{setusername(e.target.value)}}></input>
            <label>password</label>
            <input type="text" className="form-control"
            value={password}
            onChange={(e)=>{setpassword(e.target.value)}}></input>
            <button type="submit " className="form-control btn btn-success mt-2">register</button>
          </form>
           <Link to='/login'> click here! for login</Link>
           
        </div>
        <div className="col-md-4"></div>
        

        </div>

        </div>
    </div>
    
    </>
     );
}

export default Reg;