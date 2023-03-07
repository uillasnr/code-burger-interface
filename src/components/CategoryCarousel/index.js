import React, { useEffect, useState } from 'react'

import api from '../../services/api'
import { Container, ContainerItems, Image, Button } from './styles'

export function CategoryCarousel() {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('categories')

      setCategories(data)
    }

    loadCategories()
  }, [])



  return (
    <Container>
      {categories &&
        categories.map(category => (
          <ContainerItems key={category.id}>
            <Image src={category.url} alt="foto da categoria" />

            <Button
              to={{
                pathname: '/produtos',
                state: { categoryId: category.id }
              }}
            >
              {category.name}
            </Button>
          </ContainerItems>
        ))}

    </Container>
  )
}