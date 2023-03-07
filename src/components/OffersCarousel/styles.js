import styled from "styled-components";
import background from "../../assets/background.png"

import card from '../../assets/CARD.png'

export const Container = styled.div`
background-image: url(${background});
/* mix-blend-mode: luminosity; */
backdrop-filter: blur(100px);
background-attachment: fixed;
background-size: cover;


background-color:  #fff;
display: flex;
/* background: #42454E; */
flex-direction: column;
align-items: center;
gap: 35px;
padding: 35px 0;



h1{
    margin-top: -20px;
    color: #fff;
    font-style: normal;
    font-weight: 900;
    font-size: 50px;
    line-height: 109px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.rec.rec-arrow{
    background-color:#36E73D;
    color: #efefef;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    border: none;
}
.rec.rec-arrow:hover{
    border: 2px solid #36E73D;
    background-color: #efefef;
    color: #36E73D;
}
.rec.rec-arrow:disabled{
    border: none;
    background-color: #bebebf;
    color: #efefef;
}
button.rec-dot{
    display: none;

}
`

export const ContainerItems = styled.div`
display: flex;
flex-direction: column;
background:rgb(119 122 143 / 53%);
border-radius: 10px;
filter: drop-shadow(5px 5px 5px rgba(0,0,0,1.9));

/*  background-image: url(${card});  */

h2{
    font-style: normal;
font-weight: 700;
font-size: 0.9rem;
line-height: 120%;
color: #fff;
display: flex;
    justify-content: center;
    margin: -10px 10px 10px 10px

}
 p{
    font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 120%;
color: #fff;
 display: flex;
    justify-content: center; 
    margin-top: 10px;

} 
h3{
    font-size: 10px;
    color: #fff;
    width: 200px;
    height: 35px;
    align-items: center;
    display: flex;
    justify-content: center;
  
    text-align: center;
}
`

export const Image = styled.img`
width: 200px;
padding: 15%;
/* border-radius: 10px;
margin-bottom: 16px; */
`

export const ButtonOffers = styled.button`
margin-top: 10px;
    background:  #36E73D;
    cursor: pointer;
    border-radius: 8px;
    height: 40px;
    width: 115px;
    border: none;
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 100%;
    text-align: center;
    color:  #2c2b2b;
    justify-content: center;
    display: flex;
    align-items: center;
    margin-left: 43px;
    /* margin: 10px; */
    margin-bottom: 10px;

&:hover{
    opacity: 0.8;
}
&:active{
    opacity: 0.6;
} 

`
