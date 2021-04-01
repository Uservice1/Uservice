import React, {useEffect,useState,useContext} from 'react';
import Navbar from '../Navbar'
import profilePic from '../../styles/images/profile.svg'
import {UserContext} from '../../App'
import {Link} from 'react-router-dom'
import ReactDom from 'react-dom'
import axios from 'axios'
const MyProfile = () =>{

    const {state,dispatch} = useContext(UserContext)

    const [skills,setSkills] = useState('')

    const [myProjects,setMyProjects] = useState([{}])
    
    const [file, setFile] = useState();
    const [filename, setFilename] = useState();

    const onChange = e =>{
        setFile(e.target.files[0]);
        setFilename(e.target.files[0].name);
    }

    const onSubmit = async e =>{
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', file);

        try{
            const res = await axios.post('/uploads', formData, 
            {
                method: "post",
                headers:
                {
                    'Content-Type' : 'multipart/form-data'
                }
               
            }
             
            );
            console.log(res);
        } catch(err){
            if( err.response.status === 500 ){
                console.log('Server Error!', err);
            }
            else{
                console.log(err.response.data.msg);
            }
        }

    }


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

    useEffect(()=>{
        fetch('/myprojects',{
            method:"get",
            headers:{
                "Authorization": "Bearer "+localStorage.getItem("jwt"),
                "Content-Type":"application/json"
			}
        })
        .then((res)=>res.json())
        .then(({projects})=>{
            console.log('projects', projects)
            setMyProjects(projects)
        })
},[]);

    const projectList = myProjects.map((project)=>{
        return(
            <Link to={"/project/"+project.projectId}>
            <div class="project">
                            <div class="project-header">
                                <div class="profile-img">
                                    <img src={state.profilePicture?state.profilePicture:profilePic} alt="" class="profile-image" />
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
                                    <a class="project-edit" href="" ><i class="fa fa-edit"></i>Edit</a>
                                    <a class="project-remove" href="" ><i class="fa fa-remove"></i>Remove</a>
                                </div>
                                
                                
                            </div>
                            <div class="project-date">
                                <span class="date">{project.date_published ? project.date_published : null}</span>
                            </div>
                            <div class="project-post">
                                <div class="project-img" style={{width:'400px', height:'400px'}}>
                                    <img class="project-img" src={project.projectThumbnail} alt="" />
                                </div>
                                <div class="project-content">
                                    <h3 class="project-title">{project.title}</h3>
                                    <p class="project-description">{project.projectDescription}</p>
                                </div>
                            </div>
                        </div>
                </Link>
        )
    })



    return(
        <div>

            <Navbar />

            <section id="profile">
            <div class="profile-header">
            
            <div class="profile-img">
                <img src={state.profilePicture?state.profilePicture:profilePic} alt="" class="profile-image" width="240" />
            </div>

            <div class="profile-nav-info">
                <h2 class="username">{state?state.userName:"Loading.."}</h2>
                <div class="address-info">
                    <p class="state"></p>
                    <span class="country"></span>
                </div>
                <div class="profile-side">
{/*                     <p class="user-bio">{state.description?state.description:"Update your description..."}</p> */}
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


 
                
{/*                 <a href="./styles/docs/Resume.pdf"  target="_blank"  data-after="" id="Resume">
                <button class="btn"><i class="fa fa-download"></i> Resume</button></a> */}
        
        
        </div>

        <div class="main-bd">
            <div class="left-side">
                <div class="profile-side">
                    <p class="emial"><i class="fa fa-envelope"></i>{state?state.email:"loading.."}</p>
                </div>

                <form  className="uploads" onSubmit={onSubmit}>
                <label for="resume" class="btn"><i class="fa fa-upload"></i> Resume</label>
                <input className="resume" type="file" id="resume"  style={{visibility: "hidden", display: "none"}} onChange={onChange}/>
                <input className="btn" type="submit" />
                </form>
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
                        <button class="btn"><i class="fa fa-comment"></i>Chat</button>
                        <Link to="/createproject" ><button class="btn"><i class="fa fa-plus"></i>Create</button></Link>
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
                        {projectList}
                    </div>
                </div>
            </div>
        </div>

            </section>

    </div>


    )
}

export default MyProfile