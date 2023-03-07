import React, { useEffect, useState } from "react";
import Carrousel from 'react-elastic-carousel'

import api from "../../services/api"
import { useHistory } from "react-router-dom";

import { useCart } from '../../hooks/CartContext'
import formatCurrency from "../../utils/formatCurrency";
import { Container, ContainerItems, Image, ButtonOffers } from "./styles"

export function OffersCarousel() {
    const [offers, setOffers] = useState([])
    const { putProductInCart } = useCart()
    const { push } = useHistory()



    useEffect(() => {
        async function loadOffers() {
            const { data } = await api.get('products')


            //vai filtrar os produtos que estao em oferta
            const onlyOffers = data.filter(product => product.offer)
                //formatar valores
                .map(product => {
                    return { ...product, formatedPrice: formatCurrency(product.price) }
                })


            setOffers(onlyOffers)
        }

        loadOffers()

    }, [])

    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 400, itemsToShow: 2 },
        { width: 600, itemsToShow: 3 },
        { width: 900, itemsToShow: 4 },
        { width: 1300, itemsToShow: 5 }
      ]




    return (
        <Container>
       
            <h1>OFERTAS</h1>

            <Carrousel  itemsToShow={5} style={{ width: '90%' }} breakPoints={breakPoints} >
                {offers &&
                    offers.map(product => (

                        <ContainerItems key={product.id}>
                            <Image src={product.url} alt="foto do Produto" />
                            <h2>{product.name}</h2>
                            <h3>{product.description}</h3>
                            <p>{product.formatedPrice}</p>

                            <ButtonOffers onClick={() => {
                                putProductInCart(product)
                                push('/carrinho')
                            }}>Peça agora</ButtonOffers>
                        </ContainerItems>
                    ))}
            </Carrousel>

        </Container>
    )
}
