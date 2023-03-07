import React from 'react'

import { useCart } from '../../hooks/CartContext'
import formatCurrency from '../../utils/formatCurrency'
import { Container, Header, Body, EmptyCart } from './styles'

export function CartItems() {
  const { CartProducts, increaseProducts, decreaseProducts } = useCart()

  return (
    <Container>
      <Header>
        <h3> </h3>
        <h3>Itens</h3>
        <h3>Preço</h3>
        <h3 style={{ paddingRight: 30 }}>Quantidade</h3>
        <h3>Total</h3>
      </Header>

      {CartProducts && CartProducts.length > 0 ? (
        CartProducts.map(product => (
          <Body key={product.id}>
            <img src={product.url} alt='' />
            <p>{product.name}</p>
            <p>{formatCurrency(product.price)}</p>
            <div className="quantity-container">
              <button onClick={() => decreaseProducts(product.id)}>-</button>
              <h1><h6>{product.quantity}</h6></h1>
              <button onClick={() => increaseProducts(product.id)}>+</button>
            </div>
            <p>{formatCurrency(product.quantity * product.price)}</p>
          </Body>
        ))
      ) : (
        <EmptyCart>Carrinho vazio</EmptyCart>
      )}
    </Container>
  )
}