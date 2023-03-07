import styled from "styled-components";
import background from "../../assets/background.png"

export const Container = styled.div`
width: 100vw;
height: 100vh;
background-image: url(${background});

display: flex;
justify-content: center;
align-items: center;


`;

export const LoginImage = styled.img`
height: 75%;
border-radius: 10px;
box-shadow: 14px 14px 14px rgba(0, 0, 0, 0.25);


`;
export const ContainerItens = styled.div`
background: #494949;
border-radius: 0 10px 10px 0;
height: 65%;
box-shadow: 14px 14px 14px rgba(0, 0, 0, 0.25);
border-radius: 37px;
padding: 25px 75px;
display: flex;
flex-direction: column;
justify-content: center;
margin-left: -45px;
border-radius: 10px;
form {
    display: flex;
    flex-direction: column;
}
img{
    width: 30%;
    margin-left: 96px;
    margin-top: -55px;
    
}

h1{
    font-style: normal;
    font-weight: 500px;
    font-size: 24px;
    line-height: 28px;
    color: white;
    text-align: center;
    margin-top: 15px;
}
`;


export const ButtonLogin = styled.button`
    width: 280px;
    height: 36.13px;
    background: #36E73D;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    color: #2c2b2b;
    margin-top: 40px;
    

 &:hover {
    opacity:  0.8;
}
&:active {
opacity: 0.6;
}


`

export const Label = styled.p`
font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 14px;
color: white;
margin-top: 10px;
margin-bottom: 5px;

`

export const Input = styled.input`
width: 280px;
height: 38.32px;
background: #ffffff;
box-shadow: 3px 3px 10px rgba(74, 144, 226,0.19);
border-radius: 5px;
border: ${props => (props.error ? ' 2px solid #cc1717' : 'none')};
padding-left: 10px;
`



export const SignInLink = styled.p`
font-style: normal;
    font-weight: 300;
    font-size: 10px;
    line-height: 16px;
    color: #FFFFFF;
    margin-left: 142px;

 a { 
    cursor: pointer;
    text-decoration: underline;
}

`

