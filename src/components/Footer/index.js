import React from 'react'

import { Container, Img, SocialMedia } from './styles'
import whatsapp from '../../assets/whatsapp.png'
import facebook from '../../assets/iconsfacebook.png'
import instagram from "../../assets/instagram.png"


export function Footer() {


        return (

                <Container>
                        <p>Redes sociais</p>
                      
                        <SocialMedia>
                               
                                <Img src={whatsapp} alt='' />
                                <Img src={facebook} alt='' />
                                <Img src={instagram} alt='' />
                        </SocialMedia>
                    {/*     <h2>Todos os direitos reservados</h2> */}
                        <h4>© Copyright 2023</h4>
                </Container>


        )
}