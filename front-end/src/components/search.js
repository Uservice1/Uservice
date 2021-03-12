import {useEffect, useContext}  from 'react'
import '../styles/styles.css'
import {Link} from 'react-router-dom'
import {useHistory} from 'react-router-dom'
import {UserContext} from '../App'

const Searchbar = ()=>{
    return(
        <div class="search-box" style={{position:"relative", display:"block"}}>
        <form action="./Discover" method="POST" class="search" >        
            <input type="text" name="search" placeholder="Search..." />
            <button class="btn" type="submit" style={{right:"400px"}}><i class="fa fa-search"></i></button>
        </form>
    </div>
    )
}

export default Searchbar