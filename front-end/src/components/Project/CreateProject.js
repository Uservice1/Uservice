import {useEffect, useContext,useState} from 'react'
import {useHistory, Link} from 'react-router-dom'
import {UserContext} from '../../App'
import Navbar from '../Navbar'



function CreateProject() {


    const [categories,setCategories] = useState([])

    const [title,setTitle] = useState('')
    const [description,setDescription] = useState('')

    const [image,setImage] = useState('')
    const [imageURL,setImageURL] = useState('')

    const [authorId,setAuthorId] = useState()

    const {state,dispatch}= useContext(UserContext)   

    useEffect(() => {
        if(state)
        console.log("State: ",state)
    }, [])
    
    const publishProject = () =>{
        console.log("Title: ",title)
        console.log("Description: ",description)
        console.log("Image: ",imageURL)

        fetch('/publishproject',{
            method:"post",
            headers: {
                "Authorization": "Bearer "+localStorage.getItem("jwt"),
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                title:title,
                projectDescription:description,
                projectThumbnail:imageURL,
                categories:categories
            })
        })
        .then((res)=>res.json())
        .then((res)=>{
            console.log(res)
        })
    }   

    useEffect(() => {
        if(image)
        {
        const data = new FormData()
        data.append('file', image)
        data.append('upload_preset','Uservice')
        data.append('cloud-name','dkzqxbqor')
        
        fetch('https://api.cloudinary.com/v1_1/dkzqxbqor/image/upload',{
            method:"post",
            body:data
            }
            )
            .then((res)=>res.json())
            .then((data)=>{
            console.log(data.url)
            setImageURL(data.url)
        })
        .catch((err)=>{
            console.log("error: ",err)
        })
        }
        
    }, [image])

    const uploadImage = (e,file)=>{
        
        e.preventDefault()
        setImage(file[0])
    }
    
    const submitCategories = (e)=>{
        e.preventDefault()
        console.log("categories: ",categories)
    }

    const addCategories = (e)=>{ 
        console.log("addCategories",e.target.value)
        categories.push(e.target.value)
    
    }

    

    return (
        <div>
            <Navbar />
            <section id="project-creation" >
        <h2>Create Project</h2>
        <br /><br/>
        <div class="create-posts">

            <div class="upper-side">

                <div class="project-info">
                    <form>
                        <div class="input-fields">
                            <i class="fa fa-header"></i>
                            <input placeholder="Title" type="text"  onChange={(e)=>{setTitle(e.target.value)}} />
                        </div>
                        <div class="input-fields">
                            <i class="fas fas fa-pen"></i>
                            <textarea placeholder="Description" type="text" onChange={(e)=>{setDescription(e.target.value)}} ></textarea> 
                        </div>
                    </form>
                </div>

                <div class="project-post">
                    <form class="post-img">
                        <label for="project-img" class="btn"><i class="fa fa-upload"></i>Upload Image</label>
                        <input id="project-img" class="project-img" type="file" placeholder="image" style={{visibility: "hidden;", display: "none;"}} onChange={(e)=>{uploadImage(e,e.target.files)} } /> 
                    </form>
                </div>
            </div>
 
            <div class="lower-side">
                <h4>Tags</h4>
                <form onSubmit = {(e)=>{submitCategories(e)}}>
                    <div class="check-boxes">
                    <div class="check">
                        <input class="check-box " type="checkbox" value="web development" onChange = {(e)=>{addCategories(e)}} />
                        <label for="vehicle1"> Web Development</label><br/>
                    </div>
    
                    <div class="check">
                        <input class="check-box" type="checkbox" value="content creating" onChange = {(e)=>{addCategories(e)}} />
                        <label for="vehicle2"> Content Creating</label><br/>
                    </div>    
    
     
                    <div class="check">
                        <input class="check-box" type="checkbox" value="graphic design" onChange = {(e)=>{addCategories(e)}} />
                        <label for="vehicle3"> Graphic Design</label><br/>
                    </div>
    
        
                    <div class="check">
                        <input class="check-box" type="checkbox" value="user interface" onChange = {(e)=>{addCategories(e)}} />
                        <label for="vehicle3"> UI/UX</label><br/>
                    </div>
    
                    <div class="check">                
                        <input class="check-box" type="checkbox"  value="photography" onChange = {(e)=>{addCategories(e)}} />
                        <label for="vehicle3"> Photography</label><br/><br/>
                    </div>
                    </div>

                </form> 
            </div>
    
            <button class="btn" onClick={publishProject}>Publish Project</button>
    
        </div>

    </section>
            
        </div>
    )
}

export default CreateProject
