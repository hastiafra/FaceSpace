import React, { useContext } from "react";
import { CurrentMembersContext } from "../CurrentMembersContext";
import { SignedInUserContext } from "../SignedInUserContext";

//styling
import { Wrapper, Img, Button, ImgSignedUser, ImgFriends } from "./style-comp";

const Members = () => {
  const { currentMembers } = useContext(CurrentMembersContext);

  const { signedInUser } = useContext(SignedInUserContext);




  console.log(signedInUser)

  

  return (
    <Wrapper>
      {currentMembers.map((user) => {
      
        
        // console.log(friendsList)

        // let checkFriends = friendsList.find((friend)=>{ console.log(friend._id)

        // })

        // console.log(friendsList)
        if (user.name === signedInUser?.name) {
            // console.log(id)
          return (
            <Button key={user._id} to={`/profile/${user._id}`}>
        <ImgSignedUser src={`${user.avatarUrl}`} /> 
              
            </Button>
          )
        } 

    
        else if(signedInUser?.friends.includes(user._id)){
          return (
            <Button key={user._id} to={`/profile/${user._id}`}>
        <ImgFriends src={`${user.avatarUrl}`} /> 
              
            </Button>
          );
        }
        
        else {
          return (
            <Button key={user._id} to={`/profile/${user._id}`}>
              <Img src={`${user.avatarUrl}`} />
            </Button>
          );
        }
      })}
    </Wrapper>
  );
};

export default Members;
