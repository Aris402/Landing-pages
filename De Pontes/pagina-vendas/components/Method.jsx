import styled from "styled-components";
import { BgText, WhiteTexts, PcBr, FlexRow } from "./styles/Sharedstyles";

const FirstDiv = styled.div`
    text-align: center;
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
        text-align: center;
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
                    <BgDivHeader>
                        Método tradicional das agências comuns:
                    </BgDivHeader>
                    <br/>
                    <WhiteTexts>
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
                        <WhiteTexts>Muitas mensagens, poucas vendas.</WhiteTexts>
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
        </MethodSec>
    )
}