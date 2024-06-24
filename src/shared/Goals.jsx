import React from 'react';
import '../styles/Goals.css';
import { NavLink } from 'react-router-dom';

const Goals = () => {
  return <section className="goals" id='goals'>
  <h3 className="end">SET THE GOALS</h3>
  <h3 className="end">LOG WORKOUTS</h3>
  <h3 className="end of">STAY ON TRACK</h3>
  <button className='btn'><NavLink className="goals_nav_link" to='/calorie'>Nutrition Tracking</NavLink></button>
</section>
}

export default Goals