// import React from 'react';
// import "../styles/bmi.css";

// const BMI = () => {
//   return <section className='bmi'>
//   <section className="calulation">
//         <div className="calculation_container container grid">
//           <div className="calulation_content">
//             <div className="section_titles">
//               <h1 className="section_title-border" style={{fontWeight: 800}}>CALCULATE</h1>
//               <h1 className="section_title">BMI</h1>
//             </div>
//             <p className="calculation_description">
//               The Body Mass Index (BMI) calculator calculates body mass index from your weight and height.
//             </p>
//             <form action className="calculation_form" id="calculation_form" style={{justifyContent: 'center'}}>
//               <div className="calculation_box">
//                 <input type="number" placeholder="Height" className="calculation_input" id="calculation_cm" />
//                 <label htmlFor className="calculation_label">cm</label>
//               </div>
//               <div className="calculation_box">
//                 <input type="number" placeholder="Weight" className="calculation_input" id="calculation_kg" />
//                 <label htmlFor className="calculation_label">kg</label>
//               </div>
//               <button className="btn btn-outline-light btn-lg" type="submit">
//                 Calculate Now <i className="ri-arrow-right-line" />
//               </button>
//             </form>
//             <p className="calculation_message" id="calculation_message" />
//           </div>
//         </div>
//       </section>
// </section>
// }

// export default BMI



import React, { useState } from 'react';
import "../styles/bmi.css";

const BMI = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [message, setMessage] = useState('');

  const calculateBMI = (e) => {
    e.preventDefault();
    if (height === '' || weight === '') {
      setMessage('Fill in the Height and Weight 😓');
      setTimeout(() => {
        setMessage('');
      }, 3000);
    } else {
      const cm = height / 100;
      const kg = weight;
      const bmi = Math.round(kg / (cm * cm));

      if (bmi < 18.5) {
        setMessage(`Your BMI is ${bmi} and you are skinny 😔`);
      } else if (bmi < 25) {
        setMessage(`Your BMI is ${bmi} and you are healthy 😁`);
      } else {
        setMessage(`Your BMI is ${bmi} and you are overweight 😖`);
      }
      
      setHeight('');
      setWeight('');
      setTimeout(() => {
        setMessage('');
      }, 4000);
    }
  };

  return (
    <section className='bmi'>
      <section className="calculation">
        <div className="calculation_container container grid">
          <div className="calculation_content">
            <div className="section_titles">
              <h1 className="section_title-border" style={{ fontWeight: 800 }}>CALCULATE</h1>
              <h1 className="section_title">BMI</h1>
            </div>
            <p className="calculation_description">
              The Body Mass Index (BMI) calculator calculates body mass index from your weight and height.
            </p>
            <form className="calculation_form" id="calculation_form" onSubmit={calculateBMI} style={{ justifyContent: 'center' }}>
              <div className="calculation_box">
                <input
                  type="number"
                  placeholder="Height"
                  className="calculation_input"
                  id="calculation_cm"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                />
                <label htmlFor="calculation_cm" className="calculation_label">cm</label>
              </div>
              <div className="calculation_box">
                <input
                  type="number"
                  placeholder="Weight"
                  className="calculation_input"
                  id="calculation_kg"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                />
                <label htmlFor="calculation_kg" className="calculation_label">kg</label>
              </div>
              <button className="btn btn-outline-light btn-lg" type="submit">
                Calculate Now <i className="ri-arrow-right-line" />
              </button>
            </form>
            <p className={`calculation_message ${message.includes('skinny') ? 'color-green' : message.includes('healthy') ? 'color-green' : message.includes('overweight') ? 'color-green' : 'color-red'}`} id="calculation_message">
              {message}
            </p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default BMI;
