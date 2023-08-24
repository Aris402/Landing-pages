import styled from 'styled-components'
import { EvenlyDiv, FlexColumn, FlexRow, MobileBr, PcBr } from './styles/Sharedstyles'
import Form from './Form'

const PageH1 = styled.h1`
    color: #434343;
    max-width: 740px;
    font-weight: 800;
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
    font-size: 15px;
    font-weight: 500;
`
const SpecialSpan = styled.span`
    color: #9A7E4E;
`

export default function Hero(){
    return(
        <section>
            <ContentDiv>
                <EvenlyDiv alignItems="left" textAlign='left !important'>
                    <FlexColumn setMaxWidth="560px;">
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
                            O Sistema capaz de te tornar <SpecialSpan>referência</SpecialSpan> e gerar novos <SpecialSpan>fechamentos toda semana</SpecialSpan> para implantes ou ortodontia.
                        </PageH1>
                        <br/>
                        <PageH2>
                            Saiba como aplicar o Sistema que nossa Assessoria utiliza para nossos clientes conquistarem alto volume de pacientes e serem referência em suas regiões!
                            <br/><br/>
                            <small>Preencha abaixo para agendar sua consultoria<br/> gratuita na próxima página:</small>
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