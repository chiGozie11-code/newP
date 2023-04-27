import logo from "./logo.svg";
import burger from "./images/hand burger.png"
import {Link} from "react-router-dom"
const header = () => {
  const out = document.getElementsByClassName('.nav-links');
    const add = () => {
        return out
    }
    return ( 
        <div>
          <header className='header'>
            <nav className='navgt'>
                  <div className="nav-links"><img className='logo' src={logo} alt="logo"/></div>
                  <div className="nav links"><ul>
                    <li><Link to="/normal">Blog</Link></li>
                    <li>Pricing</li>
                    <li>Login</li>
                    <li id="btn">Sign up</li>
                   </ul></div>
             <img className='burger' src={burger} alt="burger" onClick={add} />
          </nav>
         </header>  
        </div>
     );
}
 
export default header;