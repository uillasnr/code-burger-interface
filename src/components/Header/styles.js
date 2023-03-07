import styled from "styled-components";
import background from "../../assets/background.png"

export const Container = styled.div`

background-image: url(${background});
mix-blend-mode: luminosity;
backdrop-filter: blur(100px);
background-attachment: fixed;
background-size: cover;


height: 72px;
margin-bottom: 0.5px;
background-color: #ffffff;
/* background: #42454E; */
display: flex;
align-items: center;
flex-direction: row;
justify-content: space-around;
`
export const ContainerLeft = styled.div`
margin-left: -360px;
display: flex;
gap: 30px;


`
export const Img = styled.img`
width: 5%;
`
export const PageLink = styled.div`
cursor: pointer;
text-decoration: none;
color: ${props => (props.isActive ? '#36E73D' : '#fff')};
font-size: 16px;
line-height: 19px;
font-weight: bold;

`
export const ContainerRight = styled.div`

img{
    width: 30px;
}
display: flex;
align-items: center;
gap: 20px;
`
export const Line = styled.div`
height: 40px;
border: 0.5px solid #d5d5d5;
`


export const ContainerText = styled.div`
P{
    font-style: normal;
    font-weight: 300px;
    font-size: 14px;
    line-height: 16px;
    color: #fff;
}
`
export const PageLinkExit = styled.div`
font-style: normal;
font-weight: bold;
font-size: 14px;
line-height: 16px;
display: flex;
align-items: center;
cursor: pointer;
color: ${props => (props.isActive ? '#36E73D' : '#fff')};
`
