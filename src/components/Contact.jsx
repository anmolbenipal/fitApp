// import React , {useEffect , useState} from 'react';
// import '../styles/contact.css';

// const Contact = () => {

//   const [userData , setUserData]=useState({name:" ",email:" ",phone:" ",message:" "});
//   const userContact = async () =>{
//     try{
//        const res= await fetch('/getdata',{
//         method:"GET",
//         headers:{
//           "Content-Type":"application/json"
//         },
//        });
//        const data = await res.json();
//        console.log(data);
//        setUserData({...userData, name:data.name, email:data.email, phone:data.phone});

//        if(!res.status===200){
//          const error = new Error(res.error);
//          throw error;
//        }
//     }catch(err){
//        console.log(err);
      
//     }
//   }

//   useEffect(() => {
//      userContact();
//   }, []);

//   const handleInputs = (e) =>{
//          const name = e.target.name;
//          const value = e.target.value;

//          setUserData({...userData, [name]:value});
//   }

//   const contactForm =async (e) =>{
//     e.preventDefault();
//     const{name,email,phone,message}=userData;
//     const res= await fetch('/contact',{
//       method:"POST",
//       headers:{
//         "Content-Type":"application/json"
//       },
//       body:JSON.stringify({
//         name,email,phone,message
//       })
//     });
//     const data = await res.json();
//     if(!data){
//       console.log("Message not sent.");
//     }else{
//       alert("Message Sent.");
//       setUserData({...userData,message:""});
//     }
//   }


//   return <section className='conta'>
//      <div className="container">
//         <div className="contact-box">
//           <div className="left" />
//           <div className="right input_container">
//             <form method='POST' className="validation" id="validation">
//               <div className="input-row">
//                 <input type="text" name="name" placeholder="Your Name" required value={userData.name} onChange={handleInputs}/>
//               </div>
//               <div className="input-row">
//                 <input type="email" name="email" placeholder="Your Email" required value={userData.email} onChange={handleInputs}/>
//               </div>
//               <div className="input-row">
//                 <input type="text" name="phone" placeholder="Your Phone" required value={userData.phone} onChange={handleInputs}/>
//               </div>
//               <div className="input-row">
//                 <textarea placeholder="Message" name="message" required value={userData.message} onChange={handleInputs} />
//               </div>
//               <div className="text-center">
//                 <input type="submit" value="Send" onClick={contactForm} />
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>

//   </section>
// }

// export default Contact





import React, { useEffect, useState } from 'react';
import '../styles/contact.css';

const Contact = () => {
  const [userData, setUserData] = useState({ name: "", email: "", phone: "", message: "" });
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const userContact = async () => {
    try {
      const res = await fetch('/getdata', {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        },
      });
      const data = await res.json();
      setUserData({ ...userData, name: data.name, email: data.email, phone: data.phone });
      setLoading(false);

      if (!res.ok) {
        throw new Error(res.statusText);
      }
    } catch (err) {
      console.error(err);
      setError("Failed to fetch user data.");
    }
  };

  useEffect(() => {
    userContact();
  }, []);

  const handleInputs = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const contactForm = async (e) => {
    e.preventDefault();
    const { name, email, phone, message } = userData;
    try {
      const res = await fetch('/contact', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, email, phone, message })
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message || "Failed to send message");
      }

      setMessage("Message Sent.");
      setUserData({ ...userData, message: "" });
    } catch (err) {
      console.error(err);
      setError("Failed to send message.");
    }
  };

  return (
    <section className='conta'>
      <div className="container">
        <div className="contact-box">
          <div className="left" />
          <div className="right input_container">
            {loading ? (
              <p>Loading...</p>
            ) : (
              <form method='POST' className="validation" id="validation">
                <div className="input-row">
                  <input 
                    type="text" 
                    name="name" 
                    placeholder="Your Name" 
                    required 
                    value={userData.name} 
                    onChange={handleInputs} 
                  />
                </div>
                <div className="input-row">
                  <input 
                    type="email" 
                    name="email" 
                    placeholder="Your Email" 
                    required 
                    value={userData.email} 
                    onChange={handleInputs} 
                  />
                </div>
                <div className="input-row">
                  <input 
                    type="text" 
                    name="phone" 
                    placeholder="Your Phone" 
                    required 
                    value={userData.phone} 
                    onChange={handleInputs} 
                  />
                </div>
                <div className="input-row">
                  <textarea 
                    placeholder="Message" 
                    name="message" 
                    required 
                    value={userData.message} 
                    onChange={handleInputs} 
                  />
                </div>
                <div className="text-center">
                  <input 
                    type="submit" 
                    value="Send" 
                    onClick={contactForm} 
                  />
                </div>
                {message && <p className="success-message">{message}</p>}
                {error && <p className="error-message">{error}</p>}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
