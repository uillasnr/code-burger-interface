import React from "react";
import Carousel from 'react-elastic-carousel'
import Pizza from "../../assets/Pizza PNG.png"
import ImgHambúrguer from "../../assets/ImgHambúrguer.png"
import Batata from "../../assets/Batata.png"
import Header1 from "../../assets/Header 1.png"
import Header2 from '../../assets/Header 2.png'
import Header3 from '../../assets/Header 3.png'
import Header4 from '../../assets/Header 4.png'
import { CategoryCarousel, OffersCarousel, Footer } from "../../components";
import { Container, HomeImg, ContainerHambúrguer, ContainerPizza, ContainerBatata, Line } from "./styles"

function Home() {



    return (
        <Container>
            <Line></Line>
            <Carousel enableAutoPlay autoPlaySpeed={1500} showArrows={false} >

                <HomeImg src={Header1} alt="logo da home"></HomeImg>
                <HomeImg src={Header2} alt="logo da home"></HomeImg>
                <HomeImg src={Header3} alt="logo da home"></HomeImg>
                <HomeImg src={Header4} alt="logo da home"></HomeImg>
            </Carousel>




            <h1>CATEGORIAS</h1>

            <CategoryCarousel />
            <OffersCarousel />



            <ContainerHambúrguer>
                <img src={ImgHambúrguer} alt='Imagem-Hambúrguer' />

                <p>Não passe vontade! Venha experimentar o melhor hambúrguer
                    da cidade. Feito com os melhores cortes de carne, tempero
                    especial e assado na brasa. Hamburgueria (coloque o nome),
                    a melhor opção para sua fome!</p>
            </ContainerHambúrguer>

            <ContainerPizza>
                <img src={Pizza} alt="imagem-pizza" />

                <p>Pizzas individuais abertas manualmente e assadas em forno
                    a lenha com temperatura a 450 graus,possuem massa leve,
                    fermentação natural e são produzidas com um blend de farinhas
                    italianas e tomates com denominação de origem da região do Monte
                    Vesúvio na Campania em Nápoles, são elaboradas conforme técnica
                    napoletana reconhecida como patrimônio imaterial pela UNESCO®.</p>
            </ContainerPizza>

            <ContainerBatata>

                <img src={Batata} alt='Batata-frita' />

                <p>
                    Batata frita gourmet servida em fatias finas e em porções de
                    tamanhos variados, com acompanhamentos ou não.
                    É um petisco muito saboroso e apreciado.
                </p>
            </ContainerBatata>

            <Footer>
            </Footer>

        </Container >


    )
}
export default Home