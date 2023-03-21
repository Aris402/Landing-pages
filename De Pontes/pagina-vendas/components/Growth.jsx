import styled from "styled-components"
import { FlexColumn, FlexRow, GradientBorder, WhiteTexts, YellowText, GradientButton, StyledButton } from "./styles/Sharedstyles"
import {IoIosArrowForward} from 'react-icons/io'

const GrowthSec = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 3em 0 9em 0;

    @media screen and (max-width: 768px){
        padding: 3em 25px;
    }
`
const FirstTextDiv = styled.div`
    @media screen and (max-width: 768px){
        display: flex;
        justify-content: center;
        flex-direction: column;
        padding: 0 25px;
        margin-bottom: 20px;
    }
`

export default function Growth(){
    return (
        <GrowthSec>
            <img
                src="./images/growth.webp"
                alt="Gráfico de crescimento da clínica com a De Pontes"
                width="1013"
                className='images-mobile'
            />
            <FlexRow justifyItems="space-between" setPadding="110px 0 50px 0" flexDirection='column' 
            setWidth="80%" setWidthMobile="100%">
                <FirstTextDiv>
                    <YellowText maxWidth="431px" fontSize="25.41px" fontWeight="600">
                        Para o lucro, a ética e o profissionalismo andarem juntos na sua clínica.
                    </YellowText>
                    <br/>
                    <WhiteTexts maxWidth="431px" fontSize="19.38px" textAlign="left !important">
                        Na sessão estratégica gratuita você vai descobrir como nosso Método pode te ajudar a:
                    </WhiteTexts>
                </FirstTextDiv>
                <GradientBorder setColor="#fff" setBorder="to right" setBRight="0" setPadding="30px 0 30px 30px" setPaddingMobile="30px 0 30px 10px">
                    <FlexColumn>
                        <FlexRow>
                        <span><IoIosArrowForward fill="#9A7E4E" size="25" className="arrow-icons"/></span>
                            <WhiteTexts maxWidth="476px" fontSize="19.38px" textAlign="left !important">Não se preocupar com o marketing e aquisição de pacientes, tendo assim mais tempo para se dedicar a odontologia e a gestão.</WhiteTexts>
                        </FlexRow>
                        <br/>
                        <FlexRow>
                        <span><IoIosArrowForward fill="#9A7E4E" size="25" className="arrow-icons"/></span>
                            <WhiteTexts maxWidth="476px" fontSize="19.38px" textAlign="left !important">Não mais viver preso a trabalho extenuante com qualquer tipo de paciente, e ter uma clínica que atende bons pacientes com tratamentos de alto valor.</WhiteTexts>
                        </FlexRow>
                        <br/>
                        <FlexRow>
                            <span><IoIosArrowForward fill="#9A7E4E" size="25" className="arrow-icons"/></span>
                            <WhiteTexts maxWidth="476px" fontSize="19.38px" textAlign="left !important">Alcançar a liberdade de tempo e o tão sonhado faturamento.</WhiteTexts>
                        </FlexRow>
                        <br/>
                        <FlexRow>
                            <span><IoIosArrowForward fill="#9A7E4E" size="25" className="arrow-icons"/></span>
                            <WhiteTexts maxWidth="476px" fontSize="19.38px" textAlign="left !important" >Conquistar e fidelizar pacientes ideais para o sucesso.</WhiteTexts>
                        </FlexRow>
                    </FlexColumn>
                </GradientBorder>
            </FlexRow>
            <GradientButton maxWidth='341px' href="#agendar">
                <StyledButton maxWidth='341px' >
                    QUERO ENTENDER O MÉTODO
                </StyledButton>
            </GradientButton>
        </GrowthSec>
    )
}