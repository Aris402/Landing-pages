import styled from "styled-components"
import { FlexColumn, PcBr, WhiteTexts } from "./styles/Sharedstyles"

const StyledForm = styled.form`
    background-color: #000000;
    padding: 50px 80px 20px 80px;
    max-width: 1043px;
    display: flex;
    flex-direction: column;
    margin: auto;
    border: 2.6489px solid #C5AE86;
    border-radius: 6.62226px;
    font-family: 'Montserrat', sans-serif;
`
const StyledInput = styled.input`
    padding: 15px 0 15px 30px;
    font-size: 19px;
    font-family: 'Montserrat', sans-serif;
`
const StyledSubmit = styled.input`
    background: linear-gradient(354.44deg, #D0A04D 3.67%, rgba(197, 174, 134, 0) 207.12%);
    padding: 20px;
    font-weight: 700;
    font-size: 18px;
    border: none;
    cursor: pointer;
    font-family: 'Montserrat', sans-serif;
`
const FormHeader = styled.p`
    color: #fff;
    font-size: 25.41px;
    font-weight: 600;
    text-align: center;
`
const SmallText = styled.small`
    font-size: 12px;
    color: #fff;
    text-align: center;
` 
const YellowHeader = styled.span`
    color: #9A7E4E;
`

export default function Form(){
    return(
        <section>
            <StyledForm>
                <FormHeader>
                    PARA ENTENDER COMO SUA CLÍNICA PODE TER UMA <YellowHeader>RECORRÊNCIA DE PACIENTES</YellowHeader> E <YellowHeader>FIDELIZA-LOS</YellowHeader>:
                </FormHeader>
                <br/>
                <WhiteTexts textAlign="center">
                Preencha o formulário abaixo e agende uma SESSÃO GRATUITA. <PcBr/>Entraremos em contato o mais rápido possível.
                </WhiteTexts>
                <br/>
                <StyledInput type="text" name="firstname"
                placeholder="Qual é o seu nome?"/>
                <br/>
                <StyledInput type="tel" name="hs_whatsapp_phone_number"
                placeholder="Qual é o seu WhatsApp?(Com DDD)"/>
                <br/>
                <StyledInput type="email" name="email"
                placeholder="Qual é o seu melhor e-mail?"/>
                <br/>
                <StyledInput type="text" name="instagram"
                placeholder="Qual é o Instagram da sua Clínica?"/>
                <br/><br/>
                <StyledSubmit type="submit" value="QUERO AGENDAR AGORA"/>
                <br/>
                <SmallText>
                    De acordo com a lei 12.956/2014 e 13.709/2018, asseguramos a proteção dos seus dados.
                </SmallText>
            </StyledForm>
        </section>
    )
}