import React from "react";
import { useHistory } from "react-router";



//styling
import {Wrapper, Img} from "./style-comp"


const Friends = ({friendsArr})=>{


let profile = useHistory()

const{avatarUrl, _id} = friendsArr;


    return(
        <>
        <Img src={`${avatarUrl}`}
        onClick={()=>{profile.push(`/profile/${_id}`)}} />
        </>
    )
}


export default Friends