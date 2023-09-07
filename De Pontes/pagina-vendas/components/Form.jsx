import styled from "styled-components"
import { FlexRow } from "./styles/Sharedstyles"
import { useEffect } from "react"

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    margin: auto;
    
    margin-top: 10px;
    font-family: 'Montserrat', sans-serif;

    @media screen and (max-width: 768px){
        padding: 10px 0 10px 0;
        margin: 0;
    }
`
const StyledInput = styled.input`
    padding: 10px 0 10px 15px;
    font-size: 16px;
    font-weigth: bold;
    font-family: 'Montserrat', sans-serif;
    align-self: ${props => props.setAlignSelf};
    margin: ${props => props.setMargin};
    width: ${props => props.setWidth};
    border: none;

    @media screen and (max-width: 768px){
        padding: 10px 0 10px 10px;
        margin: ${props => props.setMarginMob};
    }
`
const StyledSubmit = styled.input`
    background: linear-gradient(354.44deg, #C5AE86 3.67%, rgba(197, 174, 134, 0) 207.12%);
    padding: 10px;
    font-weight: 600;
    font-size: 18px;
    border: none;
    cursor: pointer;
    font-family: 'Montserrat', sans-serif;

    @media screen and (max-width: 768px){
        font-size: 16px !important;
    }
`

export default function Form(){

    {/*useEffect(() => {
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
    }, [])*/}

    return(
        <section>
            <StyledForm method="POST" action="/obrigado.html" id="agendardois">
                <FlexRow setMarginDois="0 0 8px 0;" flexDirection="column">
                <StyledInput type="text" name="firstname"
                placeholder="Qual é o seu nome?" setAlignSelf="left;" setMarginMob="0 0 8px 0;" required/>
                
                <StyledInput type="tel" name="hs_whatsapp_phone_number"
                placeholder="Qual é o seu WhatsApp?(Com DDD)" setMargin="0 0 0 8px;" setWidth="100%;" setMarginMob="0" required/>
                </FlexRow>
                <StyledInput type="email" name="email"
                placeholder="Qual é o seu melhor e-mail?" required/>
                <br/>
                <StyledSubmit type="submit" value="AGENDE AGORA"/>
                <br/>
            </StyledForm>
        </section>
    )
}