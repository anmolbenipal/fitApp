// import React from 'react'
// import 'bootstrap/dist/css/bootstrap.css';
// import '../styles/calorie.css';

// const Calorie = () => {
//   return <section className='calo'>
//     <div>
//         <div className="container my-5">
//           <form className="card bg-dark">
//             <div className="card-header">
//               <h5 className="text-white">Calorie Calculator</h5>
//             </div>
//             <div className="card-body">
//               <div>
//                 <div className="row g-4">
//                   <div className="col-sm-4">
//                     <h6 className="text-white">Age</h6>
//                     <input type="number" name="age" className="form-control" required defaultValue={25} />
//                   </div>
//                   <div className="col-sm-4">
//                     <h6 className="text-white">Gender</h6>
//                     <select name="gender" className="form-select" required>
//                       <option value={0}>Male</option>
//                       <option value={1}>Female</option>
//                     </select>
//                   </div>
//                   <div className="col-sm-4">
//                     <h6 className="text-white">Body Fat (%)</h6>
//                     <input type="number" name="bodyFat" className="form-control" required defaultValue={20} />
//                   </div>
//                   <div className="col-sm-6">
//                     <h6 className="text-white">Height (cm)</h6>
//                     <input type="number" name="height" className="form-control" required defaultValue={180} />
//                   </div>
//                   <div className="col-sm-6">
//                     <h6 className="text-white">Weight (kg)</h6>
//                     <input type="number" name="Weight" className="form-control" required defaultValue={65} />
//                   </div>
//                   <div className="col-sm-12">
//                     <h5 className="text-white">Activity</h5>
//                     <select name="activity" className="form-select" required>
//                       <option value={1}>Basal Metabolic Rate (BMR)</option>
//                       <option value="1.2">Sedentary: little or no exercise</option>
//                       <option value="1.375">Light: exercise 1-3 times/week</option>
//                       <option selected value="1.465">Moderate: exercise 4-5 times/week</option>
//                       <option value="1.55">Active: daily exercise or intense exercise 3-4 times/week</option>
//                       <option value="1.725">Very Active: intense exercise 6-7 times/week</option>
//                       <option value="1.9">Extra Active: very intense exercise daily, or physical job</option>
//                     </select>
//                   </div>
//                   <div className="col-sm-6">
//                     <h6 className="text-white">Result Unit</h6>
//                     <select name="unit" className="form-select" required>
//                       <option value="calories">Calories</option>
//                       <option value="kilojoules">Kilojoules</option>
//                     </select>
//                   </div>
//                   <div className="col-sm-6">
//                     <h6 className="text-white">BMI estimation formula</h6>
//                     <select name="formula" className="form-select" required>
//                       <option value={0}>Mifflin St Jeor</option>
//                       <option value={1}>Revised Harris-Benedict</option>
//                       <option value={2}>Katch-McArdle</option>
//                     </select>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="card-footer text-center">
//               <button type="button" className="btn btn-success" onclick="calculateCalorie(this)">Calculate</button>
//             </div>
//           </form>
//         </div>
//         <div className="ans_calculate my-3" />
//       </div>
//   </section>
// }

// export default Calorie

import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/calorie.css';

const Calorie = () => {
  const [formValues, setFormValues] = useState({
    age: 25,
    gender: '0',
    bodyFat: 20,
    height: 180,
    weight: 65,
    activity: '1.465',
    unit: 'calories',
    formula: '0',
  });

  const [result, setResult] = useState('');

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const calculateCalorie = () => {
    const { age, gender, bodyFat, height, weight, activity, unit, formula } = formValues;

    let BMR = '';
    if (formula === '0') {
      BMR = Mifflin(gender, age, bodyFat, height, weight);
    } else if (formula === '1') {
      BMR = Harris(gender, age, bodyFat, height, weight);
    } else if (formula === '2') {
      BMR = Katch(bodyFat, weight);
    }

    let ret = parseFloat(BMR) * parseFloat(activity);
    if (unit === 'kilojoules') {
      ret *= 4.1868;
    }

    setResult(`You should consume ${Math.ceil(ret)} ${unit} per day to maintain your weight.`);
  };

  const Mifflin = (gender, age, bodyFat, height, weight) => {
    return gender === '1'
      ? (10 * weight) + (6.25 * height) - (5 * age) - 161
      : (10 * weight) + (6.25 * height) - (5 * age) + 5;
  };

  const Harris = (gender, age, bodyFat, height, weight) => {
    return gender === '1'
      ? (9.247 * weight) + (3.098 * height) - (4.330 * age) + 447.593
      : (13.397 * weight) + (4.799 * height) - (5.677 * age) + 88.362;
  };

  const Katch = (bodyFat, weight) => {
    return 370 + 21.6 * (1 - (bodyFat / 100)) * weight;
  };

  return (
    <section className='calo'>
      <div>
        <div className="container my-5">
          <form className="card bg-dark">
            <div className="card-header">
              <h5 className="text-white">Calorie Calculator</h5>
            </div>
            <div className="card-body">
              <div className="row g-4">
                <div className="col-sm-4">
                  <h6 className="text-white">Age</h6>
                  <input
                    type="number"
                    name="age"
                    className="form-control"
                    required
                    value={formValues.age}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-sm-4">
                  <h6 className="text-white">Gender</h6>
                  <select
                    name="gender"
                    className="form-select"
                    required
                    value={formValues.gender}
                    onChange={handleChange}
                  >
                    <option value="0">Male</option>
                    <option value="1">Female</option>
                  </select>
                </div>
                <div className="col-sm-4">
                  <h6 className="text-white">Body Fat (%)</h6>
                  <input
                    type="number"
                    name="bodyFat"
                    className="form-control"
                    required
                    value={formValues.bodyFat}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-sm-6">
                  <h6 className="text-white">Height (cm)</h6>
                  <input
                    type="number"
                    name="height"
                    className="form-control"
                    required
                    value={formValues.height}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-sm-6">
                  <h6 className="text-white">Weight (kg)</h6>
                  <input
                    type="number"
                    name="weight"
                    className="form-control"
                    required
                    value={formValues.weight}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-sm-12">
                  <h5 className="text-white">Activity</h5>
                  <select
                    name="activity"
                    className="form-select"
                    required
                    value={formValues.activity}
                    onChange={handleChange}
                  >
                    <option value="1">Basal Metabolic Rate (BMR)</option>
                    <option value="1.2">Sedentary: little or no exercise</option>
                    <option value="1.375">Light: exercise 1-3 times/week</option>
                    <option value="1.465">Moderate: exercise 4-5 times/week</option>
                    <option value="1.55">Active: daily exercise or intense exercise 3-4 times/week</option>
                    <option value="1.725">Very Active: intense exercise 6-7 times/week</option>
                    <option value="1.9">Extra Active: very intense exercise daily, or physical job</option>
                  </select>
                </div>
                <div className="col-sm-6">
                  <h6 className="text-white">Result Unit</h6>
                  <select
                    name="unit"
                    className="form-select"
                    required
                    value={formValues.unit}
                    onChange={handleChange}
                  >
                    <option value="calories">Calories</option>
                    <option value="kilojoules">Kilojoules</option>
                  </select>
                </div>
                <div className="col-sm-6">
                  <h6 className="text-white">BMR estimation formula</h6>
                  <select
                    name="formula"
                    className="form-select"
                    required
                    value={formValues.formula}
                    onChange={handleChange}
                  >
                    <option value="0">Mifflin St Jeor</option>
                    <option value="1">Revised Harris-Benedict</option>
                    <option value="2">Katch-McArdle</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="card-footer text-center">
              <button
                type="button"
                className="btn btn-success"
                onClick={calculateCalorie}
              >
                Calculate
              </button>
            </div>
          </form>
        </div>
        {result && (
          <div className="container">
            <h4 className="text-center form-control my-3 text-danger fs-4">
              {result}
            </h4>
          </div>
        )}
      </div>
    </section>
  );
};

export default Calorie;
