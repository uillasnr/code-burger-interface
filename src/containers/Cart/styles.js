import styled from "styled-components";
import background from "../../assets/background.png"

export const Container = styled.div`
background-image: url(${background});
mix-blend-mode: luminosity;
backdrop-filter: blur(100px);
background-attachment: fixed;
background-size: cover;

min-height: calc(100vh - 72px);

button.rec-dot{
   display: none;

}
`

export const CartImg = styled.img`
width: 100%;
`

export const CartItems = styled.img``

export const Wrapper = styled.div`
display: flex;
justify-content: space-evenly;
margin-top: 30px;
padding-bottom: 30px;
`
export const HomeImg = styled.img`
width: 100%;
margin: 15px;
`