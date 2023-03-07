import styled from "styled-components";
import background from "../../assets/background.png"


export const Container = styled.div`
min-height: calc(100vh - 72px);


background-image: url(${background});
mix-blend-mode: luminosity;
backdrop-filter: blur(100px);
background-attachment: fixed;
background-size: cover;

button.rec-dot{
   display: none;

}
`

export const ProdutsImg = styled.img`
width: 100%;
padding: 20px;
`

export const CategoryButton = styled.button`
cursor: pointer;
background: none;
border: none;
border-bottom:  ${props => props.isActiveCategory && '2px solid #36E73D'};
color: ${props => (props.isActiveCategory ? '#36E73D' : '#fff')};
font-size: 17px;
line-height:20px ;
padding-bottom: 5px;

`
export const CategoriesMenu = styled.div`
display: flex;
justify-content: center;
gap: 50px;
margin-top: 20px;

`
export const ProductsContainer = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
gap: 10px;
padding: 40px;
justify-items: center;
margin-top: 20px;
`


export const HomeImg = styled.img`
width: 100%;
margin: 15px;
`