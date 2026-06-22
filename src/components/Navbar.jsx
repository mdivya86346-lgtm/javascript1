import {Link, Route, Routes} from "react-router-dom";
import Home from "./Home";
import About from "./about"; 
import Contact from "./Contact";
import Login from "./login";


export default function Navbar() {
  return (
    <>
    <Link to="/home">Home</Link>
     <Link to="/about">About</Link>
     <Link to="/contact">Contact</Link>
      <Link to="/login">Login</Link>
     <Routes>
        <Route path="/" element ={<Home />}/>
        <Route path="/Home" element ={<Home />}/>
        <Route path="/about" element ={<About />}/>
        <Route path="/Contact" element ={<Contact />}/>
         <Route path="/Login" element ={<Login/>}/> 
        </Routes>
    </>
   
  )
}
