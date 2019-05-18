import React,{Component} from 'react';
import './navbar.css';

class NavBar extends Component{
    render() {
      return (
        <div className= "nav">
        <ul>
           <li><a class="active" href="#home">Home</a></li>
           <li><a href="register.html">Login/SignUp</a></li>
           <li><a href="#FAQ">FAQ</a></li>
           <li style={{float:"right"}}><a href="#about">Contact Us</a></li>
       </ul>
        </div>
      )
    }
}

export default NavBar;
