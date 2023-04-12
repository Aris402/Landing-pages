import styled from "styled-components"
import { FlexRowCenter, TemporaryBr, ButtonStyle1} from "./styles/Sharedstyles"

const Headers = styled.h2`
    color: #EA5394;
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
const MarcarDiv = styled.section`
    background-image: url('./images/bg-2.jpg');
    background-size: cover;
    padding-bottom: 70px;
    margin-top: 70px;

    @media screen and (max-width: 768px){
        background-image: url('./images/bg-2-mobile.jpg');
        padding-bottom: 15px;
    }
`
const AgendarBox = styled.div`
    border-radius: 10px;
    background-color: #fff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    padding: 2rem;
    width: 424px;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (max-width: 768px){
        width: 90%;
        margin-bottom: 50px;
    }
`
const AgendarHeader = styled.p`
    color: #822D95FA;
    font-size: 32px;
    font-family: 'glacial';

    @media screen and (max-width: 768px){
        font-size: 22px;
    }
`
const AgendarDouble = styled.div`
    display: flex;
    justify-content: space-evenly;

    @media screen and (max-width: 768px){
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`
const PurpleText = styled.p`
    font-size: 24px;
    font-family: 'Bebas Neue', cursive;
    color: #EA5394;
    text-align: center;

    @media screen and (max-width: 768px){
        font-size: 22px;
    }
`

export default function Marcar(){
    return(
        <MarcarDiv>
            <Headers id="agendar">
                Qual exame ou consulta <br/>
                você quer marcar?
            </Headers>
            <AgendarDouble>
                <AgendarBox>
                    <AgendarHeader>
                        Consulta ginecológica
                    </AgendarHeader>
                    <br/><br/>
                    <ButtonStyle1 onClick="return gtag_report_conversion('https://wa.me/558431132500?text=Ol%C3%A1%2C+vim+do+google+e+gostaria+de+saber+mais+sobre+a+consulta+ginecol%C3%B3gica');" href="https://wa.me/558431132500?text=Ol%C3%A1%2C+vim+do+google+e+gostaria+de+saber+mais+sobre+a+consulta+ginecol%C3%B3gica" target="_blank">
                        <FlexRowCenter>
                            <img className="icone-zap"
                                src="./images/wpp-icon.png"
                                alt="logotipo do whatsapp"
                            />
                            Agendar
                        </FlexRowCenter>
                    </ButtonStyle1>
                </AgendarBox>
                <AgendarBox>
                    <AgendarHeader>
                        Ultrassonografia
                    </AgendarHeader>
                    <br/><br/>
                    <ButtonStyle1 onClick="return gtag_report_conversion('https://wa.me/558431132500?text=Ol%C3%A1%2C+vim+do+google+e+gostaria+de+saber+mais+sobre+a+ultrassonografia');" href="https://wa.me/558431132500?text=Ol%C3%A1%2C+vim+do+google+e+gostaria+de+saber+mais+sobre+a+ultrassonografia"
                    target="_blank">
                        <FlexRowCenter>
                            <img className="icone-zap"
                                src="./images/wpp-icon.png"
                                alt="logotipo do whatsapp"
                            />
                            Agendar
                        </FlexRowCenter>
                    </ButtonStyle1>
                </AgendarBox>
            </AgendarDouble>
            <TemporaryBr/><TemporaryBr/><TemporaryBr/><TemporaryBr/>
            <FlexRowCenter>
                <AgendarBox>
                        <AgendarHeader>
                            Preventivo
                        </AgendarHeader>
                        <br/><br/>
                        <ButtonStyle1 onClick="return gtag_report_conversion('https://wa.me/558431132500?text=Ol%C3%A1%2C+quero+marcar+o+preventivo%21');" href="https://wa.me/558431132500?text=Ol%C3%A1%2C+quero+marcar+o+preventivo%21"
                        target="_blank">
                            <FlexRowCenter>
                                <img className="icone-zap"
                                    src="./images/wpp-icon.png"
                                    alt="logotipo do whatsapp"
                                />
                                Agendar
                            </FlexRowCenter>
                        </ButtonStyle1>
                    </AgendarBox>
            </FlexRowCenter>
            <TemporaryBr/><TemporaryBr/><TemporaryBr/>
            <PurpleText>Atenção! Não atendemos convênio. Apenas particular.</PurpleText>
        </MarcarDiv>
    )
}