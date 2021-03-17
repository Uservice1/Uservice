import React, {useEffect,useState,useContext} from 'react';
import Navbar from '../Navbar'
import profilePic from '../../styles/images/profile.svg'
import {UserContext} from '../../App'
import {Link} from 'react-router-dom'
import ProfilePic from '../../styles/images/profile.svg'
import ProjectPic from '../../styles/images/2.jpg'

const MyProfile = () =>{

    const {state,dispatch} = useContext(UserContext)

    const [skills,setSkills] = useState('')

    const addExptertise = (e)=>{

        e.preventDefault()
        dispatch({type:"ADD_USER_DET",payload:skills})
        
        console.log("User: ",state)
        fetch('/addExpertise',{
            method:"post",
            headers:{
                "Authorization": "Bearer "+localStorage.getItem("jwt"),
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                skill:skills
            })
        })
    }
    useEffect(()=>{
        if(state)
        console.log("profileState: ",state)

        fetch('/myprofile',{
            method:"get",
            headers:{
                "Authorization": "Bearer "+localStorage.getItem("jwt")
            }
        })
        .then((res)=>res.json())
        .then((res)=>{
            console.log(res)
        })
    },[])

    return(
        <div>

            <Navbar />

            <section id="profile">
            <div class="profile-header">
            
            <div class="profile-img">
                <img src={ProfilePic} alt="" class="profile-image" width="240" />
            </div>

            <div class="profile-nav-info">
                <h2 class="username">{state?state.userName:"Loading.."}</h2>
                <div class="address-info">
                    <p class="state">Karachi,</p>
                    <span class="country">Pakistan</span>
                </div>
                <div class="profile-side">
                    <p class="user-bio">Lorem ipsum dolor sit amet consectetur, id ut voluptatibus illum dolores.</p>
                    <input class="input-fields" placeholder="Add Expertise.." onChange={(e)=>{setSkills(e.target.value)}}/>
                    <button class="ctn" onClick={addExptertise}>Add</button>
                </div>
            </div>
           
            <div class="profile-option">
                <div class="notification">
                    <i class="fa fa-bell"></i>
                    <span class="alert-message">1</span>
                </div>
                <div class="settings">
                    <Link to="/UpdateProfile"><i class="fa fa-cog"></i></Link>
                </div>
            </div>

            <label for="resume" class="ctn"><i class="fa fa-upload"></i> Resume</label>
            <input class="resume" type="file" style={{visibility: "hidden", display: "none"}} id="resume" />
            <a href="./styles/docs/Resume.pdf"  target="_blank"  data-after="" id="Resume"><button class="ctn"><i class="fa fa-download"></i> Resume</button></a>
        </div>

        <div class="main-bd">
            <div class="left-side">
                <div class="profile-side">
                    <p class="emial"><i class="fa fa-envelope"></i>{state?state.email:"loading.."}</p>
                   </div>
                <div class="user-rating">
                    <div class="rating">
                        <h3 class="ratings">0</h3>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star-half-o"></i>
                    </div>
                    <span class="no-users"><h3>0</h3> &nbsp;Reviews</span>
                </div>
                    <div class="profile-ctn">
                        <button class="ctn"><i class="fa fa-comment"></i>Chat</button>
                        <Link to="/createproject" ><button class="ctn"><i class="fa fa-plus"></i>Create</button></Link>
                    </div>
            </div>

            <div class="right-side">
                <div class="nav">
                    <ul>
                        <li class="user-project active"  onclick="tabs(0)">Projects</li>
                        <li class="user-reviews " onclick="tabs(1)">Reviews</li>
                        <li class="user-work " onclick="tabs(2)" >Work</li>
                    </ul>
                </div>
                <div class="profile-body">

                    <div class="profile-projects tab">
                        <div class="project">
                            <div class="project-header">
                                <div class="profile-img">
                                    <img src={ProfilePic} alt="" class="profile-image" />
                                </div>
                                <div class="profile-nav-info">
                                    <h2 class="username">{state?state.userName:"loading.."}</h2>
                                    <div class="address-info">
                                        <span class="state">Karachi,</span>
                                        <span class="country">Pakistan</span>
                                    </div>
                                </div>
                            </div>
                            <div class="project-settings">
                                <button class="ctn"> <i class="fa fa-bars"></i></button>
                                <div class="options">
                                    <a class="project-edit" href="#" ><i class="fa fa-edit"></i>Edit</a>
                                    <a class="project-remove" href="#" ><i class="fa fa-remove"></i>Remove</a>
                                </div>
                                
                                
                            </div>
                            <div class="project-date">
                                <span class="day">Sunday &nbsp;</span>
                                <span class="date"> Oct 21, 2020</span>
                            </div>
                            <div class="project-post">

                                <div class="project-img">
                                    <img class="project-img" src={ProjectPic} alt="" width="400px" />
                                </div>
                                <div class="project-content">
                                    <h3 class="project-title">Peace</h3>
                                    <p class="project-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique amet, voluptate saepe nostrum possimus tenetur optio provident corrupti</p>
                              
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="profile-reviews tab">
                    <div class="project">
                            <div class="project-header">
                                <div class="profile-img">
                                    <img src={ProfilePic} alt="" class="profile-image" />
                                </div>
                                <div class="profile-nav-info">
                                    <h2 class="username">{state?state.userName:"loading.."}</h2>
                                    <div class="address-info">
                                        <span class="state">Karachi,</span>
                                        <span class="country">Pakistan</span>
                                    </div>
                                </div>
                            </div>
                            <div class="project-settings">
                                <button class="ctn"> <i class="fa fa-bars"></i></button>
                                <div class="options">
                                    <a class="project-edit" href="#" ><i class="fa fa-edit"></i>Edit</a>
                                    <a class="project-remove" href="#" ><i class="fa fa-remove"></i>Remove</a>
                                </div>
                                
                                
                            </div>
                            <div class="project-date">
                                <span class="day">Sunday &nbsp;</span>
                                <span class="date"> Oct 21, 2020</span>
                            </div>
                            <div class="project-post">

                                <div class="project-img">
                                    <img class="project-img" src={ProjectPic} alt="" width="400px" />
                                </div>
                                <div class="project-content">
                                    <h3 class="project-title">Peace</h3>
                                    <p class="project-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique amet, voluptate saepe nostrum possimus tenetur optio provident corrupti</p>
                              
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="profile-work tab">
                    <div class="project">
                            <div class="project-header">
                                <div class="profile-img">
                                    <img src={ProfilePic} alt="" class="profile-image" />
                                </div>
                                <div class="profile-nav-info">
                                    <h2 class="username">{state?state.userName:"loading.."}</h2>
                                    <div class="address-info">
                                        <span class="state">Karachi,</span>
                                        <span class="country">Pakistan</span>
                                    </div>
                                </div>
                            </div>
                            <div class="project-settings">
                                <button class="ctn"> <i class="fa fa-bars"></i></button>
                                <div class="options">
                                    <a class="project-edit" href="#" ><i class="fa fa-edit"></i>Edit</a>
                                    <a class="project-remove" href="#" ><i class="fa fa-remove"></i>Remove</a>
                                </div>
                                
                                
                            </div>
                            <div class="project-date">
                                <span class="day">Sunday &nbsp;</span>
                                <span class="date"> Oct 21, 2020</span>
                            </div>
                            <div class="project-post">

                                <div class="project-img">
                                    <img class="project-img" src={ProjectPic} alt="" width="400px" />
                                </div>
                                <div class="project-content">
                                    <h3 class="project-title">Peace</h3>
                                    <p class="project-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique amet, voluptate saepe nostrum possimus tenetur optio provident corrupti</p>
                              
                                </div>
                            </div>
                        </div>
                    </div>
 
                </div>
            </div>
        </div>

            </section>

    </div>
    )
}

export default MyProfile