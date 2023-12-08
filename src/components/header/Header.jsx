import './header.scss';
import { Link } from'react-router-dom';
import logo from '../../assets/images/logo192.png';

function Header() {

  return (
    <div className='header'>
      <div className='headerLogo'>
        <img src={logo} alt='logo' />
      </div>
      <div className='headerMenu'>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            {<span class='aboutUs'>About Us</span>/* <Link to='/about'>About</Link> */}
          </li>
          <li>
            {<span class='portfolio'>Portfolio</span>/* <Link to='/contact'>Contact</Link> */}
          </li>
          <li>
            {<span class='news'>News</span>/* <Link to='/contact'>Contact</Link> */}
          </li>
          <li>
            {<span class='contactUs'>Contact us</span>/* <Link to='/contact'>Contact</Link> */}
          </li>
        </ul> 
      </div>
    </div>
    
    
    
  )
}

export default Header