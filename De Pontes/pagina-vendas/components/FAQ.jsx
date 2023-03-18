import styled from "styled-components"
import { BlackTexts, FlexColumnCenter, FlexRow, WhiteTexts } from "./styles/Sharedstyles"
import {IoIosArrowForward} from 'react-icons/io'

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


export default function FAQ(){
    return(
        <FaqSec>
            <FlexColumnCenter maxWidth="571px" setPadding="0 20px;">
                <HeaderText>
                    PERGUNTAS <YellowSpan>FREQUENTES</YellowSpan>
                </HeaderText>
                <div>
                    <FlexRow alignItems="center">
                        <IconsSpan><IoIosArrowForward fill="#00000" size="25" className="arrow-icons"/></IconsSpan>
                        <BlackTexts fontWeight="700" fontSize="19.47px" fontSizeMobile="18px" textAlignMobile="left">
                            O que é o método Recorrência de Crescimento?
                        </BlackTexts>
                        
                    </FlexRow>
                    <br/>
                    <BlackTexts maxWidth="639px" textAlignMobile="left">
                        A ideia é simples: atrair um fluxo constante de novos pacientes  e transformar essa recorrência em crescimento palpável para a clínica através de uma abordagem de aprendizados, programa de anúncios eficazes e um ecossistema de vendas sólido. Nosso CEO idealizou o método ao adaptar o modus operandi de growth hacking de gigantes, como Uber e Airbnb, para as clínicas odontológicas.

                    </BlackTexts>
                </div>
                <br/>
                <StyledHr/>
                <br/><br/>
                <div>
                    <FlexRow alignItems="center">
                        <IconsSpan><IoIosArrowForward fill="#00000" size="25" className="arrow-icons"/></IconsSpan>
                        <BlackTexts fontWeight="700" fontSize="19.47px" fontSizeMobile="18px" textAlignMobile="left">
                        Quanto tempo dura a Sessão Estratégica Gratuita?
                        </BlackTexts>
                        
                    </FlexRow>
                    <br/>
                    <BlackTexts maxWidth="639px" textAlignMobile="left">
                    Entre 30 a 45 minutos, esse é o tempo necessário para nossa equipe ou o CEO mostre como vamos te ajudar.
                    </BlackTexts>
                </div>
                <br/>
                <StyledHr/>
                <br/><br/>
                <div>
                    <FlexRow alignItems="center">
                        <IconsSpan><IoIosArrowForward fill="#00000" size="25" className="arrow-icons"/></IconsSpan>
                        <BlackTexts fontWeight="700" fontSize="19.47px" fontSizeMobile="18px" textAlignMobile="left">
                        Quando ela será realizada?
                        </BlackTexts>
                        
                    </FlexRow>
                    <br/>
                    <BlackTexts maxWidth="639px" textAlignMobile="left">
                        Você precisará preencher o formulário, enviar os dados, e agendar um horário na agenda virtual que aparecerá na próxima página.
                    </BlackTexts>
                </div>
                <br/>
                <StyledHr/>
                <br/><br/>
                <div>
                    <FlexRow alignItems="center">
                        <IconsSpan><IoIosArrowForward fill="#00000" size="25" className="arrow-icons"/></IconsSpan>
                        <BlackTexts fontWeight="700" fontSize="19.47px" fontSizeMobile="18px" textAlignMobile="left">
                        Preciso duplicar meu faturamento rápido, conseguem isso para mim?
                        </BlackTexts>
                        
                    </FlexRow>
                    <br/>
                    <BlackTexts maxWidth="639px" textAlignMobile="left">
                    Não. Somos extremamente realistas e claros com expectativas e resultados. Nenhuma estratégia fará &quot;milagre&quot; da noite para o dia.
                    </BlackTexts>
                </div>
                <br/>
                <StyledHr/>
            </FlexColumnCenter>
            <br/><br/>
            <FlexColumnCenter setPadding="0 3em">
                <img
                    src="./images/logo-depontes.svg"
                    width="220"
                    alt="logo da De Pontes Medical Marketing"
                    className="logoObg"
                />
                <br/>
                <BlackTexts fontSize="12px">
                    © 2023 De Pontes Medical Marketing - Todos os Direitos Reservados
                </BlackTexts>
            </FlexColumnCenter>
        </FaqSec>
    )
}