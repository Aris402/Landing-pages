import styled from "styled-components";
import { FlexRowCenter } from "./styles/Sharedstyles";

const SobreDiv = styled.section`
    background-color: #fff;
`
const Headers = styled.h2`
    color: #965296;
    font-family: 'Bebas Neue', cursive;
    font-weight: normal;
    font-size: 68px;
    text-align: center;
    padding: 60px 0;

    @media screen and (max-width: 768px){
        font-size: 28px;
        padding: 30px 0;
    }
`
const Description = styled.p`
    color: #EA5394;
    font-family: 'glacial';
    max-width: 475px;
    font-size: 18px;
    @media screen and (max-width: 768px){
        text-align: center;
        padding: 0 20px 20px 20px;
        font-size: 16px;
    }
`
const EvenlyDiv = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    @media screen and (max-width: 768px){
        flex-direction: column;
    }
`

export default function Sobre(){
    return(
        <SobreDiv>
            <Headers>
                Sobre a clínica
            </Headers>
            <EvenlyDiv>
                <Description>
                Na Prevent Mulher, acreditamos que todos devem ter acesso aos cuidados de saúde de qualidade, independentemente de sua renda ou situação financeira.
                <br/><br/>
                Nossa equipe é composta por profissionais altamente capacitados que estão comprometidos em fornecer atendimentos abrangentes e personalizados, que atendem às necessidades individuais de cada paciente.
                <br/><br/>
                Nosso compromisso com a saúde das mulheres é refletido em todos os aspectos da clínica com nossas instalações modernas e confortáveis.
                <br/><br/>
                Se você está procurando uma clínica de saúde da mulher que tenha atendimento de qualidade, acessível e personalizado, não procure mais do que a Prevent Mulher. 
                <br/><br/>
                Entre em contato conosco hoje mesmo para agendar sua consulta e começar sua jornada rumo à saúde e ao bem-estar.
                </Description>
                <img
                    src="./images/fachada.png"
                    alt="Entrada da clínica Prevent Mulher, em Natal-RN"
                    width="559"
                    className="about-images"
                />
            </EvenlyDiv>
            <br/><br/>
            <EvenlyDiv>
                <img
                    src="./images/equipe.png"
                    alt="Equipe da Prevent Mulher"
                    width="525"
                    className="about-images"
                />
                <img
                    src="./images/consultorio.png"
                    alt="Uma das salas da Prevent Mulher"
                    width="525"
                    className="about-images"
                    id="fixMargin"
                />
            </EvenlyDiv>
        </SobreDiv>
    )
}