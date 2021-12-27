import styled from "styled-components";
import superHeros from "../../assets/superHeros.jpg"

export const Input = styled.input`
width: 150px;
height: 40px;
border-radius: 10px;
text-align: center;
margin: auto;
display: block;
border: none;
font-size: 20px;
`


export const Label = styled.label`
display: block;
text-align: center;
font-size: 30px;
padding:40px 10px;
font-weight: bold; 
font-family: Arial, Helvetica, sans-serif;
color:white;
`

export const Title =styled.h1`
color:orange;
font-size:40px;
padding:10px;
`

export const Wrapper = styled.div`
background-image: url(${superHeros});
min-height:86.5vh;
background-size:cover;
background-repeat:no-repeat;
overflow-y:hidden;
display:flex;
justify-content:center;
align-items: center;

`

export const Container = styled.div`
background-color:rgba(43,43,43,0.5);
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
align-content: center;
margin: 0px 500px;
padding:40px;
border-radius:20px;

`

export const Button = styled.button`
display:block;
margin:auto;
margin-top:20px;
padding: 30px 10px;
border-radius: 50px;
background-color: red;
font-size: 20px;
font-weight: bold;


`