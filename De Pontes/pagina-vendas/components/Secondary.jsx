import styled from "styled-components"
import { YellowText, FlexColumn, BlackTexts, FlexColumnCenter } from "./styles/Sharedstyles"

const DescBox = styled.div`
    max-width: 543px;
    display: flex;
    flex-direction: column;
    align-self: ${props => props.setAlign};
    justify-content: ${props => props.alignItems};
    align-items: ${props => props.alignItems};

    @media screen and (max-width: 768px){
        align-self: center;
        justify-content: center;
        align-items: center;
        margin-top: 80px;
    }
`
const SecondarySec = styled.section`
    background-image: url('./images/bg-2.png');
    background-size: cover;
    background-color: #05081A !important;
    padding: 1.5em 0;
    background-position: center;

    @media screen and (max-width: 768px){
        padding: 0 20px 3em 20px;
        text-align: center;
    }
`

export default function Secondary(){
    return(
        <SecondarySec>
            <FlexColumnCenter>
                <DescBox setAlign="flex-start">
                    <img
                        src="./images/arrow.webp"
                        width="140.6"
                        alt='imagem de uma seta de gráfico subindo'
                        className="image-icons"
                    />
                    <YellowText maxWidth="424px" fontSize="23.68px" fontWeight="500" setMargin="0 0 10px 0" textAlignMobile="center" fontFamily="'Rufina', serif">
                        CRESCIMENTO E AUMENTO DA RECEITA DA CLÍNICA.
                    </YellowText>
                    <BlackTexts fontWeight="500" fontSize="19.38px" maxWidth="543px">
                    Unindo a qualidade do seu trabalho com a abordagem disciplinada da nossa metodologia, sua clínica irá, ao longo do tempo, para altos patamares.
                    </BlackTexts>
                </DescBox>
                <DescBox setAlign="flex-end" alignItems="flex-end">
                    <img
                        src="./images/cycle.webp"
                        width="100"
                        alt='imagem de uma seta de gráfico subindo'
                        className="image-icons"
                    />
                    <YellowText fontFamily="'Rufina', serif" fontSize="23.68px" fontWeight="500" setMargin="0 0 10px 0" textAlign="right" textAlignMobile="center">
                    FIM DA DEPENDÊNCIA DE INDICAÇÕES E CONVÊNIOS.
                    </YellowText>
                    <BlackTexts fontWeight="500" fontSize="19.38px" maxWidth="543px" textAlign="right">
                    Através dos pilares de nosso método sua empresa construirá um sistema de vendas produzindo um constante fluxo de clientes independente de indicações e convênios.
                    </BlackTexts>
                </DescBox>
                <DescBox setAlign="flex-start" alignItems="flex-start" className="lastIconDiv">
                    <img
                        src="./images/medal.webp"
                        width="100"
                        alt='imagem de uma seta de gráfico subindo'
                        className="image-icons"
                    />
                    <YellowText fontFamily="'Rufina', serif" fontSize="23.68px" fontWeight="500" setMargin="0 0 10px 0" textAlign="left" textAlignMobile="center">
                    DESTAQUE DA CONCORRÊNCIA
                    </YellowText>
                    <BlackTexts fontWeight="500" fontSize="19.38px" maxWidth="543px" textAlign="left">
                        A grande concorrência da odontologia não será uma dor de cabeça, você vencerá na região e os potenciais pacientes te olharão com destaque.
                    </BlackTexts>
                </DescBox>
            </FlexColumnCenter>
        </SecondarySec>
    )   
}