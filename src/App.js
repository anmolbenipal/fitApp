import React , {createContext , useReducer} from 'react';
import { Routes , Route , Navigate} from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';
import BMI from './components/BMI.jsx';
import Calorie from './components/Calorie.jsx';
import Challenges from './components/Challenges.jsx';
import ErrorPage from './components/ErrorPage.jsx';
import Logout from './components/Logout.jsx';

import { initialState , reducer} from './reducer/UseReducer.js';

export const UserContext = createContext();

const Routing = () => {
  return (
    <Routes>
    <Route path='/' element={<Navigate to='/home'/>} />
    <Route path='/home' element={<Home/>} />
    <Route path='/about' element={<About/>} />
    <Route path='/login' element={<Login/>} />
    <Route path='/signup' element={<Signup/>} />
    <Route path='/bmi' element={<BMI/>} />
    <Route path='/calorie' element={<Calorie/>} />
    <Route path='/challenges' element={<Challenges/>} />
    <Route path='/contact' element={<Contact/>} />
    <Route path='/logout' element={<Logout/>} />
    <Route path="*" element={<ErrorPage/>}/>
</Routes>

  )
}

const App = () => {
  const [state, dispatch] = useReducer(reducer , initialState)
  return (
    <>
    <UserContext.Provider value={{state,dispatch}}>
     <Navbar/>
     <Routing/>
    </UserContext.Provider>
    </>
  )
}

export default App
