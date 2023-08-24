import styled from "styled-components"
import { FlexColumnCenter, BlackTexts, PcBr, FlexRow } from "./styles/Sharedstyles"

const SecondarySec = styled.section`
    padding: 1.5em 0;

    @media screen and (max-width: 768px){
        padding: 0 20px 3em 20px;
        text-align: center;
    }
`

const GoldenBlock = styled.div`
    background: linear-gradient(180deg,#e0cfb2 30%,#d8c29b 100%);
    padding: 30px 50px;
    border-radius: 25px;
    border: #9a7e4e solid 1px;

    @media screen and (max-width: 768px){
        padding: 25px 20px;
    }
`

const PageH1 = styled.h1`
    color: #434343;
    max-width: 740px;
    font-weight: 600;
    font-size: 26.71px;
    font-family: 'Montserrat', sans-serif;
    line-height: 42px;
    text-align: center;
    
    @media screen and (max-width: 768px){
        font-size: 19px;
        line-height: 26px;
        max-width: 100%;
    }
`

export default function Secondary(){
    return(
        <SecondarySec>
            <FlexColumnCenter>
                <PageH1>Seu consultório não pode atender pacientes esporadicamente!</PageH1>
                <br/>
                <BlackTexts fontWeight="500" textAlign="center" fontSize="17px">Você quer aumentar a receita e o volume de pacientes, mas continua<PcBr/> bloqueado pelos mesmos problemas, não é?</BlackTexts>
                <br/><br/>
                <GoldenBlock>
                <FlexRow alignItems="center" setMarginDois="0 0 30px 0;">
                        <img
                            src='./images/x-icon.svg'
                            width='41'
                            alt='Ícone vermelho em formato de X redondo'
                            className="iconsXRed"
                        />
                        <BlackTexts fontWeight="600" setMargin="0 0 0 20px;" textAlignMobile="left">Vive o Efeito Montanha Russa; mês em alta, mês em baixa</BlackTexts>
                </FlexRow>
                <FlexRow alignItems="center" setMarginDois="0 0 30px 0;">
                        <img
                            src='./images/x-icon.svg'
                            width='41'
                            alt='Ícone vermelho em formato de X redondo'
                            className="iconsXRed"
                        />
                        <BlackTexts fontWeight="600" setMargin="0 0 0 20px;" textAlignMobile="left">Seguidores que não se tornam pacientes</BlackTexts>
                </FlexRow>
                <FlexRow alignItems="center" setMarginDois="0 0 30px 0;">
                        <img
                            src='./images/x-icon.svg'
                            width='41'
                            alt='Ícone vermelho em formato de X redondo'
                            className="iconsXRed"
                        />
                        <BlackTexts fontWeight="600" setMargin="0 0 0 20px;" textAlignMobile="left">Dependente de indicações e convênios</BlackTexts>
                </FlexRow>
                <FlexRow alignItems="center">
                        <img
                            src='./images/x-icon.svg'
                            width='41'
                            alt='Ícone vermelho em formato de X redondo'
                            className="iconsXRed"
                        />
                        <BlackTexts fontWeight="600" setMargin="0 0 0 20px;" textAlignMobile="left">Sem resultados no digital</BlackTexts>
                </FlexRow>
                </GoldenBlock>
                <FlexRow setMarginDois="30px 0 0 0;">
                    <img
                            src='./images/arrow-icon.svg'
                            width='26'
                            alt='Ícone vermelho em formato de X redondo'
                            className="iconsXRed"
                        />
                    <BlackTexts fontWeight="500" setMargin="0 0 0 20px;" textAlignMobile="left">Se você se identifica com algum destes problemas,<PcBr/> temos uma mensagem para você…</BlackTexts>
                </FlexRow>
            </FlexColumnCenter>
        </SecondarySec>
    )   
}