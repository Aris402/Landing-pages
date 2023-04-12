import styled from "styled-components"
import { FlexColumn, FlexRow, GradientBorder, WhiteTexts, YellowText, GradientButton, StyledButton, PcBr, MobileBr } from "./styles/Sharedstyles"
import {IoIosArrowForward} from 'react-icons/io'

const GrowthSec = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 3em 0 0 0;

    @media screen and (max-width: 768px){
        padding: 3em 25px;
    }
`
const FirstTextDiv = styled.div`
    @media screen and (max-width: 768px){
        display: flex;
        justify-content: center;
        flex-direction: column;
        padding: 0 25px;
        margin-bottom: 20px;
    }
`
const BgDivHeader = styled.p`
    color: #fff;
    font-weight: 600;
    font-family: 'Montserrat', sans-serif;
    font-size: 23px;

    @media screen and (max-width: 768px){
        font-size: 18px;
        text-align: ${props => props.textAlign};
    }
`
const SpecialSpanTwo = styled.span`
    color: #9A7E4E;
`

export default function Growth(){
    return (
        <GrowthSec>
            <FlexRow justifyItems="space-between" setPadding="110px 0 50px 0" flexDirection='column' 
            setWidth="80%" setWidthMobile="100%">
                <FirstTextDiv>
                    <YellowText maxWidth="431px" fontSize="25.41px" fontWeight="600">
                        Para o lucro, a ética e o profissionalismo andarem juntos na sua clínica.
                    </YellowText>
                    <br/>
                    <WhiteTexts maxWidth="431px" fontSize="19.38px" textAlign="left !important">
                        Na reunião exclusiva você vai descobrir como nosso Método pode te ajudar a:
                    </WhiteTexts>
                </FirstTextDiv>
                <GradientBorder setColor="#9A7E4E" setBorder="to right" setBRight="0" setPadding="30px 0 30px 30px" setPaddingMobile="30px 0 30px 10px">
                    <FlexColumn>
                        <FlexRow>
                        <span><IoIosArrowForward fill="#9A7E4E" size="25" className="arrow-icons"/></span>
                            <WhiteTexts maxWidth="476px" fontSize="19.38px" textAlign="left !important">Não se preocupar com marketing e aquisição de pacientes, e ter mais tempo para se dedicar a odontologia e a gestão.</WhiteTexts>
                        </FlexRow>
                        <br/>
                        <FlexRow>
                        <span><IoIosArrowForward fill="#9A7E4E" size="25" className="arrow-icons"/></span>
                            <WhiteTexts maxWidth="476px" fontSize="19.38px" textAlign="left !important">Não atender qualquer tipo de paciente, mas sim pacientes qualificados para tratamentos de alto valor.</WhiteTexts>
                        </FlexRow>
                        <br/>
                        <FlexRow>
                            <span><IoIosArrowForward fill="#9A7E4E" size="25" className="arrow-icons"/></span>
                            <WhiteTexts maxWidth="476px" fontSize="19.38px" textAlign="left !important">Alcançar a liberdade de tempo e o tão sonhado faturamento.</WhiteTexts>
                        </FlexRow>
                        <br/>
                        <FlexRow>
                            <span><IoIosArrowForward fill="#9A7E4E" size="25" className="arrow-icons"/></span>
                            <WhiteTexts maxWidth="476px" fontSize="19.38px" textAlign="left !important" >Conquistar e fidelizar pacientes ideais para o sucesso.</WhiteTexts>
                        </FlexRow>
                    </FlexColumn>
                </GradientBorder>
            </FlexRow>
            <GradientButton maxWidth='341px' href="#agendar">
                <StyledButton maxWidth='341px' >
                    QUERO ENTENDER O MÉTODO
                </StyledButton>
            </GradientButton>
            <br/><br/><br/><br/><br/>
            <FlexColumn justifyItems="center" textAlign="center">
                <div>
                    <BgDivHeader>
                        PARA QUEM É NOSSO <SpecialSpanTwo>MÉTODO?</SpecialSpanTwo>
                    </BgDivHeader>
                    <br/>
                    <WhiteTexts>
                        Dentistas e donos de clínicas que…
                    </WhiteTexts>
                </div>
                <FlexRow justifyItems="space-evenly" alignItems="center" setPadding="7em 0" 
                flexDirection="column" setPaddingMobile="0 0">
                    <FlexColumn alignItems="center" setPadding="4em 0">
                        <img 
                            src="./images/clock.svg"
                            width="106"
                            alt="ícone de relógio"
                            className="image-icons-two"
                        />
                        <br/>
                        <PcBr/>
                        <WhiteTexts maxWidth='383px' fontSize="20px">
                            Vivem presos ao trabalho e<MobileBr/> atarefados 24h, mas querem<MobileBr/> liberdade de tempo e fazer<MobileBr/> melhores atendimentos.
                        </WhiteTexts>
                    </FlexColumn>
                    <FlexColumn alignItems="center">
                        <img 
                            src="./images/rocket.svg"
                            width="106"
                            alt="ícone de foguete"
                            className="image-icons-two"
                        />
                        <br/>
                        <PcBr/>
                        <WhiteTexts maxWidth='383px' fontSize="20px">
                            Já investem em tráfego pago<MobileBr/> e almejam ter excelência em<MobileBr/> suas estratégias e comunicação.
                        </WhiteTexts>
                    </FlexColumn>
                </FlexRow>
                <FlexRow justifyItems="space-evenly" alignItems="center" setPadding="1em 0" 
                flexDirection="column" setPaddingMobile="0 0">
                    <FlexColumn alignItems="center" setPadding="4em 0">
                        <img 
                            src="./images/cash.svg"
                            width="106"
                            alt="ícone de moeda e seta de crescimento"
                            className="image-icons-two"
                        />
                        <br/>
                        <PcBr/>
                        <WhiteTexts maxWidth='383px' fontSize="20px">
                        Querem construir uma<MobileBr/> clínica que fatura 100 mil<MobileBr/> por mês ou mais.
                        </WhiteTexts>
                    </FlexColumn>
                    <FlexColumn alignItems="center">
                        <img 
                            src="./images/hands.svg"
                            width="106"
                            alt="ícone de mãos fechando acordo"
                            className="image-icons-two"
                        />
                        <br/>
                        <PcBr/>
                        <WhiteTexts maxWidth='383px' fontSize="20px">
                            Desejam ter fluxo constante<MobileBr/> de pacientes chegando aos<MobileBr/> seus mochos.
                        </WhiteTexts>
                    </FlexColumn>
                </FlexRow>
            </FlexColumn>
        </GrowthSec>
    )
}