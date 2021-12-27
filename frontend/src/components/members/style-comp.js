import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
display:flex;
justify-content:space-around;
flex-wrap:wrap;
margin:10px;

`

export const Img = styled.img`
width:200px;
padding:0 px;

transition: 400ms ease;

&:hover{
   box-shadow: 
0 0 7px #fff,
0 0 10px #fff,
0 0 21px #fff,
0 0 42px #0fa,
0 0 82px #000fff,
0 0 92px #0800ff,
0 0 102px  #0014ff,
0 0 151px #0400ff;  
}

`

export const ImgSignedUser = styled.img`
width:200px;
padding:0 px;
box-shadow: 
0 0 7px #fff,
0 0 10px #fff,
0 0 21px #fff,
0 0 10px #0fa,
0 0 15px #000fff,
0 0 15px #0800ff,
0 0 20px  #0014ff,
0 0 20px #0400ff;  
}

`


export const ImgFriends = styled.img`
width:200px;
padding:0 px;
box-shadow: 
0 0 7px #fff,
0 0 10px #fff,
0 0 21px #fff,
0 0 10px #f00,
0 0 15px #f00,
0 0 15px #f00,
0 0 20px  #f00,
0 0 20px #f00;  
}

`



export const Button = styled(Link)`
background:none;
border:none;
cursor:pointer;
padding:5px;

`

