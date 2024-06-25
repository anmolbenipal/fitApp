import React , {useState} from 'react';
import '../styles/signup.css';
import { NavLink , useNavigate} from 'react-router-dom';


const Signup = () => {
  const navigate = useNavigate();
  const[user , setUser]=useState({
    name:"" , email:"" , phone:"" , work:"",password:"",cpassword:""
  });
  let name , value;
  const handleInputs = (e) => {
       console.log(e);
       name = e.target.name;
       value=e.target.value;
       setUser({...user,[name]:value});
  }
const PostData = async (e) =>{
      e.preventDefault();
      const {name,email,phone,work,password,cpassword}=user;

      const res = await fetch("/register" , {
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          name,email,phone,work,password,cpassword
        })
      } );
      const data = await res.json();
      if(res.status=== 422 || !data){
        window.alert("Invalid Registration");
        console.log("Invalid Registration");
      } else{
        window.alert("Registration Successful");
        console.log("Registration Successful");

        navigate("/login");
      }
}

  return <section className='con'>
  <div className="container">
     <div className="contact-box">
      <div className="main">
        <div className="left"></div>
        <div>
       <NavLink to= '/login' className='nav__link'>Already Registered</NavLink>
        </div>
      </div>
       
       <div className="right input_container">
         <form method='POST' className="validation" id="validation">
           <div className="input-row">
             <input type="text" name="name" placeholder="Your Name" required value={user.name} onChange={handleInputs}/>
           </div>
           <div className="input-row">
             <input type="email" name="email" placeholder="Your Email" required value={user.email} onChange={handleInputs}/>
           </div>
           <div className="input-row">
             <input type="text" name="phone" placeholder="Your Phone" required value={user.phone} onChange={handleInputs}/>
           </div>
           <div className="input-row">
             <input type="text" name="work" placeholder="Your Profession" required value={user.work} onChange={handleInputs}/>
           </div>
           <div className="input-row">
             <input type="password" name="password" placeholder="Your Password" required value={user.password} onChange={handleInputs} />
           </div>
           <div className="input-row">
             <input type="password" name="cpassword" placeholder="Confirm Your Password" required value={user.cpassword} onChange={handleInputs} />
           </div>
           </form>
           
           <div className="text-center">
             <input type="submit" name="signup" id="signup" className="form-submit" value="Register" onClick={PostData} />
           </div>
       </div>
     </div>
   </div>

</section>
  
}

export default Signup

