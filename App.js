import logo from './logo.svg';
import './App.css';
import myimage from './comp/pg.webp' 
import Sign from './comp/Sign';
import { Link, Outlet, Route, Routes } from 'react-router-dom';
import Home from './comp/Home';
import About from './comp/About';
import Contact from './comp/Contact';
import Login from './comp/Login'

function App() {
  return (
    <div className='maincont'>
    <div className="App">
      <span id='logo'>
      <img id='im' src={myimage}/><b>PgNotion</b>
      </span>
      <div id='headbut'>
        <Link to="/"><button className='button'>Home</button></Link>
        <Link to="/About"><button className='button'>About</button></Link>  
        <Link to="/Contact"> <button className='button'>Contact</button>   </Link >
      </div>
      <div >
      <Link to="/Login"><button className='button'>Login</button></Link >
      <Link to="/Sign"><button className='button'>Sign Up</button></Link >

      </div>
     
      
     {/* <Sign></Sign> */}
    </div>
   
   
    <Routes>
<Route path='/' index element={<Home/>}></Route>
<Route path='/About' element={<About/>}></Route>
<Route path='/Contact' element={<Contact/>}></Route>
<Route path='/Login' element={<Login/>}></Route>
<Route path='/Sign' element={<Sign/>}></Route>

      </Routes>

      <Outlet></Outlet>

    </div>
  );
}

export default App;
