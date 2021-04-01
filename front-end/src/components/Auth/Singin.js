import  {useState,useContext} from 'react'
import {useHistory, Link} from 'react-router-dom'
import {UserContext} from '../../App'
import  '../../styles/styles.css'
import logo1 from '../../styles/images/logo1.png'
import login from '../../styles/images/login.svg'
import Navbar from '../Navbar'


function Signin() {

  const {state,dispatch} = useContext(UserContext)
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')

  const history = useHistory()

  const handleSubmit = (e) =>{
    e.preventDefault()
    fetch('/signin',{
      method: "post",
      headers: {
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        email:email,
        password:password
      })
    })
    .then((res)=>res.json())
    .then((res)=>{
      if(res.error)
      { 

        console.log("error: ",res.error)
      }
      else
      {
        console.log(res)
        localStorage.setItem('jwt',res.token)
        localStorage.setItem('user',JSON.stringify(res.user))
        dispatch({type:"USER",payload:res.user})
        console.log("State: ",state)
        history.push('/')
      }
    })
  }
  

  return (


    
    <div className="Signin">
      

    {/* <Navbar /> */}

    <div class="sign-container">
        <div class="form-container">
                <div class="signin-signup">
                    <form class="signin-for3m" onSubmit={(e)=>{handleSubmit(e)}}>
                        <h2 class="title">Sign In</h2>
                        <div class="input-fields">
                             <i class="fas fa-envelope"></i>
                             <input class="email" type="email" placeholder="Email" onChange = {(e)=>{setEmail(e.target.value)}} />
                        </div>
                        <div class="input-fields">
                             <i class="fas fa-lock"></i>  
                             <input class="password" type="password" placeholder="Password" onChange = {(e)=>{setPassword(e.target.value)}} />
                        </div>
                            <a href="#" class="forgot-password">Forgot Password?</a>
                        <button class="btn" type="button" value="login" onClick ={(e)=>{handleSubmit(e)}}>Login</button>
                        <p class="social-text">or Sign in with</p>
                        <div class="social-media">
                            <a href="https://www.facebook.com/" class="social-icon"><i class="fab fa-facebook"></i></a>
                            <a href="https://www.gmail.com/" class="social-icon"><i class="fab fa-google"></i></a>
                            <a href="https://www.twitter.com/" class="social-icon"><i class="fab fa-twitter"></i></a>
                        </div>   
                    </form>
                </div>
                <div class="panels-container">
                    <div class="panel left-panel">
                        <div class="panel-text">
                            <h3>JOIN US!</h3>
                            <p>and become the Pro with best opportunities.</p>
                            <Link to="/signup"><button class="btn transparent" id="sign-in-btn">Sign Up</button></Link>                        </div>   
                        <img class="image" src={login} />
                    </div>
            </div>
        </div> 

    </div>
    </div>
  );
}

export default Signin