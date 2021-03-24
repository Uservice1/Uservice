import {useState, useEffect, useContext} from 'react'
import Navbar from './Navbar'
import {UserContext} from '../App'
import {Link} from 'react-router-dom'
import Searchbar from './search'
import one from '../styles/images/1.jpg'
import two from '../styles/images/2.jpg'
import three from '../styles/images/5.png'
import four from '../styles/images/4.jpg'
import graphic from '../styles/images/55.jpg'
import profile from '../styles/images/profile.svg';


function Discover() {
    const [projects,setProjects] = useState([])

    const {state} = useContext(UserContext)
    const user =JSON.parse(localStorage.getItem("user"))

    useEffect(() => {
        console.log("Discover: ",user)
        fetch('/discoverprojects',{
            method:"post",
            headers:{
                "Authorization": "Bearer "+localStorage.getItem("jwt"),
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                user:user.userName
            })
        })
        .then((res)=>res.json())
        .then((res)=>{
            setProjects(res.projects)
            
        })

        
        
    }, [])

    const projectList = projects.map((project) =>{
        return( 
    <div class="posts">
        <div class="small-container">
            <div class="row">
                <div class="col-3">
                            <Link class="project"  to={"/project/"+project.projectId} >
                                <div class="project-post">
                                    <div class="project-img">
                                        <img class="project-img" src={project.projectThumbnail} alt="" width="400px" style={{margin:"0px"}}/>
                                    </div>
                                    <div class="project-content">
                                        <h2 class="project-title" style={{fontSize: "1.2rem", position:"relative"}}>{project.title}</h2>
                                    </div>
                                </div>
                            <div class="project-header">
                                    <div class="profile-img">
                                        <img src={profile} alt="" class="profile-image" style={{width: "24px", height: "24px"}} />
                                    </div>
                                    <div class="profile-nav-info">
                                        <h2 class="username" style={{fontSize: "1rem", fontWeight: "500", padding: "none"}}>{project.author}</h2>
                                    </div>
                            </div>
{/*                             <div class="project-ratings" style={{justifyContent: "right", textAlign: "right", alignItems: "right", width: "100%", padding:"2px 2px"}}>
                                <span class="ratings" style={{fontSize: ".8rem", color: "gray", fontWeight: "500"}}><i class="fa fa-star" style={{color: "#7e27cf", fontSize: "1rem", fontWeight: "600", marginRight: "4px"}}></i>&nbsp;0</span>
                                <span class="project-reviews" style={{fontSize: ".8rem", color: "gray", fontWeight: "500"}}>&nbsp;<i class="fa fa-eye" style={{color: "#7e27cf", fontSize: "1rem", fontWeight: "600", marginRight: "4px"}}></i>&nbsp;21</span>
                                <span class="project-likes" style={{fontSize: ".8rem", color: "gray", fontWeight: "500"}}>&nbsp;<i class="fa fa-heart-o" style={{color: "#7e27cf", fontSize: "1rem", fontWeight: "600", marginRight: "4px"}}></i>&nbsp;2.4k</span>
                            </div> */}
                        </Link>
                        
                        
                </div>
                </div>
            </div>
        </div>
        
        )
    })

    useEffect(() => {
        console.log("Projects: ",projects)
        
    }, [projects])


    return (
        <div>
            <Navbar />
{/*             <div class="categories">
        <div class="small-container">
            <div class="row">
                <div class="col-3">
                    <Link to="./Discover" class=""><img  src={one} alt=""/><h4>Photography</h4></Link>

                </div>
                <div class="col-3">
                    <Link to="./Discover" class=""> <img src={two} alt=""/><h4>Graphic Design</h4></Link>
                   
                </div>
                <div class="col-3">
                    <Link to="./Discover" class=""><img  src={four} alt=""/><h4>Art & Illustrations</h4></Link>
                    
                </div>
                <div class="col-3">
                    <Link to="./Discover" class=""> <img src={three} alt=""/><h4>Development</h4></Link>

                </div>
            </div>
        </div>
    </div> */}

    <div class="categories">
                <div class="small-container">
                    <div class="row">
                        {projectList}
                   </div>
            
                </div> 
         </div>

{/*     <Searchbar></Searchbar>   */}

    <div class="foot" style={{position:"absolute", top:"610px", width:"100%"}}>
        <p>All &copy; USERVICE | Designed & Developed by Vishal Rathore, Usman Hussain & Hussain Zohair</p>
    </div>
    </div>
    )
}

export default Discover