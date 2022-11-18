import logo from "./logo.svg";
import burger from "./images/hand burger.png"
const header = () => {
    return ( 
        <div>
          <header className='header'>
            <nav className='navgt'>
              <img className='logo' src={logo} alt="logo"/>
             <ul>
              <li>Blog</li>
              <li>Pricing</li>
              <li>Login</li>
              <li id="btn">Sign up</li>
             </ul>
             <img className='burger' src={burger} alt="burger"/>
          </nav>
         </header>  
        </div>
     );
}
 
export default header;