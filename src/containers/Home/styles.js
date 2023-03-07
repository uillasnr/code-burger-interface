import styled from "styled-components";


import background from "../../assets/background.png"
export const Line = styled.div`

border: 0.5px solid #d5d5d5;
`

export const Container = styled.div`

 //background:  #42454E;
background-image: url(${background});
mix-blend-mode: luminosity;
backdrop-filter: blur(100px);
background-attachment: fixed;
background-size: cover;

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

button.rec-dot{
   display: none;

}

button.rec-dot:hover, button.rec-dot:active, button.rec-dot:focus  {
  box-shadow: 0 0 1px 3px rgba(235,16,16,0.5);
}
`

export const HomeImg = styled.img`
width: 100%;
margin: 15px;

`

export const ContainerHambúrguer = styled.div`
margin-top: 100px;
p{
    width: 500px;
    text-align: inherit;
    margin-left: 635px;
    margin-top: -280px;
    color: #fff;
}
img{
    width: 40%;
 margin-left: 100px;  
 filter: drop-shadow(0px 50px 200px rgba(255, 255, 255, 0.5));
}
@media (max-width: 1145px) {
    p{
        margin-left: 535px;
        margin-top: -230px;
    }
}
@media (max-width: 1052px) {
    p{
        margin-left: 480px;
        margin-top: -230px;
    }
    img{
        margin-left: 50px;
    }
}
@media (max-width: 980px) {
    p{
        margin-left: 430px;
        margin-top: -230px;
    }
    img{
        margin-left: -5px;
    }
}
@media (max-width: 930px) {
    p{
        margin-left: 365px;
        margin-top: -230px;
    }
    img{
        margin-left: -5px;
    }
}
@media (max-width: 865px) {
    p{
        margin-left: 305px;
        margin-top: -200px;
    }
    img{
        margin-left: -5px;
    }
}
@media (max-width: 800px) {
    p{
        margin-left: 255px;
        margin-top: -200px;
    }
    img{
        margin-left: -38px;
    }
}
@media (max-width: 750px) {
    p{
        margin-left: 215px;
    margin-top: -178px;
    }
    img{
        margin-left: -38px;
    }
}
@media (max-width: 710px) {
    p{
        margin-left: 190px;
    margin-top: -170px;
    }
    img{
        margin-left: -45px;
    }
}
`


export const ContainerPizza = styled.div`
margin-top: 100px;
p{
    width: 500px;
    text-align: inherit;
    margin-left: 100px;
    margin-top: -345px;
    color: #fff;
}
img{
    width: 40%;
    margin-left: 660px;
}

@media (max-width: 1145px) {
    img{
        margin-left: 620px;
    }
    p{
        margin-top: -290px;
    }
}

@media (max-width: 1052px) {
    p{
        margin-left: px;
        margin-top: px;
    }
    img{
        margin-left: px;
    }
}
@media (max-width: 980px) {
    p{
        margin-left: px;
        margin-top: px;
    }
    img{
        margin-left: 560px;
    }
}
@media (max-width: 930px) {
    p{
        margin-left: 50px;
        margin-top: -250px;
    }
    img{
        margin-left: 575px;
    }
}
@media (max-width: 865px) {
    p{
        margin-left: px;
        margin-top: px;
    }
    img{
        margin-left: 525px;
    }
}
@media (max-width: 800px) {
    p{
        margin-left: 35px;
    margin-top: -230px;
    }
    img{
        margin-left: 485px;
    }
}
@media (max-width: 750px) {
    p{
        margin-left: px;
    margin-top: px;
    }
    img{
        margin-left: px;
    }
}
@media (max-width: 710px) {
    p{
        margin-left: 15px;
    margin-top: -210px;
    }
    img{
        margin-left: 460px;
    }
}
`
export const ContainerBatata = styled.div`
margin-top: 100px;
p{
    width: 500px;
    text-align: inherit;
    margin-left: 600px;
    margin-top: -280px;
    color: #fff;
}
img{
    width: 35%;
 margin-left: 100px;  
}
@media (max-width: 1145px) {
    p{
        margin-left: 535px;
        margin-top: -230px;
    }
}
@media (max-width: 1052px) {
    p{
        margin-left: 480px;
        margin-top: -230px;
    }
    img{
        margin-left: 50px;
    }
}
@media (max-width: 980px) {
    p{
        margin-left: 430px;
        margin-top: -230px;
    }
    img{
        margin-left: -5px;
    }
}
@media (max-width: 930px) {
    p{
        margin-left: 365px;
        margin-top: -230px;
    }
    img{
        margin-left: -5px;
    }
}
@media (max-width: 865px) {
    p{
        margin-left: 305px;
        margin-top: -200px;
    }
    img{
        margin-left: -5px;
    }
}
@media (max-width: 800px) {
    p{
        margin-left: 255px;
        margin-top: -200px;
    }
    img{
        margin-left: -38px;
    }
}
@media (max-width: 750px) {
    p{
        margin-left: 215px;
    margin-top: -178px;
    }
    img{
        margin-left: -38px;
    }
}
@media (max-width: 710px) {
    p{
        margin-left: 190px;
    margin-top: -170px;
    }
    img{
        margin-left: -45px;
    }
}

`


