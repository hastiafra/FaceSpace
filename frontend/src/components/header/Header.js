import React, {useContext} from "react";
import {SignedInUserContext} from "../SignedInUserContext"

//styling
import { Container, Logo, LinkPage, Title } from "./style-comp";

const Header = ({ signIn }) => {

  const {signedInUser} = useContext(SignedInUserContext); 

  // console.log(signedUser)
  if (signedInUser) {
    return (
      <Container>
        <Logo>FaceSpace</Logo>
        <Title>Hello {signedInUser.name}!</Title>
      </Container>
    );
  } else if (signIn === true) {
    return (
      <Container>
        <Logo>FaceSpace</Logo>
        <LinkPage to={"/"}>Home Page</LinkPage>
      </Container>
    );
  } else {
    return (
      <Container>
        <Logo>FaceSpace</Logo>
        <LinkPage to={"/signIn"}>Sign In</LinkPage>
      </Container>
    );
  }

  // return (
  //   <Container>
  //     <Logo>FaceSpace</Logo>
  //     {/* {signedUser? <Title>Hello { signedUser}!</Title> : <SignIn to={"/SignIn"}>Sign In</SignIn> } */}

  //   </Container>
  // );
};

export default Header;
