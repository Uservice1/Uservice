import {useEffect,createContext,useReducer} from 'react'
import { Route, useHistory} from 'react-router-dom'

import Signup from './components/Auth/Signup'
import Signin from './components/Auth/Singin'
import Navbar from './components/Navbar'
import Home from './components/Home';
import MyProfile from './components/user/MyProfile'
import UserProfile from './components/user/UserProfile'
import UpdateProfile from './components/user/UpdateProfile'
import CreateProject from './components/Project/CreateProject'
import Discover from './components/Discover'
import Contact from './components/Contact'
import Project from './components/Project/Project'
import {reducer,initialState} from './reducers/userReducer'

export const UserContext = createContext()

function App() {

  const history = useHistory()


  useEffect(()=>{
    const user =JSON.parse(localStorage.getItem("user"))
    console.log("User: ",user)
    if(user)
    {
      dispatch({type:"USER",payload:user})
    }
    else
    {
      
    }
  },[])

  const [state,dispatch] = useReducer(reducer,initialState)
  return (



    <UserContext.Provider value={{state,dispatch}} >
    
      <div className="App">
      <Route exact path="/" >
        <Home />
      </Route>

      <Route exact path="/updateprofile" >
        <UpdateProfile />
      </Route>

      <Route exact path="/contact" >
        <Contact />
      </Route>

      <Route exact path="/Nav" >
        <Navbar />
      </Route>

      <Route path="/signup">
        <Signup />
      </Route>

      <Route path="/signin">
        <Signin />
      </Route>

      <Route path="/myprofile">
        <MyProfile />
      </Route>

      <Route path="/userprofile">
        <UserProfile />
      </Route>

      <Route exact path="/createproject" >
        <CreateProject />
      </Route>

      <Route exact path="/project/:id" >
        <Project />
      </Route>

      <Route exact path="/discover" >
        <Discover />
      </Route>

      <Route exact path="/updateprofile" >
        <UpdateProfile />
      </Route>
      
<<<<<<< HEAD
      <Route path='/project'>
        <Project />
      </Route>
  
=======
>>>>>>> 9980aafce3327d60c3edbd3aec18742f62bd3bc4
      </div>

      </UserContext.Provider>
  );
}

export default App;
