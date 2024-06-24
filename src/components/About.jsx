// import React , {useEffect, useState} from "react";
// import ava02 from '../images/ava-2.jpg';
// import "../styles/about.css";

// import {useNavigate } from 'react-router-dom';
// const About = () => {
//   const navigate = useNavigate();
//   const [userData , setUserData]=useState({});
//   const callAboutPage = async () =>{
//     try{
//        const res= await fetch('/about',{
//         method:"GET",
//         headers:{
//           Accept:"application/json",
//           "Content-Type":"application/json"
//         },
//         credentials:"include"
//        });
//        const data = await res.json();
//        console.log(data);
//        setUserData(data);

//        if(!res.status===200){
//          const error = new Error(res.error);
//          throw error;
//        }
//     }catch(err){
//        console.log(err);
//        navigate("/login");
//     }
//   }

//   useEffect(() => {
//    callAboutPage();
//   }, []);
  
//   return (
//     <section className="about">
//       <div className="container emp-profile">
//         <form method="GET">
//           <div className="row">
//             <div className="col-md-4">
//               <img src={ava02} alt=""/>
//             </div>

//             <div className="col-md-6">
//               <div className="profile-head">
//                 <h5>{userData.name}</h5>
//                 <h6>{userData.work}</h6>
//                 <p className="profile-rating mt-3 mb-5">
//                   RANKINGS: <span> 1/10</span>{" "}
//                 </p>
//                 <ul className="nav nav-tabs" id="myTab" role="tablist">
//                   <li className="nav-item">
//                     <a
//                       className="nav-link active"
//                       id="home-tab"
//                       data-toggle="tab"
//                       href="#home"
//                       role="tab"
//                       aria-controls="home"
//                       aria-selected="true"
//                     >
//                       About
//                     </a>
//                   </li>
//                   <li className="nav-item">
//                     <a
//                       className="nav-link active"
//                       id="profile-tab"
//                       data-toggle="tab"
//                       href="#profile"
//                       role="tab"
//                       aria-controls="profile"
//                       aria-selected="false"
//                     >
//                       Timeline
//                     </a>
//                   </li>
//                 </ul>
//               </div>
//             </div>

//             <div className="col-md-2">
//               <input
//                 type="submit"
//                 className="profile-edit-btn"
//                 value="Edit Profile"
//                 name="btnAddMore"
//               />
//             </div>
//           </div>
//           <div className="row">
//             <div className="col-md-4">
//               <div className="profile-work">
//                 <p>SKILLS</p>
//                 <a href="instagram" target="thapa">
//                   Instagram{" "}
//                 </a>
//                 <br />
//                 <a href="instagram" target="thapa">
//                   LinkedIn
//                 </a>
//                 <br />
//                 <a href="instagram" target="thapa">
//                   Facebook
//                 </a>
//                 <br />
//                 <a href="instagram" target="thapa">
//                   Github{" "}
//                 </a>
//                 <br />
//                 <a href="instagram" target="thapa">
//                   Email{" "}
//                 </a>
//                 <br />
//                 <a href="instagram" target="thapa">
//                   Whatsapp
//                 </a>
//                 <br />
//               </div>
//             </div>
//             <div className="col-md-8 pl-5 about-info">
//               <div className="tab-content profile-tab" id="myTabContent">
//                 <div
//                   className="tab-pane fade show active"
//                   id="home"
//                   role="tabpanel"
//                   aria-labelledby="home-tab"
//                 >
//                   <div className="row">
//                     <div className="col-md-6">
//                       <label>User ID</label>
//                     </div>
//                     <div className="col-md-6">
//                       <p>987654321676</p>
//                     </div>
//                   </div>

//                   <div className="row mt-3">
//                     <div className="col-md-6">
//                       <label>Name</label>
//                     </div>
//                     <div className="col-md-6">
//                       <p>{userData.name}</p>
//                     </div>
//                   </div>

//                   <div className="row mt-3">
//                     <div className="col-md-6">
//                       <label>Email</label>
//                     </div>
//                     <div className="col-md-6">
//                       <p>{userData.email}</p>
//                     </div>
//                   </div>

//                   <div className="row mt-3">
//                     <div className="col-md-6">
//                       <label>Phone</label>
//                     </div>
//                     <div className="col-md-6">
//                       <p>{userData.phone}</p>
//                     </div>
//                   </div>

//                   <div className="row mt-3">
//                     <div className="col-md-6">
//                       <label>Profession</label>
//                     </div>
//                     <div className="col-md-6">
//                       <p>{userData.work}</p>
//                     </div>
//                   </div>
//                 </div>
//                 <div
//                   className="tab-pane fade show "
//                   id="profile"
//                   role="tabpanel"
//                   aria-labelledby="profile-tab"
//                 >
//                   <div className="row">
//                     <div className="col-md-6">
//                       <label> Experience</label>
//                     </div>
//                     <div className="col-md-6">
//                       <p>Expert</p>
//                     </div>
//                   </div>

//                   <div className="row mt-3">
//                     <div className="col-md-6">
//                       <label> Hourly Rate</label>
//                     </div>
//                     <div className="col-md-6">
//                       <p>10$/hr</p>
//                     </div>
//                   </div>

//                   <div className="row mt-3">
//                     <div className="col-md-6">
//                       <label> Total Projects</label>
//                     </div>
//                     <div className="col-md-6">
//                       <p>230</p>
//                     </div>
//                   </div>

//                   <div className="row mt-3">
//                     <div className="col-md-6">
//                       <label> English Level</label>
//                     </div>
//                     <div className="col-md-6">
//                       <p>Expert</p>
//                     </div>
//                   </div>

//                   <div className="row mt-3">
//                     <div className="col-md-6">
//                       <label> Availability</label>
//                     </div>
//                     <div className="col-md-6">
//                       <p>6 Months</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default About;



import React, { useEffect, useState } from "react";
import ava02 from '../images/ava-2.jpg';
import "../styles/about.css";
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const callAboutPage = async () => {
    try {
      const res = await fetch('/about', {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        credentials: "include"
      });
      const data = await res.json();
      setUserData(data);
      setIsLoggedIn(true);

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
      navigate("/login");
    }
  }

  useEffect(() => {
    callAboutPage();
  }, []);

  return (
    <section className="about">
      <div className="container emp-profile">
        <form method="GET">
          <div className="row">
            <div className="col-md-4">
              <img src={ava02} alt="Profile" className="profile-img" />
            </div>

            <div className="col-md-6">
              <div className="profile-head">
                <h5>{isLoggedIn ? userData.name : "Guest"}</h5>
                <h6>{isLoggedIn ? userData.work : "Welcome to our Gym"}</h6>
                <p className="profile-rating mt-3 mb-5">
                  SCORE : <span> 1/10</span>{" "}
                </p>
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      id="home-tab"
                      data-toggle="tab"
                      href="#home"
                      role="tab"
                      aria-controls="home"
                      aria-selected="true"
                    >
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="features-tab"
                      data-toggle="tab"
                      href="#features"
                      role="tab"
                      aria-controls="features"
                      aria-selected="false"
                    >
                      Gym Features
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-2">
              <input
                type="submit"
                className="profile-edit-btn"
                value="Edit Profile"
                name="btnAddMore"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="profile-work">
                <p>Socials</p>
                <a href="instagram" target="_blank" rel="noopener noreferrer">
                  Instagram{" "}
                </a>
                <br />
                <a href="linkedin" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
                <br />
                <a href="facebook" target="_blank" rel="noopener noreferrer">
                  Facebook
                </a>
                <br />
                <a href="github" target="_blank" rel="noopener noreferrer">
                  Github{" "}
                </a>
                <br />
                <a href="mailto:email@example.com" target="_blank" rel="noopener noreferrer">
                  Email{" "}
                </a>
                <br />
                <a href="whatsapp" target="_blank" rel="noopener noreferrer">
                  Whatsapp
                </a>
                <br />
              </div>
            </div>
            <div className="col-md-8 pl-5 about-info">
              <div className="tab-content profile-tab" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="home"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  <div className="row">
                    <div className="col-md-6">
                      <label>User ID</label>
                    </div>
                    <div className="col-md-6">
                      <p>{isLoggedIn ? userData._id : "N/A"}</p>
                    </div>
                  </div>

                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label>Name</label>
                    </div>
                    <div className="col-md-6">
                      <p>{isLoggedIn ? userData.name : "N/A"}</p>
                    </div>
                  </div>

                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label>Email</label>
                    </div>
                    <div className="col-md-6">
                      <p>{isLoggedIn ? userData.email : "N/A"}</p>
                    </div>
                  </div>

                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label>Phone</label>
                    </div>
                    <div className="col-md-6">
                      <p>{isLoggedIn ? userData.phone : "N/A"}</p>
                    </div>
                  </div>

                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label>Profession</label>
                    </div>
                    <div className="col-md-6">
                      <p>{isLoggedIn ? userData.work : "N/A"}</p>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="features"
                  role="tabpanel"
                  aria-labelledby="features-tab"
                >
                  <div className="row">
                    <div className="col-md-6">
                      <label>Personal Trainer</label>
                    </div>
                    <div className="col-md-6">
                      <p>{isLoggedIn ? userData.trainer : "Not Assigned"}</p>
                    </div>
                  </div>

                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label>Membership Plan</label>
                    </div>
                    <div className="col-md-6">
                      <p>{isLoggedIn ? userData.plan : "N/A"}</p>
                    </div>
                  </div>

                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label>Gym Visits</label>
                    </div>
                    <div className="col-md-6">
                      <p>{isLoggedIn ? userData.visits : "N/A"}</p>
                    </div>
                  </div>

                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label>Last Visit</label>
                    </div>
                    <div className="col-md-6">
                      <p>{isLoggedIn ? userData.lastVisit : "N/A"}</p>
                    </div>
                  </div>

                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label>Goal</label>
                    </div>
                    <div className="col-md-6">
                      <input type="text" placeholder="Your Goal" />
                    </div>
                  </div>

                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label>Diet Plan</label>
                    </div>
                    <div className="col-md-6">
                      <input type="text" placeholder="Your Diet Plan" />
                    </div>
                  </div>

                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label>Workout Plan</label>
                    </div>
                    <div className="col-md-6">
                      <input type="text" placeholder="Your Workout Plan" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default About;
