import styled from "styled-components"
import {BsInstagram, BsWhatsapp} from 'react-icons/bs'
import { FlexRowCenter } from "./styles/Sharedstyles"
import {HiLocationMarker} from 'react-icons/hi'

const FooterDiv = styled.footer`
    background-color: #fff;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 30px;

    @media screen and (max-width: 768px){
        flex-direction: column;
    }
`
const LeftDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:flex-start;
`
const Texts = styled.p`
    color: #EA5394;
    font-family: 'glacial';
`
const IconsDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    
`

export default function Footer(){
    return(
        <div>
            <FooterDiv>
                <LeftDiv>
                    <img 
                        className='logo-img' 
                        src='./images/Logo.webp' 
                        alt='Logo da clínica feminina Prevent Mulher' 
                        width="289"
                    />
                    <br/>
                    <IconsDiv>
                        <FlexRowCenter>
                            <BsInstagram
                                fill="#965296FA"
                            />
                            <Texts>@preventmulher</Texts>
                        </FlexRowCenter>
                        <br/>
                        <FlexRowCenter>
                            <BsWhatsapp
                                fill="#965296FA"
                            />
                            <Texts>(84) 3113-2500</Texts>
                        </FlexRowCenter>
                        <br/>
                        <FlexRowCenter>
                            <HiLocationMarker
                                fill="#965296FA"
                            />
                            <Texts>Av. Nevaldo Rocha 3022 - Lagoa Nova,<br/> Natal-RN, 59054-590</Texts>
                        </FlexRowCenter>
                    </IconsDiv>
                </LeftDiv>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2360.1736051817857!2d-35.21309164508719!3d-5.809971516219451!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7b2ff313853a3ad%3A0xba2a155655e58b7!2sPrevent%20Mulher!5e0!3m2!1spt-BR!2sbr!4v1678376339292!5m2!1spt-BR!2sbr" width="400" height="300" allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </FooterDiv>
            <br/><br/>
            <FlexRowCenter>
                    <Texts>
                        Site desenvolvido por: 
                    </Texts>
                    <a href="https://www.instagram.com/depontesmarketing/" target="_blank">
                        <img
                            src="./images/depontes.png"
                            width="81"
                        />
                    </a>
            </FlexRowCenter>
            <FlexRowCenter>
                <Texts>
                    © 2023 Prevent Mulher - Todos os direitos reservados
                </Texts>
            </FlexRowCenter>
            <br/>
        </div>
    )
}