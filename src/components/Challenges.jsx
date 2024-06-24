import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import '../styles/challenges.css';
import Pullups from '../images/pullups.jpeg';
import Pulldown from '../images/pulldown.jpeg';
import Deadlift from '../images/deadlift.png';
import Shrugs from '../images/shrugs.jpeg';
import dips from '../images/dips.png';
import curl from '../images/curl.jpeg';

const Challenges = () => {
  return (
    <section className="cha">
      <h1 className="text-center text-secondary ">Challenges</h1>
      <div className="container" >
        <div className="row"  data-aos='zoom-in' data-aos-duration='2000'>
          <div className="col-md-3 ms-5">
            <div className="card" style={{ width: "18rem" }}>
              <img className="card-img-top" src={Pullups} alt="" />
              <div className="card-body">
                <h5 className="card-title">Pullups</h5>
                <p className="card-text">
                The pullup is a classic strength-building move that everyone needs to do in the gym. But whatever you do, don’t lose your form in favor of reps. Keep those legs straight for maximum payoff.
                </p>
                <a href="#" className="btn btn-secondary">
                  Buy Now
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-3 ms-5">
            <div className="card" style={{ width: "18rem" }}>
              <img className="card-img-top" src={Pulldown} alt="" />
              <div className="card-body">
                <h5 className="card-title">Degree Lat Pulldown</h5>
                <p className="card-text">
                This variation on the traditional pulldown not only strengthens your middle and upper back, it also works your shoulders, biceps, and forearms.
                </p>
                <a href="#" className="btn btn-secondary">
                  Buy Now
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-3 ms-5">
            <div className="card" style={{ width: "18rem" }}>
              <img className="card-img-top" src={Deadlift} alt="" />
              <div className="card-body">
                <h5 className="card-title">Deadlift</h5>
                <p className="card-text">
                The bread and butter of countless gym routines, this move, if done properly, will predominantly engage your back and legs, while building overall strength for you entire body.
                </p>
                <a href="#" className="btn btn-secondary">
                  Buy Now
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row"  data-aos='zoom-in' data-aos-duration='2500'>
          <div className="col-md-3 ms-5">
            <div className="card" style={{ width: "18rem" }}>
              <img className="card-img-top" src={Shrugs} alt="" />
              <div className="card-body">
                <h5 className="card-title">Shoulders Shrugs</h5>
                <p className="card-text">
                There is no shortage of ways to do shrugs. You can utilize the trap bar, stick to dumbbells, hop on a calf machine, or use a designated shrug machine, depending on your gym setup.
                </p>
                <a href="#" className="btn btn-secondary">
                  Buy Now
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-3 ms-5">
            <div className="card" style={{ width: "18rem" }}>
              <img className="card-img-top" src={dips} alt="" />
              <div className="card-body">
                <h5 className="card-title">Dips</h5>
                <p className="card-text">
                You don’t need any fancy equipment for dips (even a park bench will do), which makes this an ideal bodyweight workout for triceps. The different variations available can also target your pecs.
                </p>
                <a href="#" className="btn btn-secondary">
                  Buy Now
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-3 ms-5">
            <div className="card" style={{ width: "18rem" }}>
              <img className="card-img-top" src={curl} alt="" />
              <div className="card-body">
                <h5 className="card-title">Dumbbell Curl</h5>
                <p className="card-text">
                Staying seated while curling may seem like just a slight adjustment to standing, but you won’t be able to deny how hard your arms are working with this move. Sit on an adjustable bench between 45 and 60 degrees for the ideal effect.
                </p>
                <a href="#" className="btn btn-secondary">
                  Buy Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Challenges;
