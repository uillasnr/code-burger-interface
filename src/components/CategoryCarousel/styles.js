import styled from "styled-components";

import { Link } from "react-router-dom";
import background from "../../assets/background.png"



export const Container = styled.div`
background-image: url(${background});
mix-blend-mode: luminosity;
backdrop-filter: blur(100px);
background-attachment: fixed;
background-size: cover;


background-color:   #fff;
display: flex;
flex-direction: column;
align-items: center;
gap: 35px;


margin-left: 337px;
display: -webkit-box;

@media (max-width: 1250px) {
    display: flex;
    flex-direction: inherit;
    align-items: center;
    justify-content: center;
    margin-left: 100px;
}
`
export const ContainerItems = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

`

export const Image = styled.img`
width: 120px;
    border-radius: 10px;
    padding: 10px;
 
`

export const Button = styled(Link)`
margin-top: 16px;
background: none;
cursor: pointer;
border-radius: 8px;
height: 50px;
border: none;
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 100%;
text-align: center;
color: #FFFFFF;

&:hover{
    opacity: 0.8; 
    
    
}
 &:active{
    opacity: 0.6;
} 

text-decoration: none;
display: flex;
align-items: center;
justify-content: center;

`
