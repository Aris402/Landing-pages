import styled from "styled-components"
import { FlexColumn, FlexRow, MobileBr, PcBr, BlackTexts, StyledButton } from "./styles/Sharedstyles"

const YellowHeader = styled.span`
    color: #9A7E4E;
    font-weight: bold;

    @media screen and (max-width: 768px){
        font-size: ${props => props.fontSizeMobile};
    }
`
const WhoSec = styled.section`
    padding: 7em 0;

    @media screen and (max-width: 768px){
        padding: 1em 2em 1em 2em;
    }
`

export default function Who(){
    return(
        <WhoSec>
            <FlexColumn alignItemsMob="center" justifyItemsMob="center">
            <FlexRow justifyItems="space-evenly" alignItems="center" flexDirection="column">
                <FlexColumn setMaxWidth="527px">
                    <FlexRow alignItems="center">
                    
                    <img
                        src='./images/favicon.svg'
                        width='32'
                        alt='Ícone dourado da de pontes medical'
                        className="iconsXRed"
                    />
                
                <BlackTexts fontSize="26px" fontWeight="500" setMargin="0 0 0 12px" fontSizeMobile="20px"><YellowHeader>QUEM</YellowHeader> SOMOS?</BlackTexts>
                </FlexRow>
                <br/>
                <BlackTexts fontWeight="500" fontSize="18px" textAlignMobile="left">A De Pontes Medical Marketing é uma Assessoria de Marketing, onde cada cliente é a prioridade. Somos constituídos por profissionais de larga bagagem no digital.
                <br/><br/>
                Nosso foco é potencializar as vendas de clínicas odontológicas e criar conexões duradouras com um trabalho extremamente sério. 
                <br/><br/>
                Hoje atendemos clínicas e consultórios, no Brasil e em Portugal, que buscam resultados e profissionalismo.

                </BlackTexts>
                </FlexColumn>
                <MobileBr/><MobileBr/>
                
                    <img
                        src='./images/founders.webp'
                        width='604'
                        alt='Ícone dourado da de pontes medical'
                        className="images-mobile"
                    />
                
            </FlexRow>
            <MobileBr/><MobileBr/>
                <StyledButton href="#hero-section" textAlign="center" maxWidth="450px" setMargin="auto" maxWidthMob="100%">
                    Clique e agende a sua consultoria
                </StyledButton>
            </FlexColumn>
        </WhoSec>
    )
}