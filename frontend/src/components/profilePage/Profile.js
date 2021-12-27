import React, {useContext} from "react";
import { useParams } from "react-router";

import { CurrentMembersContext } from "../CurrentMembersContext";

import Header from "../header/Header";
import Friends from "../friends/Friends"


//styling
import {Img, Banner, Para, FriendsWrapper} from "./style-comp"


//-------------Profile-----------

const Profile = () =>{
 
const{currentMembers}= useContext(CurrentMembersContext);

const{id} = useParams();

// console.log(id)

let user = currentMembers.filter((user)=>{
return(id===user._id)
})




// currentMembers.filter((friends)=>{
// return 
// })
// user[0].friends.forEach(element => {
//      if(element===user.id){

//         console.log(element)
//      }
//  });

let friend =[];

// console.log(user)
if (user.length>0){
let friendsList= user[0].friends;

friendsList.forEach((id)=>{
currentMembers.filter((user)=>{
if(id === user._id){
friend.push(user) }
})
    
})

// console.log(friend)
return( 
<>
<Header/>
<Banner>
</Banner>
<Img src={`${user[0].avatarUrl}`}/>
<Para>{user[0].name}</Para>
<FriendsWrapper>
{friend.map((friendsArr)=>{ return(
    <Friends  key ={friendsArr._id} friendsArr = {friendsArr} />)
})}
</FriendsWrapper>

</>
)

}

else{
    return(
    <div>
        Loading
    </div>
    )
}



}

export default Profile;