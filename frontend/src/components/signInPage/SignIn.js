import React, { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";

import { SignedInUserContext } from "../SignedInUserContext";

import Header from "../header/Header";

//styling
import { Wrapper, Container, Button, Title, Label, Input} from "./style-comp";


const SignIn = () => {

let history = useHistory();




const {signedInUser, setSignedInUser} = useContext(SignedInUserContext); 

useEffect(() => {
    if (signedInUser?.name){
        history.push("/");
    }
   
}, [])
// console.log(signedInUser)

// let signedUser = sessionStorage.getItem("member");

  const [userName, setUserName] = useState("");

  const handleSubmit = (ev) => {
    ev.preventDefault();
// we only gonna fetch data, when form is submitted 

    fetch ("/api/signIn",{
        method:"POST", 
        headers:{
         "Content-Type": "application/json",
         "Accept": "application/json",
        },
        body : JSON.stringify({ member : userName })
   //the key member in frontend has to match the backend 
       })
       .then((res)=>res.json())
       .then((data)=>{
        console.log(data.data)
           if(data.status==="error"){
             window.alert(data.msg)
           }
           else{
             window.sessionStorage.setItem("member", JSON.stringify(data.data)); 
             setSignedInUser(data.data);
             history.push("/");
           }
       })
  };




  const getName = (ev) => {
   setUserName(ev.target.value);
  };

  return (
    <>
      <Header signIn={true}/>
      <Wrapper>
        <Container>
        <Title>sign in </Title>

        <form onSubmit={handleSubmit}>
          <Label>Superhero Name</Label>
          <Input type="text" onChange={getName} value={userName}/>
          <Button type="submit">Submit</Button>
        </form>
        </Container>
      </Wrapper>
    </>
  );
};

export default SignIn;
