import styled from "styled-components"
import { ButtonStyle1, TemporaryBr, SmallTexts, FlexRowCenter } from "./styles/Sharedstyles"

const SellDiv = styled.section`
    background-color: #965296;
    padding: 5rem 0;
    display: flex;
    justify-content: space-evenly;
    @media screen and (max-width: 768px){
        flex-direction: column;
        justify-content: center;
        padding: 2rem 0;
        align-items: center;
    }
`
const Headers = styled.h2`
    color: #fff;
    font-family: 'Bebas Neue', cursive;
    font-weight: normal;
    font-size: 68px;

    @media screen and (max-width: 768px){
        font-size: 28px;
    }
`
const LeftDiv = styled.div`
    @media screen and (max-width: 768px){
        margin-bottom: 40px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        padding: 0 20px;
    }
`

export default function Sell(){
    return(
        <SellDiv>
            <LeftDiv>
                <Headers>
                Saúde muito mais <TemporaryBr/> 
                acessível para você <TemporaryBr/> 
                mulher!
                </Headers>
                <br/>
                <SmallTexts>
                Procurar por clínicas e exames para a mulher pode ser uma tarefa complicada e demorada.
                <br/><br/>
                E mesmo quando encontramos, os custos podem ser altos.
                <br/><br/>
                Por isso a Prevent está aqui: Para garantir que você mulher tenha acesso a cuidados de saúde com qualidade e valores razoáveis.
                </SmallTexts>
                <br/><br/><TemporaryBr/>
                <ButtonStyle1 href="#agendar">Quero agendar!</ButtonStyle1>
            </LeftDiv>
            <FlexRowCenter>
                <img
                    src="./images/illustration.webp"
                    width="461"
                    alt="Ilustração de médico e paciente"
                    className="about-images"
                />
            </FlexRowCenter>
        </SellDiv>
    )
}