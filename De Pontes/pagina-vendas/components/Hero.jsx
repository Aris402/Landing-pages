import styled from 'styled-components'
import { EvenlyDiv, FlexColumn, TemporaryBr, WhiteTexts, StyledButton, GradientButton, 
    FlexRow, BoldMontserrat, MobileBr, GradientBorder } from './styles/Sharedstyles'

const RedDiv = styled.div`
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%);
    font-weight: 600;
    color: #fff;
    text-align: center;
    padding: 1rem;
    font-family: 'Montserrat', sans-serif;

    @media screen and (max-width: 768px){
        font-size: 14px;
    }
`
const GradientHeader = styled.header`
    background-color: #B10000;
`
const PageH1 = styled.h1`
    color: #C5AE86;
    max-width: 532px;
    font-weight: 600;
    font-size: 29.71px;
    font-family: 'Rufina', serif;
    @media screen and (max-width: 768px){
        font-size: 22px;
        text-align: center;
    }
`
const ContentDiv = styled.div`
    padding: 7em 0;
    background-image: url('./images/bg-1.jpg');

    @media screen and (min-width: 900px) and (max-width: 1650px){
        background-position: 50% 0;
    }
    @media screen and (max-width: 768px){
        padding: 3em 0 14em;
    }
`
const RufinaLogo = styled.p`
    font-family: 'Rufina', serif;
    font-weight: 600;
    font-size: 19.38px;
    color: #fff;
    padding: 18px;

    @media screen and (max-width: 768px){
        font-size: 18px;
        text-align: center;
    }
`
const SupportDiv = styled.div`
    width: 400px;
`

export default function Hero(){
    return(
        <section>
            <GradientHeader>
                <RedDiv>
                    <p>Atenção: O que você verá aqui é exclusivo para donos de clínicas e consultórios odontológicos!</p>
                </RedDiv>
            </GradientHeader>
            <ContentDiv>
                <EvenlyDiv>
                    <FlexColumn>
                        <FlexRow justifyItems="flex-start" flexDirection="column" setMargin="0 0 30px 0">
                            <GradientBorder setMargin="0 20px 0 0;" setMarginMobile="0" setBorder="to left" setBLeft="0">
                                <RufinaLogo>
                                    RECORRÊNCIA DE CRESCIMENTO
                                </RufinaLogo>
                            </GradientBorder>
                            <img
                                src='./images/logo-depontes.svg'
                                width='132'
                                alt='logo da agência de marketing De Pontes'
                                id='logo'
                            />
                        </FlexRow>
                        <PageH1>
                        <TemporaryBr/>
                            MÉTODO CAPAZ DE TE DAR DOIS ANOS DE NOVOS PACIENTES E CRESCIMENTO, EM MESES.
                        </PageH1>
                        <br/>
                        <WhiteTexts maxWidth="570px">
                            Agende uma <BoldMontserrat>Sessão estratégica GRATUITA</BoldMontserrat> e descubra como ter o sistema de recorrência de pacientes ético, lucrativo e transformador para sua clínica.
                        </WhiteTexts>
                        <br/><br/>
                        <GradientButton maxWidth='341px'>
                            <StyledButton maxWidth='341px'>
                                AGENDAR SESSÃO GRATUITA
                            </StyledButton>
                        </GradientButton>
                    </FlexColumn>
                    <MobileBr/><MobileBr/>
                    <SupportDiv></SupportDiv>
                </EvenlyDiv>
            </ContentDiv>
        </section>
    )
}