import styled from "styled-components"
import { BlackTexts, FlexColumnCenter, FlexRow, WhiteTexts } from "./styles/Sharedstyles"
import {IoIosArrowForward, IoIosArrowDown} from 'react-icons/io'
import { useState } from "react"

const HeaderText = styled.p`
    font-size: 32px;
    color: #000000;
    font-weight: 600;
    padding-bottom: 2em;

    @media screen and (max-width: 768px){
        text-align: center;
        font-size: 24px;
    }
`
const FaqSec = styled.section`
    font-family: 'Montserrat', sans-serif;
    padding: 2.5em 0;
`
const YellowSpan = styled.span`
    color: #9A7E4E;
`
const IconsSpan = styled.span`
    margin-right: 15px;
`
const StyledHr = styled.hr`
    width: 571px;
    color: #00000;
    align-self: flex-start;
    @media screen and (max-width: 768px){
        width: 100%;
    }
`
const DetailsDiv = styled.div`
    overflow: hidden;
    transition: max-height 0.3s ease-out;
    &&[open]{
        max-height: 500px;
    }
    align-self: flex-start;
    @media screen and (max-width: 768px){
        width: 100%;
    }
`
const SummaryTxt = styled.p`
    font-weight: 700;
    display: flex;
    font-size: 19.47px;
    cursor: pointer;
    color: #434343;

    @media screen and (max-width: 768px){
        font-size: 18px;
        cursor: auto;
    }
`

function Details({ summary, children }) {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleDetails = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <DetailsDiv className="details" onClick={toggleDetails}>
        <FlexRow>
        <SummaryTxt>{isOpen === false ? <IconsSpan><IoIosArrowForward fill="#00000" size="25" className="arrow-icons"/></IconsSpan> : <IconsSpan><IoIosArrowDown fill="#00000" size="25" className="arrow-icons"/></IconsSpan>}{summary}</SummaryTxt>
        </FlexRow>
        <br/>
        {isOpen && <div className={`details-content ${isOpen ? 'open' : ''}`}>{children} <br/></div>}

        <StyledHr/>
      </DetailsDiv>
    );
  }
  

export default function FAQ(){

    return(
        <FaqSec>
            <FlexColumnCenter maxWidth="571px" setPadding="0 20px;">
                <HeaderText>
                <YellowSpan>PERGUNTAS FREQUENTES</YellowSpan>
                </HeaderText>
                <Details summary="Não tenho site, vale a pena fazer tráfego pago?">
                <BlackTexts maxWidth="639px" textAlignMobile="left">
                Não se preocupe. Você precisa sim de um site próprio para anunciar efetivamente na internet, por isso em nossa consultoria também oferecemos isso, se aplicável.
                        </BlackTexts>
                </Details>
                <br/>
                <Details summary="Preciso duplicar meu faturamento rápido, conseguem isso para mim?">
                <BlackTexts maxWidth="639px" textAlignMobile="left">
                Existem diversas variáveis que precisam ser observadas em cada clínica para uma comunicação ideal com seu público. <strong>Precisamos entender o contexto atual da sua clínica</strong> para saber como vamos ajudá-los, durante a Consultoria Estratégica conseguimos juntos pontuar quais são essas variáveis e te apresentar <strong>os pilares necessários para se ter êxito com o nosso Sistema.</strong>
                        </BlackTexts>
                </Details>
            </FlexColumnCenter>
            <br/><br/>
            <FlexColumnCenter setPadding="0 3em">
                <BlackTexts fontSize="14px">
                    © 2023 De Pontes Medical Marketing - Todos os Direitos Reservados
                </BlackTexts>
            </FlexColumnCenter>
        </FaqSec>
    )
}