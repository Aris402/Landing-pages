import styled from "styled-components"
import { FlexColumnCenter, BlackTexts, PcBr, FlexRow, FlexColumn, MobileBr } from "./styles/Sharedstyles"

const PageH1 = styled.h2`
    color: #434343;
    font-weight: 400;
    font-size: 26.71px;
    padding-top: 50px;
    font-family: 'Montserrat', sans-serif;
    line-height: 42px;
    text-align: center;
    margin: ${props => props.setMargin};
    
    @media screen and (max-width: 768px){
        font-size: 19px;
        line-height: 26px;
        max-width: 100%;
    }
`

const ItemBox = styled.div`
    max-width: 480px;
    font-weight: 500;
    padding: 30px 25px;

    background-color: transparent;
    background-image: linear-gradient(180deg,#9a7e4e1a 0,#9a7e4e1a 100%);
    border-style: solid;
    border-width: 2px;
    border-color: #c5ae86;
    border-radius: 4px;
    box-shadow: 0 5px 10px 0 rgba(0,0,0,.22);

    margin-left: 20px;

    @media screen and (max-width: 768px){
        padding: 20px;
        max-width: 280px;
        text-align: left;
    }
`

export default function Consultoria(){
    return(
        <section>
            <PageH1 setMargin="0 0 40px 0">
                ESSA CONSULTORIA
                <strong> <br/>É PERFEITA PARA:</strong>
            </PageH1>
            <FlexRow justifyItems="space-evenly" setPadding="0 0 60px 0" flexDirection="column" justifyItemsMobile="center">
                <FlexColumn justifyItems="center" alignItems="start" alignItemsMob="center">
                    <FlexRow justifyItems="center" alignItems="start" alignItemsMob="center">
                        <div>
                            <img
                                src='./images/check-icon.svg'
                                width='37'
                                alt='Ícone vermelho em formato de X redondo'
                                className="iconsXRed"
                            />
                        </div>
                        <ItemBox>
                            <BlackTexts textAlignMobile="left">Dentistas que desejam: Aumentar o fluxo de pacientes para tratamentos de alto valor e ganhar mais pela hora.</BlackTexts>
                        </ItemBox>
                    </FlexRow>
                    <br/><br/><PcBr/>
                    <FlexRow justifyItems="center" alignItems="start" alignItemsMob="center">
                        <div>
                            <img
                                src='./images/check-icon.svg'
                                width='37'
                                alt='Ícone vermelho em formato de X redondo'
                                className="iconsXRed"
                            />
                        </div>
                        <ItemBox>
                            <BlackTexts textAlignMobile="left">Dentistas que desejam: Conquistar um fluxo constante de pacientes chegando aos seus mochos.</BlackTexts>
                        </ItemBox>
                    </FlexRow>
                    <br/><br/><PcBr/>
                    <FlexRow justifyItems="center" alignItems="start" alignItemsMob="center">
                        <div>
                            <img
                                src='./images/check-icon.svg'
                                width='37'
                                alt='Ícone vermelho em formato de X redondo'
                                className="iconsXRed"
                            />
                        </div>
                        <ItemBox>
                            <BlackTexts textAlignMobile="left">Dentistas que vivem atarefados 24h, mas querem liberdade de tempo para viver sob suas regras, sejam elas quais forem.</BlackTexts>
                        </ItemBox>
                    </FlexRow>
                </FlexColumn>
                <MobileBr/><MobileBr/>
                <FlexColumn justifyItems="center" alignItems="start" alignItemsMob="center">
                    <FlexRow justifyItems="center" alignItems="start" alignItemsMob="center">
                        <div>
                            <img
                                src='./images/check-icon.svg'
                                width='37'
                                alt='Ícone vermelho em formato de X redondo'
                                className="iconsXRed"
                            />
                        </div>
                        <ItemBox>
                            <BlackTexts textAlignMobile="left">Clínicas e Dentistas que buscam a estruturação de um setor comercial sólido e robusto.</BlackTexts>
                        </ItemBox>
                    </FlexRow>
                    <br/><br/><PcBr/>
                    <FlexRow justifyItems="center" alignItems="start" alignItemsMob="center">
                        <div>
                            <img
                                src='./images/check-icon.svg'
                                width='37'
                                alt='Ícone vermelho em formato de X redondo'
                                className="iconsXRed"
                            />
                        </div>
                        <ItemBox>
                            <BlackTexts textAlignMobile="left">Clínicas e Dentistas que já possuem algum grau de inserção no mercado digital, mas que almejam atingir a excelência em termos de tráfego pago.</BlackTexts>
                        </ItemBox>
                    </FlexRow>
                    <br/><br/><PcBr/>
                    <FlexRow justifyItems="center" alignItems="start" alignItemsMob="center">
                        <div>
                            <img
                                src='./images/check-icon.svg'
                                width='37'
                                alt='Ícone vermelho em formato de X redondo'
                                className="iconsXRed"
                            />
                        </div>
                        <ItemBox>
                            <BlackTexts textAlignMobile="left">Clínicas e Dentistas procuram por uma assessoria de Marketing que enxerga o seu negócio com atenção e prioridade.</BlackTexts>
                        </ItemBox>
                    </FlexRow>
                </FlexColumn>
            </FlexRow>
        </section>
    )
}