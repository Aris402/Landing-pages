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
    background-color: #fff;
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
                    PERGUNTAS <YellowSpan>FREQUENTES</YellowSpan>
                </HeaderText>
                <Details summary="O que é o método Recorrência de Crescimento?">
                <BlackTexts maxWidth="639px" textAlignMobile="left">
                        A ideia é simples: atrair um fluxo constante de novos pacientes  e transformar essa recorrência em crescimento palpável para a clínica através de uma abordagem de aprendizados, programa de anúncios eficazes e um ecossistema de vendas sólido. Nosso CEO idealizou o método ao adaptar o modus operandi de growth hacking de gigantes, como Uber e Airbnb, para as clínicas odontológicas.

                        </BlackTexts>
                </Details>
                <br/>
                <Details summary="Quanto tempo dura a reunião?">
                <BlackTexts maxWidth="639px" textAlignMobile="left">
                Entre 30 a 45 minutos, esse é o tempo necessário para nossa equipe ou o CEO mostre como vamos te ajudar.
                        </BlackTexts>
                </Details>
                <br/>
                <Details summary="Quando ela será realizada?">
                <BlackTexts maxWidth="639px" textAlignMobile="left">
                Você precisará preencher o formulário, enviar os dados, e agendar um horário na agenda virtual que aparecerá na próxima página.
                        </BlackTexts>
                </Details>
                <br/>
                <Details summary="Preciso duplicar meu faturamento rápido, conseguem isso para mim?">
                <BlackTexts maxWidth="639px" textAlignMobile="left">
                Não. Somos extremamente realistas e claros com expectativas e resultados. Nenhuma estratégia fará &quot;milagre&quot; da noite para o dia.
                        </BlackTexts>
                </Details>

            </FlexColumnCenter>
            <br/><br/>
            <FlexColumnCenter setPadding="0 3em">
                <BlackTexts fontSize="12px">
                    © 2023 De Pontes Medical Marketing - Todos os Direitos Reservados
                </BlackTexts>
            </FlexColumnCenter>
        </FaqSec>
    )
}