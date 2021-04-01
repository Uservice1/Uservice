import React, {useEffect,useState,useContext} from 'react';
import Navbar from '../Navbar';
import profilePic from '../../styles/images/profile.svg'
import  '../../styles/styles.css'
import {UserContext} from '../../App';
import {Link} from 'react-router-dom';
import {useParams} from 'react-router-dom'

const Chat = () =>{

    const {state,dispatch} = useContext(UserContext);
    const {id} = useParams();

    return(

        <div>
            <Navbar></Navbar>
            <section id="Chat">
                <h2>Your Chats</h2>
                <div className="Chat">
                    <div className="chat-list">
                        <div className="chat-icon">
  
                            <div className="chat-block">
                                <div className="chat-img" style={{padding:"0px"}} >
                                    <img className="profile-img" style={{height:"30px", padding:"0px", margin:"0px"}} src={profilePic}  alt="profile-img" />
                                </div>
                                <div className="chat-name" style={{paddingLeft:"20px", marginLeft:"20px"}} >
                                    <Link to="/myprofile"><h3 class="username" >User</h3></Link>
                                </div>
                            </div>
 
                            <div className="profile-option">

                            <div className="notification">
                                <span class="alert-message">1</span>
                            </div>
                        </div>
                        
                        </div>  
                    </div>
                    
                    <div className="chat-inbox">
                            <p>this is inbox</p>
                        </div>
                    </div>
            </section>
        </div>
    )
}

export default Chat;