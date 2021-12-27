import React from "react";

//children
import Header from "../header/Header";
import Members from "../members/Members";

//styling
import { Wrapper, Title} from "./style-comp";

const Home = () => {
  
  return (
    <> 
     <Wrapper>
      <Header/>
      <Title>All FaceSpace Members</Title>
      <Members/>
    </Wrapper>
    </>
  );
};

export default Home;
