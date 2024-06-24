import React from 'react'
import '../styles/pricing.css'

const Pricing = () => {
  return <section id="pricing">
  <div className="container">
   <div className="pricing__top">
       <h2 className="section__title">Membership Pricing Plan
       </h2>
       <p>We offers competitive rates and pricing plans to help you find a plan <br/>that fulfills your needs and requirements and fits your budget.</p>
   </div>
   <div className="pricing__wrapper">
       <div className="pricing__item" data-aos='fade-up' data-aos-duration='1500'>
           <div className="pricing__card-top">
               <h2 className='section__title'>Regular Member</h2>
               <h2 className="pricing section__title">$50 <span>/ month</span></h2>
           </div>
           <div className="services">
               <ul>
                   <li>Unlimited Access</li>
                   <li>Customer Support</li>
                   <li>Personal Trainer</li>
                   <li>Standard Options</li>
                   <li>5 classes per week</li>
               </ul>
               <button className="register__btn">Join Now</button>
           </div>
       </div>

       <div className="pricing__item pricing__item-02" data-aos='fade-up' data-aos-duration='1800'>
           <div className="pricing__card-top">
               <h2 className='section__title'>Premium Member</h2>
               <h2 className="pricing section__title">$75<span>/ month</span></h2>
           </div>
           <div className="services">
               <ul>
                   <li>Unlimited Access</li>
                   <li>Personal Trainer</li>
                   <li>Template Updates</li>
                   <li>7 classes per week </li>
                   <li>Customer Support</li>
               </ul>
               <button className="register__btn">Join Now</button>
           </div>
       </div>

       <div className="pricing__item pricing__item-03 " data-aos='fade-up' data-aos-duration='2000'>
           <div className="pricing__card-top">
               <h2 className='section__title'>Standard Member</h2>
               <h2 className="pricing section__title">$100 <span>/ month</span></h2>
           </div>
           <div className="services">
               <ul>
                   <li>Unlimited Access</li>
                   <li>Priority Listing</li>
                   <li>Personal Trainer</li>
                   <li>Template Updates</li>
                   <li>7 classes per week</li>
               </ul>
               <button className="register__btn">Join Now</button>
           </div>
       </div>
   </div>
  </div>
 </section>
}

export default Pricing