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
    color: #fff;
    max-width: 740px;
    font-weight: 500;
    font-size: 26.71px;
    font-family: 'Rufina', serif;
    line-height: 42px;
    text-transform: uppercase;
    
    @media screen and (max-width: 768px){
        font-size: 22px;
        text-align: center;
        line-height: 32px;
    }
`
const ContentDiv = styled.div`
    padding: 13em 0;
    background-image: url('./images/bg-1.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 70% 0;

    @media screen and (min-width: 900px) and (max-width: 1650px){
        background-position: 50% 0;
    }
    @media screen and (max-width: 768px){
        padding: 3em 0 14em;
        background-image: url('./images/bg-1-mobile.jpg');
        background-size: cover;
        background-position: center;
    }
`
const RufinaLogo = styled.p`
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    font-size: 16px;
    color: #fff;
    padding: 18px;

    @media screen and (max-width: 768px){
        font-size: 14px;
        text-align: left;
        padding: 12px 8px 12px 8px;
    }
    @media screen and (max-width: 366px){
        font-size: 12px;
    }
`
const SupportDiv = styled.div`
    width: 400px;
`
const PageH2 = styled.p`
    color: #9A7E4E;
    font-family: 'Montserrat', sans-serif;
    max-width: 570px;

    @media screen and (max-width: 768px){
        text-align: center;
    }
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
                        <FlexRow justifyItems="flex-start" setMargin="0 0 30px 0" alignItems="center" justifyItemsMobile="center">
                            <GradientBorder setMargin="0 20px 0 0;" setMarginMobile="0" setBorder="to left" setBLeft="0" setColor="#9A7E4E">
                                <RufinaLogo>
                                    RECORRÊNCIA DE CRESCIMENTO
                                </RufinaLogo>
                            </GradientBorder>
                            <div>
                                <img
                                    src='./images/avatar-logo.webp'
                                    width='132'
                                    alt='logo da agência de marketing De Pontes'
                                    id='logo'
                                />
                            </div>
                        </FlexRow>
                        <PageH1>
                        <TemporaryBr/>
                        Fluxo de pacientes ideais no seu atendimento e crescimento exponencial ainda este ano.
                        </PageH1>
                        <br/>
                        <PageH2>
                            Agende uma <BoldMontserrat>reunião</BoldMontserrat> e descubra como ter o sistema de recorrência de pacientes ético e lucrativo para a sua clínica.
                        </PageH2>
                        <br/><br/>
                        <GradientButton maxWidth='341px' alignSelf="flex-start" alignSelfMobile="center" href="#agendar">
                            <StyledButton maxWidth='341px' >
                                AGENDAR AGORA
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