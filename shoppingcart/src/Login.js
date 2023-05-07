
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LoginContext } from "./LoginContext";

function Login() {
  const{setloginname}=useContext(LoginContext)
     const [username,setusername]=useState('')
     const[password,setpassword]=useState('')
const [message,setMessage]=useState('')
const navigate=useNavigate()

    function handleform(e){
     
        e.preventDefault()
       const formData={username,password}
       fetch('/api/login',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(formData)
       }).then((res)=>{return res.json()}).then((data)=>{
        console.log(data)
        if(data._id){
          localStorage.setItem('loginname',data.username)
          setloginname(localStorage.getItem('loginname'))
          if(data.username==='admin'){
              navigate('/dashboard')
          }else if(data.username!=='admin'){
            navigate('/product')

          }
        }else{
          setMessage(data.message)
        }
       })
    }
    return (  <>
    <div id="login">
        <div className="container">
        <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4">
          {message}
            <h2>loginHere</h2>
          <form onSubmit={(e)=>{handleform(e)}}>
            <label>usrname</label>
            <input type="text" className="form-control"
            value={username}
            onChange={(e)=>{setusername(e.target.value)}}
            ></input>
            <label>password</label>
            <input type="text" className="form-control"
            value={password}
            onChange={(e)=>{setpassword(e.target.value)}}></input>
            <button type="submit " className="form-control btn btn-success mt-2">login</button>
          </form>
           <Link to='/reg'>if you don't have any account click here!</Link>
           
        </div>
        <div className="col-md-4"></div>
        

        </div>

        </div>
    </div>
    
    </>);
}

export default Login;