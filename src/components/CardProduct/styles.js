import styled from "styled-components";

export const Container = styled.div`
background: rgb(119 122 143 / 53%);
filter: drop-shadow(5px 5px 5px rgba(0,0,0,1.9));
box-shadow: 0px 30px 60px rgba(57, 57, 57, 0.1);
border-radius: 30px;
display: flex;
gap: 12px;
padding: 10px;
width: max-content;

div{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
button.rec-dot{
   display: none;

}
`

export const Image = styled.img`
width: 150px;
border-radius: 10px;
`
export const ProductName = styled.p`
font-style: normal;
font-weight: normal;
font-size: 1.2rem;
line-height: 19px;
color: #fff;
`
export const ProductPrice = styled.p`
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 21px;
color: #fff;

`
export const Description = styled.p`
color: #fff;
    width: 172px;
    margin: 10px 0px;
    font-size: 0.8rem;
    text-align: inherit;
`