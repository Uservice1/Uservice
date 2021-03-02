import react from 'react'
import {Link} from 'react-router-dom'
import '../styles/styles.css'
import logo1 from '../styles/images/logo1.png'
import photography from '../styles/images/photography.svg'
import graphic from '../styles/images/graphic.svg'
import art from '../styles/images/art.svg'
import develope from '../styles/images/develope.svg'
import one from '../styles/images/1.jpg'
import two from '../styles/images/2.jpg'
import three from '../styles/images/5.png'
import four from '../styles/images/4.jpg'
import profile from '../styles/images/profile.svg';
import Navbar from './Navbar'


function Home() {
  return (
    <div className="App">
    
    <Navbar></Navbar>

    <section id="main">
        <div class="main slider">
            <div class="slide">
                <img src={two} alt=""></img>
                <div class="main-content">
                    <h1>Get our best services with </h1>
                    <h1>Professionals </h1>
                    <Link to="./discover.html" type="button" class="ctn"> Photographers</Link>          
                    <Link to="./discover.html" type="button" class="ctn"> Art & Illustrations</Link>          
                    <Link to="./discover.html" type="button" class="ctn"> Graphic Designer </Link>        
                    <Link to="./discover.html" type="button" class="ctn"> Developer</Link>           
                </div>
            </div>
            <div class="slide">
                <img src={one} alt=""></img>
                <div class="main-content">
                    <h1>Discover best Projects and </h1>
                    <h1>Portfolios </h1>
                    <Link to="./discover.html" type="button" class="ctn"> Discover</Link>                     
                </div>
            </div>
            <div class="slide">
                <img src={three} alt=""></img>
                <div class="main-content">
                    <h1>Meet the Skilled and </h1>
                    <h1> Creative</h1>
                    <Link to="./discover.html" type="button" class="ctn"> Projects</Link>                    
                </div>
            </div>
            <div class="slide">
                <img src={two} alt=""></img>
                <div class="main-content">
                    <h1>Get our best services with </h1>
                    <h1>Professionals </h1>   
                    <Link to="./discover.html" type="button" class="ctn"> Photographers</Link>          
                    <Link to="./discover.html" type="button" class="ctn"> Art & Illustrations</Link>          
                    <Link to="./discover.html" type="button" class="ctn"> Graphic Designer </Link>        
                    <Link to="./discover.html" type="button" class="ctn"> Developer</Link>         
                </div>

            </div>
        </div>
    </section>

    <div class="search-box">
        <form action="#" method="POST" class="search">        
            <input type="text" placeholder="Search..."/>
            <button class="btn" ><i class="fa fa-search"></i></button>
        </form>
    </div>
    
    <div class="categories">
        <div class="small-container">
            <div class="row">
                <div class="col-3">
                    <Link to="./discover.html" class=""><img  src={one} alt=""/><h4>Photography</h4></Link>

                </div>
                <div class="col-3">
                    <Link to="./discover.html" class=""> <img src={two} alt=""/><h4>Graphic Design</h4></Link>
                   
                </div>
                <div class="col-3">
                    <Link to="./discover.html" class=""><img  src={four} alt=""/><h4>Art & Illustrations</h4></Link>
                    
                </div>
                <div class="col-3">
                    <Link to="./discover.html" class=""> <img src={three} alt=""/><h4>Development</h4></Link>

                </div>
            </div>
        </div>
    </div>

    <section id="services">
        <div class="services container">
            <div class="service-top">
                <h1 class="heading">Services</h1>
                <p>Lorem ipsum dolor sit amet, vim id essent definitiones. 
                    Vim in dico commune mediocrem. Tantas pertinax et pri Apeirian platonem est ei, nam dico idque cu. 
                    Eu graeci vocent epicurei his. Eu quis expetendis has, ea dico causae hendrerit duo.
                </p>
            </div>
            <div class="service-bot">
                <div class="service-icons">
                    <Link to="/discover.html"><img id="icon1" src={photography}/></Link>
                    <h3>Photography</h3>
  
                 </div>
                <div class="service-icons">
                    <Link to="./discover.html"><img id="icon" src={graphic} /></Link>
                    <h3>Graphic Desgin</h3>

                </div>
            </div>
            <div class="service-bot">
                <div class="service-icons">
                    <Link to="./discover.html"><img id="icon" src={art} /></Link>
                    <h3>Art & Illustrations</h3>
  
                 </div>
                <div class="service-icons">
                    <Link to="./discover.html"><img id="icon1" src={develope} /></Link>
                    <h3>Software Developements</h3>

                </div>
            </div>
        </div>
    </section>

    <section id="about">
        <div class="about container">
            <div class="about-top">
                <h1 class="heading">About Us</h1>
                <p>Lorem ipsum dolor sit amet, vim id essent definitiones. 
                    Vim in dico commune mediocrem. Tantas pertinax et pri Apeirian platonem est ei, nam dico idque cu. 
                    Eu graeci vocent epicurei his. Eu quis expetendis has, ea dico causae hendrerit duo.
                </p>
                <div class="creators">
                    <div class="about-bot">
                        <div class="about-icons">
                            <Link to="./discover.html"><img id="icon" src={profile}/></Link>
                            <h3>Vishal Rathore</h3>
                            <p>UI UX Designer</p>
                            <Link to="k173718@nu.edu.pk" class="email" type="email">K173718@nu.edu.pk</Link>
                        </div>
                        <div class="about-icons">
                            <Link to="./discover.html"><img id="icon" src={profile}/></Link>
                            <h3>Usman Hussain</h3>
                            <p>Web & App Developer</p>
                            <Link to="k173761@nu.edu.pk" class="email" type="email">K173761@nu.edu.pk</Link>
                        </div>
                        <div class="about-icons">
                            <Link to="./discover.html"><img id="icon" src={profile}/></Link>
                            <h3>Hussain Zohair</h3>
                            <p>Photographer</p>
                            <Link to="k17309@nu.edu.pk" class="email" type="email">K173709@nu.edu.pk</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <footer>
        <div id="foot">
            <div class="foot-items">
                <div class="foot-sections Links">
                    <h3>USERVICE</h3>
                    <br />
                    <ul>  
                        <Link class="a" to="#" >Discover</Link>
                        <Link to="#" >Jobs</Link>
                        <Link to="#" >Blogs</Link>
                        <Link to="#" >Applications</Link>
                        <Link to="#" >Professionals</Link>
   
                    </ul>
                </div>
                <div class="foot-sections Links">
                    <h3>Services</h3>
                    <br />
                    <ul>  
                        <Link to="#" >Photography </Link>
                        <Link to="#" >Graphic Desgin</Link>
                        <Link to="#" >Art & Illustrations </Link>
                        <Link to="#" >Web Developement</Link>
                        <Link to="#" >App Developement</Link>
                    </ul>
                </div>
                <div class="foot-sections Links">
                    <h3>Support</h3>
                    <br />
                    <ul>  
                        <Link to="#" >Join Us! </Link>
                        <Link to="#" >Login</Link>
                        <Link to="#" >Contact Us</Link>
                        <Link to="#" >Help</Link>
                        <Link to="#" >Privacy Policy</Link>
                    </ul>
                </div>

                <div class="foot-sections Links">
                    <h3>Contact Us</h3>
                    <br />
                        <form action="#" method="POST">
                            <input type="email" name="Email" class="text-input contacts-input" placeholder="*Email" />
                            <textarea name="message" class="text-input contacts-message" placeholder="type here...."></textarea>
                            <button type="submit" class="ctn"> Send</button>
                        </form>
                </div>
            </div>

        </div>
    </footer>


    <div class="foot">
        <p>All  &copy; USERVICE  |  Designed & Developed by Vishal Rathore, Usman Hussain & Hussain Zohair</p>
        
    </div>
    </div>
  );
}

export default Home