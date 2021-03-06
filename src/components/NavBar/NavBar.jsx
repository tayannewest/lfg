import { Link, useLocation } from 'react-router-dom'
import './Nav.css'
import icon from '../../Assets/smallIcons/ourcon.png'



const NavBar = ({user, handleLogout, userProfile }) => {
const location = useLocation()
const isSignUp = location.pathname === '/signup'
console.log(location)
  return (
    <>
      {user ?
    <nav className="navbar">
<p><img className='our-icon' src={icon} alt="icon"/></p>
        <div className='welcome-message'>
        <p id="welcome">Welcome, {user.name}</p>
        </div>
        <div className='outer-container'>
        <div className='nav-route'>
          
          <p><Link to="/">Home</Link></p>
        <div> 
          <div className="dropdown">
              <button className="dropbtn">Topics of Interest ☟
              </button>
            <div className="dropdown-content">
              <Link to="/bar">Bars</Link>
              <Link to="/restaurant">Restaurants</Link>
              <Link to="/retail">Retail Spaces</Link>
              <Link to="/event">Events</Link>
            </div>
          </div> 
        </div>
            <p><Link to="/profiles">Profiles</Link></p>
            <p><Link to="/profile" state={userProfile}>My Profile</Link></p>
            <p><Link to="/chat">Community Chat</Link></p>
            <p><Link to="" onClick={handleLogout}>Log Out</Link></p>
            </div>
      </div>
        </nav>
      :
      !user && !isSignUp && 

        <nav>
          <ul className='login-box'>
            <li><Link to="/login">Log In</Link></li>
            <li><Link to="/signup" >Sign Up</Link></li>
          </ul>
        </nav>
      }
      
    </>
  )
}

export default NavBar
