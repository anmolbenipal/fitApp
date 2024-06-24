import React from 'react';
import '../styles/home.css';
import { NavLink } from 'react-router-dom';
import Pricing from '../shared/Pricing';
import Goals from '../shared/Goals';
import Yellow from '../shared/Yellow';
import Search from '../shared/Search';
import Benefits from '../shared/Benefits';
import {useEffect} from 'react';
import Aos from 'aos';
import Footer from '../shared/Footer';


const Home = () => {

    useEffect(()=>{
       Aos.init()
    },[])


    return <section className='Hero' id="Hero">
    <div className="hero">
        <div className="hero-content" data-aos='fade-up' data-aos-duration='2000'>
            <h1>REACH YOUR <span className='highlight'>BEST</span></h1>
            <p>Track your workouts , set goals , and monitor your progress.</p>
            <button className='home_btn'><NavLink className='home_nav_link' to='/challenges'>Get Started</NavLink></button>   
        </div>
    </div>
    <Pricing/>
    <Goals/>
    <Yellow/>
    <Search/>
    <Benefits/>
     <Footer/>
    </section>
   
}

export default Home