import styled from "styled-components"
import { SmallTexts, FlexRowCenter } from "./styles/Sharedstyles"
import {AiOutlineWoman} from 'react-icons/ai'
import {SiGraylog} from 'react-icons/si'
import {CiMedicalCase} from 'react-icons/ci'

const Headers = styled.h2`
    color: white;
    font-family: 'Bebas Neue', cursive;
    font-weight: normal;
    font-size: 68px;

    @media screen and (max-width: 768px){
        font-size: 28px;
    }
`
const HeadersSmaller = styled.h3`
    color: white;
    font-family: 'Bebas Neue', cursive;
    font-weight: normal;
    font-size: 38px;

    @media screen and (max-width: 768px){
        font-size: 26px;
        margin-left: 5px;
    }
`
const AreasDiv = styled.section`
    background-color: #EA5394;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 3rem 0;

    @media screen and (max-width: 768px){
        padding: 3rem 0 0 0;
    }
`
const ServiceDiv = styled.div`
    background-color: #965296FA;
    border-radius: 24px;
    padding-bottom: 30px;

    @media screen and (max-width: 768px) {
        margin-bottom: 60px;
    }
`
const ServiceTexts = styled.p`
    color: #F5E4F2;
    font-family: 'glacial';
    max-width: 254px;
    text-align: center;
    font-size: 16px;
    margin: auto;
`
const Services = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: flex-end;
    width: 100%;

    @media screen and (max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }
`

export default function Areas(){
    return(
        <AreasDiv>
            <Headers>Áreas de atuação</Headers>
            <SmallTexts>E como nós podemos te ajudar</SmallTexts>
            <br/><br/><br/>
            <Services>
                <ServiceDiv>
                    <img className="service-img"
                        src="/images/woman-flower.webp"
                        alt="Mulher segurando uma flor"
                        width="293"
                    />
                    <br/>
                    <FlexRowCenter>
                        <AiOutlineWoman 
                            size={36}
                            fill="#fff"
                        />
                        <HeadersSmaller>
                            Ginecologia
                        </HeadersSmaller>
                    </FlexRowCenter>
                    <br/>
                    <ServiceTexts>
                        A consulta ginecológica engloba o acompanhamento periódico, prevenção e tratamento de doenças relacionadas à saúde reprodutiva feminina, bem como doenças sexualmente transmissíveis (DSTs).
                    </ServiceTexts>
                </ServiceDiv>
                <ServiceDiv>
                    <img className="service-img"
                        src="/images/sonography.webp"
                        alt="Médico realizando ultrassonografia"
                        width="293"
                    />
                    <br/>
                    <FlexRowCenter>
                        <SiGraylog 
                            size={36}
                            fill="#fff"
                        />
                        <HeadersSmaller>
                            Ultrassonografia
                        </HeadersSmaller>
                    </FlexRowCenter>
                    <br/>
                    <ServiceTexts>
                        Para avaliar problemas ginecológicos, como cistos ovarianos, miomas uterinos, infertilidade, sangramento uterino anormal e outras condições. Também contamos com ultrassonografias o diagnóstico de problemas mamários e tireoidianos, além da ultrassonografia obstétrica.
                    </ServiceTexts>
                </ServiceDiv>
                <ServiceDiv>
                    <img className="service-img"
                        src="/images/consultation.webp"
                        alt="Mulher se consultando no ginecologista"
                        width="293"
                    />
                    <br/>
                    <FlexRowCenter>
                        <CiMedicalCase 
                            size={36}
                            fill="#fff"
                        />
                        <HeadersSmaller>
                            Preventivos
                        </HeadersSmaller>
                    </FlexRowCenter>
                    <br/>
                    <ServiceTexts>
                        A consulta ginecológica engloba o acompanhamento periódico, prevenção e tratamento de doenças relacionadas à saúde reprodutiva feminina, bem como doenças sexualmente transmissíveis (DSTs).
                    </ServiceTexts>
                </ServiceDiv>
            </Services>
        </AreasDiv>
    )
}