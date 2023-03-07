//card tela de produtos

import React from "react";

import PropTypes from 'prop-types'
import { useCart } from "../../hooks/CartContext";
import { Container, Image, ProductName, ProductPrice, Description } from './styles'
import { Button } from "../Button"
import { useHistory } from "react-router-dom";

export function CardProduct({ product }) {
  const { putProductInCart } = useCart()
  const { push } = useHistory()




  // definir o máximo de caracteres permitidos na descrição
  const MAX_DESCRIPTION_LENGTH = 50;

  function limitarDescricao(descricao) {
    if (descricao.length <= MAX_DESCRIPTION_LENGTH) {
      return descricao;
    }
    return descricao.slice(0, MAX_DESCRIPTION_LENGTH) + '...';
  }

  const descricaoLimitada = limitarDescricao(product.description);// chamando a função limitarDescricao() para limitar a descrição


  return (
    <Container>
      <Image src={product.url} alt="imagem do produto" />
      <div>
        <ProductName>{product.name}</ProductName>
        <Description>{descricaoLimitada}</Description>
        <ProductPrice>{product.formatedPrice}</ProductPrice>



        <Button onClick={() => {
          putProductInCart(product)
          /*  push('/carrinho') */ //vai direto para a tela de carrinho
        }}>Adicionar</Button>
      </div>
    </Container>
  )
}


CardProduct.propTypes = {
  product: PropTypes.object
}