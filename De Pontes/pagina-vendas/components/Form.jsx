import styled from "styled-components"
import { PcBr, WhiteTexts } from "./styles/Sharedstyles"
import { useEffect } from "react"

const StyledForm = styled.form`
    background-color: #000000;
    padding: 50px 80px 20px 80px;
    max-width: 1043px;
    display: flex;
    flex-direction: column;
    margin: auto;
    margin-bottom: 100px;
    border: 2.6489px solid #C5AE86;
    border-radius: 6.62226px;
    font-family: 'Montserrat', sans-serif;

    @media screen and (max-width: 768px){
        padding: 50px 20px 20px 20px;
        margin: 0 15px 50px 15px;
    }
`
const StyledInput = styled.input`
    padding: 15px 0 15px 30px;
    font-size: 19px;
    font-family: 'Montserrat', sans-serif;

    @media screen and (max-width: 768px){
        font-size: 16px;
        padding: 15px 0 15px 10px;
    }
    @media screen and (max-width: 366px){
        font-size: 12px;
    }
`
const StyledSubmit = styled.input`
    background: linear-gradient(354.44deg, #D0A04D 3.67%, rgba(197, 174, 134, 0) 207.12%);
    padding: 20px;
    font-weight: 700;
    font-size: 18px;
    border: none;
    cursor: pointer;
    font-family: 'Montserrat', sans-serif;

    @media screen and (max-width: 366px){
        font-size: 14px;
    }
`
const FormHeader = styled.p`
    color: #fff;
    font-size: 25.41px;
    font-weight: 600;
    text-align: center;

    @media screen and (max-width: 768px){
        font-size: 22px;
    }
    @media screen and (max-width: 366px){
        font-size: 18px;
    }
`
const SmallText = styled.small`
    font-size: 12px;
    color: #fff;
    text-align: center;
` 

export default function Form(){


    useEffect(() => {
        const script = document.createElement("script");
        script.type = "text/javascript";
        script.src = "//js.hs-scripts.com/24271807.js";
        script.id = "hs-script-loader"
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);
        return () =>{
            document.body.removeChild(script);
        }
    }, [])

    return(
        <section>
            <StyledForm method="POST" action="/obrigado.html">
                <FormHeader id="agendar">
                    PARA ENTENDER COMO SUA CLÍNICA PODE TER UMA RECORRÊNCIA DE PACIENTES E FIDELIZA-LOS:
                </FormHeader>
                <br/>
                <WhiteTexts textAlign="center">
                Preencha o formulário abaixo e agende uma reunião. <PcBr/>Entraremos em contato o mais rápido possível.
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