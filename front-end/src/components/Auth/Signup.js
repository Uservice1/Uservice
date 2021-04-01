import {useState} from 'react'
import {useHistory} from 'react-router-dom'
import  '../../styles/styles.css'
import logo1 from '../../styles/images/logo1.png'
import joinus from '../../styles/images/joinus.svg'
import {Link} from 'react-router-dom'
import Navbar from '../Navbar'


function Signup() {

  const history = useHistory();

  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [userName,setUserName] = useState('')



  const handleSubmit = (e) =>{

    e.preventDefault()
    fetch('/signup',{
      method: "post",
      headers: {
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        userName:userName,
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
        history.push('/signin')
      }
        
    })

  }



  return (
    <div className="Signup">

    <Navbar />


    <div class="sign-container">
        <div class="form-container">
                <div class="signin-signup">
                    <form class="signup-form" >
                        <h2 class="title">Sign Up</h2>
                        <div class="input-fields">
                             <i class="fas fa-user"></i>
                             <input class="name" type="text" placeholder="*Username" onChange = {(e)=>{setUserName(e.target.value)}}/>
                        </div>
                        <div class="input-fields">
                             <i class="fas fa-envelope"></i>
                             <input class="email" type="email" placeholder="*Email" onChange = {(e)=>{setEmail(e.target.value)}} />
                        </div>
                        <div class="input-fields">
                             <i class="fas fa-lock"></i>
                             <input class="password" type="password" placeholder="*Password" onChange = {(e)=>{setPassword(e.target.value)}}  />
                        </div>
                            <button class="btn" type="button" value="login" onClick={(e)=>{handleSubmit(e)}}>Register</button>  
                    </form> 
                </div>
            </div>
            <div class="panels-container">
                <div class="panel right-panel">
                    <div class="panel-text">
                        <h3>Already part of our Family?</h3>
                        <p>Sign in with your account, we are waiting for you to get our best services</p>
                        
                        <Link to="/signin"><button class="btn transparent" id="sign-in-btn">Sign In</button></Link>
                    </div>
                    <img class="image" src={joinus} />
                </div>
            </div>
    </div>


    </div>
  );
}

export default Signup
