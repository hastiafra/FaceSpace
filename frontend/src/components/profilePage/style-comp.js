import styled from "styled-components";
import city from "../../assets/city.jpg";
import { Link } from "react-router-dom";


export const FriendsWrapper =styled(Link)`
display:flex;
justify-content: space-evenly;
position:absolute;
width:100%;
top:450px;
cursor:pointer;
`



export const Banner = styled.div`
background-image: url(${city});
min-height:86.5vh;
margin-top:0px;
position:relative;
opacity:0.7;

`


export const Img = styled.img`
width:250px;
border-radius: 50%;
display: block;
margin: auto;
margin-top: 100px;
position:absolute;
top: 20px;
left: 600px;
box-shadow: 
0 0 7px #fff,
0 0 10px #fff,
0 0 21px #fff,
0 0 42px #0fa,
0 0 82px #ffffff, 
0 0 92px #ffffff, 
0 0 102px #ffffff, 
0 0 151px #000000;  

` 


export const Para =styled.h1`
top: 240px;
right: 250px;
position:absolute;
color: black;
font-size: 70px;
text-shadow:-10px 10px 0px #00e6e6,
-20px 20px 0px #01cccc,
-30px 30px 0px #00bdbd;


`