import {useEffect, useContext}  from 'react'

import {Link} from 'react-router-dom'
import logo1 from '../styles/images/logo1.png'
import {useHistory} from 'react-router-dom'
import ProfilePic from '../styles/images/profile.svg'
import {UserContext} from '../App'


const Navbar = () =>{

    const {state,dispatch} = useContext(UserContext)

    const history=useHistory()
        

    useEffect(()=>{
        const user = JSON.parse(localStorage.getItem("user"))
        if(state)
        {
            console.log("Logged in",state)
        }
    },[])

    const handleLogout = ()=>{
        console.log("Logout")
        localStorage.clear()
        dispatch({type:"CLEAR"})
        history.push('/')
    }

    const navList = ()=>{
      if(state)
      {
        return(
            [
                <li><a href="/discover" data-after="Discover" id="discover">Discover</a></li>,
                <li><Link to="/contact">Contact Us</Link></li>,
                <li><Link to ="/myprofile"  style={{ justifyContent:"center" , textAlign:"center" , alignContent:"center", alignItems:"center", margin:"0px", top:"0px"}}><img style={{border:"solid 0.5px", borderRadius:"10px"}} src={state.profilePicture?state.profilePicture:ProfilePic} style={{ width: "24px", padding:"0px", marginBottom:"0px", textAlign:"center" , alignContent:"center", alignItems:"center",}}></img>&nbsp; {state?state.userName:"Loading.."}</Link></li>,
                <li onClick={handleLogout}><Link to>Logout</Link></li>
    

            ]
        )
      }
      else
      {
          return(
              [
                <li><a href="/discover" data-after="Discover" id="discover">Discover</a></li>,
                <li><Link to="/contact">Contact Us</Link></li>,
                <li><Link to="/signin" >Signin</Link></li>,
                <li><Link to ="/signup">Join Us</Link></li>,
              ]
          )
      }
    }

    

    return (


        <div>
                <section id="header">
          <div className="header container">
              <div class="nav"  >
                  <div class="brand">
                      <Link to="/" id="logo"><img  src={logo1} /></Link>
                  </div>
                  <div class="nav-items">
                      <div class="hamburger"><div class="bar"></div></div>
                      <ul>
                          {navList()}
                      </ul>
                  </div>
              </div>
          </div>
      </section>
        </div>
    )
}

export default Navbar