import React , {useState,useContext} from "react";
import "../styles/login.css";
import { NavLink , useNavigate } from "react-router-dom";
import { UserContext } from "../App";


const Login = () => {

  const {state , dispatch} = useContext(UserContext);

  const navigate = useNavigate();
  const[email,setEmail]=useState('');
  const [password,setPassword]=useState("");

  const loginUser=async (e)=>{
      e.preventDefault();

      const res = await fetch('/signin',{
          method:"POST",
          headers:{
            "Content-Type" : "application/json"
          },
          body:JSON.stringify({
            email,
            password
          })
      });
      const data = res.json();

      if(res.status===400 || !data){
        window.alert("Invalid Credentials");
      }else{
        dispatch({type:"USER" , payload:true})
        window.alert("Login Successful")
        navigate("/");
      }
  }

  return (
    <section className="cont">
      <div className="container">
        <div className="contact-box">
        <div className=" input_container">
         <form method="POST" className="validation" id="validation">
          <h2>Login</h2>
           
           <div className="input-row">
             <input type="email" name="email" placeholder="Your Email" required value={email} onChange={(e)=>setEmail(e.target.value)}/>
           </div>
           
           <div className="input-row">
             <input type="password" name="password" placeholder="Your Password" required value={password} onChange={(e)=>setPassword(e.target.value)} />
           </div>
          
           </form>
           
           <div className="text-center">
             <input type="submit" name="signin" id="signin" className="form-submit" value="Log In" onClick={loginUser}/>
           </div>
       </div>
          <div className="main">
            <div className="right"></div>
            <div>
              <NavLink to="/signup" className="nav__link">
                Create an Account
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
