import styled from "styled-components";
import { Link } from "react-router-dom";




export const Title = styled.h1`
padding-right:100px;
font-size: 30px;
color:#2d3dff;
`

export const Container= styled.div`

background : orange;
display:flex;
justify-content:space-between;
height:100px;
align-items: center;
box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;

`

export const Logo =  styled.h1`
display:inline-block;
padding:15px;
margin-left:100px;
font-size:40px;
`

export const LinkPage = styled(Link)`
padding:15px;
margin-right:100px;
background:none;
border:none;
color:white;
font-weight:bold;
font-size:25px;
cursor:pointer;
text-decoration:none;
font-family: Arial, Helvetica, sans-serif;

transition: 500ms ease;

&:hover{
    color:#2d3dff;
    font-size:30px;
}

`


