import styled from "styled-components"
import { FlexColumn, FlexRow, MobileBr, PcBr, WhiteTexts } from "./styles/Sharedstyles"

const HeaderText = styled.p`
    font-size: 27.46px;
    font-family: 'Rufina', serif;
    color: white;
`
const YellowHeader = styled.span`
    color: #9A7E4E;
`
const WhoSec = styled.section`
    background-image: url('./images/depontes-transparent.png');
    background-repeat: no-repeat;
    background-position: center;
    padding: 10em 0;

    @media screen and (max-width: 768px){
        background-size: 150%;
        padding: 7em 2em;
    }
`
const AvatarHeader = styled.p`
    color: #fff;
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    text-align: center;
`
const AvatarSmallTxt = styled.p`
    color: #fff;
    font-family: 'Montserrat', sans-serif;
    font-size: 11px;
    text-align: center;
    width: 100%;
    margin-top: 5px;
`

export default function Who(){
    return(
        <WhoSec>
            <FlexRow justifyItems="space-evenly" alignItems="center" flexDirection="column">
                <div>
                <HeaderText>QUEM <YellowHeader>SOMOS?</YellowHeader></HeaderText>
                <br/><PcBr/>
                <WhiteTexts maxWidth="502px" textAlignMobile="left">A De Pontes Medical Marketing é uma Assessoria de Business and Marketing que enxerga cada cliente como prioridade e dedicada em criar conexões duradouras com nossos parceiros.
                <br/><br/>
                Nosso foco é potencializar as vendas de clínicas captando mais clientes com escala, previsibilidade e valor de crescimento para o negócio. Além de estarmos atentos às necessidades de cada cliente.
                <br/><br/>
                Estamos extremamente satisfeitos em poder impactar não apenas as clínicas e profissionais da saúde, mas também as inúmeras vidas que conectamos aos serviços de alto nível fornecidos por nossos parceiros.
                </WhiteTexts>
                </div>
                <MobileBr/><MobileBr/><MobileBr/>
                <FlexColumn flexDirection="row" justifyItemsMob="space-evenly !important" setWidthMob="100%">
                    <div>
                        <img
                            src="./images/jose.webp"
                            width="180"
                            alt="imagem de José de Pontes, CEO e Co-fundador da De Pontes Medical Marketing"
                            className="cofounders"
                        />
                        <AvatarHeader>
                            José de Pontes
                        </AvatarHeader>
                        <AvatarSmallTxt>
                            CEO e Co-founder
                        </AvatarSmallTxt>
                    </div>
                    <br/><br/>
                    <FlexColumn>
                        <img
                            src="./images/anajulia.webp"
                            width="180"
                            alt="imagem de Ana Júlia Campelo Co-fundadora da De Pontes Medical Marketing"
                            className="cofounders"
                        />
                        <AvatarHeader>
                            Ana Júlia Campelo
                        </AvatarHeader>
                        <AvatarSmallTxt>
                            Co-founder
                        </AvatarSmallTxt>
                    </FlexColumn>
                </FlexColumn>
            </FlexRow>
        </WhoSec>
    )
}