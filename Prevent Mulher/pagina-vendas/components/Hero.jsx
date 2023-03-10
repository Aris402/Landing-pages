import styled from 'styled-components'
import { TemporaryBr, SmallTexts, ButtonStyle1 } from './styles/Sharedstyles'

const Headers = styled.h1`
    color: #fff;
    font-family: 'Bebas Neue', cursive;
    font-weight: normal;
    font-size: 68px;

    @media screen and (max-width: 768px){
        font-size: 28px;
    }
`
const HeroDiv = styled.section`
    background-image: url('./images/bg-1.jpeg');
    background-size: cover;
    padding: 6rem 7rem;

    @media screen and (max-width: 768px){
        padding: 3rem 2rem 20rem 2rem;
        max-height: 736px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        text-align: center;
        background-image: url('./images/bg-1-mobile.jpeg');
        background-repeat: no-repeat;
    }
`
const SmallerText = styled.small`
    color: #F5E4F2;
    font-family: 'glacial';
    font-size: 16px;

    @media screen and (max-width: 768px){
        font-size: 14px;
    }
`

export default function Hero(){
    return(
        <HeroDiv>
            <img className='logo-img' src='./images/Logo.webp' alt='Logo da clínica feminina Prevent Mulher' width="289"/>
            <br/><br/><TemporaryBr/><TemporaryBr/>
            <Headers>Saúde e bem-estar <TemporaryBr/> 
            feminino começam aqui</Headers>
            <br/>
            <SmallTexts>
                Agende agora seus exames ou consultas
                em Natal com preços mais acessíveis e 
                qualidade profissional!
            </SmallTexts>
            <br/><br/><TemporaryBr/>
            <ButtonStyle1 href='#agendar'>Quero cuidar da minha saúde</ButtonStyle1>
            <br/><TemporaryBr/><TemporaryBr/><TemporaryBr/>
            <SmallerText>*Rede particular acessível para todos!</SmallerText>
        </HeroDiv>
    )
}