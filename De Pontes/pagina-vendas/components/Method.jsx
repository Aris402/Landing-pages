import styled from "styled-components";
import { BgText, WhiteTexts, PcBr, FlexRow, FlexColumn, MobileBr } from "./styles/Sharedstyles";
import { useEffect } from "react";

const FirstDiv = styled.div`
    text-align: center;
    padding-bottom: 6em;

    @media screen and (max-width: 768px){
        padding: 3em 0 1em 0;
    }
`
const SecondDiv = styled.div`
    text-align: center;
`
const SpecialH2 = styled.h2`
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    color: #fff;
    text-transform: uppercase;
    margin: 80px 0 50px 0;

    @media screen and (max-width: 768px){
        font-size: 22px;
        margin: 80px 0 30px 0;
    }
`
const SpecialSpan = styled.span`
    color: #9A7E4E;
    text-decoration: underline;
`
const BgDiv = styled.div`
    background-color: #0F132D;
    border: 2px solid #9A7E4E;
    max-width: 638px;
    margin: auto;
    text-align: left;
    padding: 35px;
    border-radius: 5px;
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
const MethodSec = styled.section`
    @media screen and (max-width: 768px){
    margin: 0 15px 0 15px;
}
`
const SpecialSpanTwo = styled.span`
    color: #9A7E4E;
`

export default function Method(){
    return(
        <MethodSec>
            <FirstDiv>
            <BgText>SEM A METODOLOGIA VALIDADA, SUA AQUISIÇÃO<PcBr/> DE CLIENTES POR MEIO DA INTERNET É, NA MELHOR<PcBr/> DAS HIPÓTESES, INCONSISTENTE.</BgText>
            <br/><br/>
            <WhiteTexts>
                Isso quando não é apenas uma coleção de posts<PcBr/> fadados a um baixo engajamento, poucos<PcBr/> fechamentos e grande desperdício de energia.
            </WhiteTexts>
            </FirstDiv>
            <SecondDiv>
                <SpecialH2>
                    O nosso <SpecialSpan>Método</SpecialSpan> é diferente de<PcBr/> tudo que você já viu...
                </SpecialH2>
                <BgDiv>
                    <BgDivHeader textAlign="left">
                        Método tradicional das agências comuns:
                    </BgDivHeader>
                    <br/>
                    <WhiteTexts textAlignMobile="left">
                    A maioria das agências de marketing tradicionais focam apenas em levar até você um volume enorme de pessoas, mas que não são ideais para a venda.
                    </WhiteTexts>
                    <br/>
                    <FlexRow alignItems="center">
                        <span>
                            <img
                                src="./images/iconX.svg"
                                width="39"
                                alt="erro das agências comuns"
                                className="iconsX"
                            />
                        </span>
                        <WhiteTexts textAlign="left !important">Muitas mensagens, poucas vendas.</WhiteTexts>
                    </FlexRow>
                    <br/>
                    <FlexRow alignItems="center">
                        <span>
                            <img
                                src="./images/iconX.svg"
                                width="39"
                                alt="erro das agências comuns"
                                className="iconsX"
                            />
                        </span>
                        <WhiteTexts>Apenas rodam anúncios.</WhiteTexts>
                    </FlexRow>
                </BgDiv>
            </SecondDiv>
            <FlexRow justifyItems="space-evenly" alignItems="center" flexDirection="column" setPadding="60px 0 60px 0">
                <FlexColumn>
                    <BgDivHeader textAlign="center">
                        MÉTODO <BgText>RECORRÊNCIA DE<PcBr/> CRESCIMENTO:</BgText>
                    </BgDivHeader>
                    <MobileBr/>
                    <WhiteTexts fontSize="19.38px" maxWidth="504px">
                            Com o nosso Método, nós levamos os pacientes certos até sua clínica ou consultório, aplicando estratégias para atrair, converter e torná-los evangelistas da sua clínica. São os pacientes certos para você focar em tratamentos de alto valor.
                    </WhiteTexts>
                    <br/>
                    <FlexRow alignItems="center">
                        <img 
                            src="./images/iconV.svg"
                            width="30"
                            alt="ícone de check"
                            className="iconsX"
                        />
                        <WhiteTexts textAlign="left !important">Não basta captar, é preciso converter e fidelizar.</WhiteTexts>
                    </FlexRow>
                    <br/>
                    <FlexRow alignItems="center">
                        <img 
                            src="./images/iconV.svg"
                            width="30"
                            alt="ícone de check"
                            className="iconsX"
                        />
                        <WhiteTexts textAlign="left !important">Levamos o paciente de qualidade que não vai te<PcBr/> olhar por preço.</WhiteTexts>
                    </FlexRow>
                    <br/>
                    <FlexRow alignItems="center">
                        <img 
                            src="./images/iconV.svg"
                            width="30"
                            alt="ícone de check"
                            className="iconsX"
                        />
                        <WhiteTexts textAlign="left !important">Foco em ações para filtrar e qualificar os<PcBr/> pacientes sempre.</WhiteTexts>
                    </FlexRow>
                </FlexColumn>
                <img 
                    src="./images/notebook.webp"
                    width="616"
                    alt="imagem de um notebook"
                    className="images-mobile"
                />
            </FlexRow>
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
        </MethodSec>
    )
}