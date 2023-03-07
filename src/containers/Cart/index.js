//tela do carrinho

import React from "react";
import Carousel from 'react-elastic-carousel'

import Header1 from "../../assets/Header 1.png"
import Header2 from '../../assets/Header 2.png'
import Header3 from '../../assets/Header 3.png'
import Header4 from '../../assets/Header 4.png'
import { CartItems, CartResume } from "../../components";
import { Container, HomeImg, Wrapper } from "./styles"

function Cart() {
    return (
        <Container>
            <Carousel enableAutoPlay autoPlaySpeed={1500} showArrows={false} >

                <HomeImg src={Header1} alt="logo da home"></HomeImg>
                <HomeImg src={Header2} alt="logo da home"></HomeImg>
                <HomeImg src={Header3} alt="logo da home"></HomeImg>
                <HomeImg src={Header4} alt="logo da home"></HomeImg>
            </Carousel>

            <Wrapper>
                <CartItems />
                <CartResume />
            </Wrapper>

        </Container>
    )
}
export default Cart