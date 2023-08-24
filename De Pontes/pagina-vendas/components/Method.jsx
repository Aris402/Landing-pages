import styled from "styled-components";
import { BgText, WhiteTexts, PcBr, FlexRow, FlexColumn, MobileBr } from "./styles/Sharedstyles";
import { useEffect } from "react";

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

export default function Method(){
    return(
        <MethodSec>
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
            <FlexRow justifyItems="space-evenly" alignItems="center" flexDirection="column" setPadding="60px 0 0 0">
                <FlexColumn>
                    <BgDivHeader textAlign="center">
                        MÉTODO <BgText>RECORRÊNCIA DE<PcBr/> CRESCIMENTO:</BgText>
                    </BgDivHeader>
                    <MobileBr/>
                    <WhiteTexts fontSize="19.38px" maxWidth="504px">
                    Com o nosso Método, implementamos o Sistema de Recorrência de pacientes e os levamos até sua clínica ou consultório, aplicando estratégias para atrair, converter e torná-los evangelistas da sua clínica. São os pacientes certos para você focar em tratamentos de alto valor.
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
                        <WhiteTexts textAlign="left !important">Sempre focado em ações para filtrar e qualifica os
                        pacientes.</WhiteTexts>
                    </FlexRow>
                    <br/>
                    <FlexRow alignItems="center">
                        <img 
                            src="./images/iconV.svg"
                            width="30"
                            alt="ícone de check"
                            className="iconsX"
                        />
                        <WhiteTexts textAlign="left !important">Capacitação do atendimento para as vendas.</WhiteTexts>
                    </FlexRow>
                </FlexColumn>
                <img 
                    src="./images/notebook.webp"
                    width="616"
                    alt="imagem de um notebook"
                    className="images-mobile"
                />
            </FlexRow>
        </MethodSec>
    )
}