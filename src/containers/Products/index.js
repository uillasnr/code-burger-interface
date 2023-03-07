import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Carousel from 'react-elastic-carousel'
import PropTypes from "prop-types";

import Header1 from "../../assets/Header 1.png"
import Header2 from '../../assets/Header 2.png'
import Header3 from '../../assets/Header 3.png'
import Header4 from '../../assets/Header 4.png'

import { CardProduct, Footer } from "../../components";
import formatCurrency from "../../utils/formatCurrency"
import api from "../../services/api"
import { Container, HomeImg, CategoryButton, CategoriesMenu, ProductsContainer } from "./styles"

function Products({ location: { state } }) {
    // Verificado se o state existe.
    // ? ELVES OPERATOR é um operador que verifica se uma informação existe pra continuar navegando no objeto.
    // Se state.categoryId não existir o ELVES OPERATOR vai considerar undefined e seguir com o fluxo da aplicação sem quebrar
    let categoryId = 0
    if (state?.categoryId) {
        categoryId = state.categoryId
    }



    // Pegando as categorias no back-end
    const [categories, setCategories] = useState([])

    //vai renderizar a categoria selecionada
    // Estado responsavel pela mudança de cor do botão do menu quando clicado
    const [activeCategory, setActiveCategory] = useState(categoryId)

    // Pegando os produtos no back-end
    const [products, setProducts] = useState([])

    // Estado que mostra os produtos filtrados
    const [filteredProducts, setfilteredProducts] = useState([])




    // useEffect vai renderizarr as categorias quando a página de home for carregado
    useEffect(() => {
        async function loadCategories() {
            const { data } = await api.get('categories')

            // Adicionando botão todas no menu de categorias.
            // Botão todas mostra dos os produtos
            const newCategories = [{ id: 0, name: 'Todos' }, ...data]

            setCategories(newCategories)
        }



        // Carregando os produtos
        async function loadProducts() {
            const { data: allProducts } = await api.get('products')

            // Formatando o preço dos cards de produtos
            const newProducts = allProducts.map(product => {
                return { ...product, formatedPrice: formatCurrency(product.price) }
            })

            setProducts(newProducts)
        }

        loadProducts()
        loadCategories()


    }, [])
    // Filtro de produtos por categoria
    // Filtrando os produtos pelo id da categoria
    useEffect(() => {
        if (activeCategory === 0) {
            setfilteredProducts(products)
        } else {
            const newfilteredProducts = products.filter(
                product => product.category_id === activeCategory
            )
            setfilteredProducts(newfilteredProducts)
        }
    }, [activeCategory, products])


    return (
        <Container>
            <Carousel enableAutoPlay autoPlaySpeed={1500} showArrows={false} >
                <HomeImg src={Header1} alt="logo da home"></HomeImg>
                <HomeImg src={Header2} alt="logo da home"></HomeImg>
                <HomeImg src={Header3} alt="logo da home"></HomeImg>
                <HomeImg src={Header4} alt="logo da home"></HomeImg>
            </Carousel>

            {/* buttons menu */}
            <CategoriesMenu>
                {categories &&
                    categories.map(category => (
                        <CategoryButton type="button"
                            key={category.id}
                            isActiveCategory={activeCategory === category.id}
                            onClick={() => {
                                setActiveCategory(category.id)
                            }}
                        >
                            {category.name}
                        </CategoryButton >
                    ))}
            </CategoriesMenu>

            <ProductsContainer>
                {filteredProducts &&
                    filteredProducts.map(product => (
                        <CardProduct key={product.id} product={product} />

                    ))}

            </ProductsContainer>
            <Footer></Footer>
        </Container>
    )

}

Products.propTypes = {
    location: PropTypes.object
}

export default Products