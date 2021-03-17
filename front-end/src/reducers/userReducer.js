export const initialState = null

export const reducer = (state,action) =>{
    if(action.type==="USER")
    {
        return action.payload
    }
    else if(action.type==="ADD_USER_DET")
    {
        return {...state, user: {...state,...action.payload}}
    }
    else if(action.type==="ADD_USER_PROFILE_PIC")
    {   
        console.log("ADD_USER_PROFILE_PIC");
        return {...state, user:{...state,...action.payload}}
    }
    else if(action.type==="CLEAR")
     {
         return null
     }
    
    return state
}