import styled from 'styled-components'
import { EvenlyDiv, FlexColumn, FlexRow, MobileBr, PcBr } from './styles/Sharedstyles'
import Form from './Form'

const PageH1 = styled.h1`
    color: #434343;
    max-width: 850px;
    font-weight: 700;
    font-size: 26.71px;
    font-family: 'Montserrat', sans-serif;
    line-height: 42px;
    
    @media screen and (max-width: 768px){
        font-size: 18px;
        line-height: 26px;
        max-width: 100%;
    }
`
const ContentDiv = styled.div`
    padding: 4em 0;

    @media screen and (max-width: 768px){
        padding: 1em 0 4em 0;
        text-align: left;
    }
`
const PageH2 = styled.p`
    color: #434343;
    font-family: 'Montserrat', sans-serif;
    max-width: 570px;
    font-size: 17px;
    font-weight: 500;

    @media screen and (max-width: 768px){
        font-size: 15px;
    }
`
const SpecialSpan = styled.span`
    color: #9A7E4E;
`
const UnderLineSpan = styled.span`
    text-decoration: underline;
`

export default function Hero(){
    return(
        <section>
            <ContentDiv id='hero-section'>
                <EvenlyDiv alignItems="left" textAlign='left !important'>
                    <FlexColumn setMaxWidth="660px;">
                        <FlexRow justifyItems="flex-start" setMargin="0 0 30px 0" alignItems="center" textAlign='left !important'>
                            <div>
                                <img
                                    src='./images/depontes-logo.svg'
                                    width='172'
                                    alt='logo da agência de marketing De Pontes'
                                    id='logo'
                                />
                            </div>
                        </FlexRow>
                        <PcBr/>
                        <PcBr/>
                        <PageH1>
                            O Sistema de Vendas que irá te dar <SpecialSpan>pacientes</SpecialSpan> de <UnderLineSpan>Implantes e Bucomaxilo</UnderLineSpan><SpecialSpan> toda semana!</SpecialSpan>
                        </PageH1>
                        <br/>
                        <PageH2>
                        Tráfego pago não é o suficiente para ter resultados! Saiba como aplicar o Sistema que utilizamos para os nossos clientes conquistarem alto volume de paciente e serem referência em suas regiões.
                            <br/><br/>
                            <small>Preencha abaixo e agende sua consultoria:</small>
                        </PageH2>
                        <Form></Form>
                        <br/><br/>
                    </FlexColumn>
                    <MobileBr/><MobileBr/>
                    <div className='img-Doctor'>
                    <img
                            src="./images/doctor.webp"
                            width="500"
                            alt="imagem de Doutor"
                            className='images-mobile'
                        />
                    </div>
                </EvenlyDiv>
            </ContentDiv>
        </section>
    )
}