import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/error.css';

const ErrorPage = () => {
  return <section className='err'>
     <div id="notfound">
        <div className="notfound">
            <div className="notfound-404">
                <h1>404</h1>
                <h2>We are sorry. The page is not found.</h2>
                <p className="mb-5">
                    The page you are looking for might have been removed had its name changed or is temporarily unavailable.
                </p>
                <NavLink to='/'>Back to Home Page</NavLink>

            </div>
        </div>
     </div>
  </section>
}

export default ErrorPage