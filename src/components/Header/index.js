import React from "react";
import { useHistory } from "react-router-dom";

import Logo from '../../assets/Logo1.png'

import Person from '../../assets/Person.png'
import Cart from '../../assets/carrinho.png'

import { Container, ContainerLeft, PageLink, ContainerRight, PageLinkExit, ContainerText, Line,Img } from "./styles"
import { useUser } from "../../hooks/UserContext";

export function Header() {
    const { logout, userData } = useUser()
    const { push, location: { pathname } } = useHistory()

// Quando essa função for chamada, ela vai deslogar o usuario e redireciona-lo para tela de login
    const logoutUser = () => {
        logout()
        push('/login')
    }

    return (
        <Container>
           <Img src={Logo} alt='Logo' />
            
            <ContainerLeft>
           
                <PageLink onClick={() => push('/')} isActive={pathname === '/'} >
                    Home
                </PageLink>

                <PageLink onClick={() => push('/produtos')}
                    isActive={pathname.includes('produtos')}>
                    Ver Produtos
                </PageLink>
            </ContainerLeft>


            <ContainerRight>
                <PageLink onClick={() => push('/carrinho')}>
                    <img src={Cart} alt="carrinho" />
                </PageLink>
                <Line></Line>
                <PageLink>
                    <img src={Person} alt="Logo-pessoa" />
                </PageLink>

                <ContainerText>
                    <p>Olá {userData.name}</p>

                    <PageLinkExit onClick={logoutUser}>Sair</PageLinkExit>
                </ContainerText>
            </ContainerRight>



        </Container>
    )
}
