import styled from "styled-components"
import { FlexColumnCenter, BlackTexts, PcBr, FlexRow, FlexColumn, StyledButton } from "./styles/Sharedstyles"

const SecondarySec = styled.section`
    padding: 1.5em 0;

    @media screen and (max-width: 768px){
        padding: 0 20px 3em 20px;
        text-align: center;
    }
`

const GoldenBlock = styled.div`
    background: linear-gradient(180deg,#e0cfb2 30%,#d8c29b 100%);
    padding: 30px 50px;
    border-radius: 25px;
    border: #9a7e4e solid 1px;

    @media screen and (max-width: 768px){
        padding: 25px 20px;
    }
`

const PageH1 = styled.h2`
    color: #434343;
    max-width: 740px;
    font-weight: 600;
    font-size: 22.71px;
    font-family: 'Montserrat', sans-serif;
    line-height: 42px;
    text-align: center;
    margin: ${props => props.setMargin};
    
    @media screen and (max-width: 768px){
        font-size: 19px;
        line-height: 26px;
        max-width: 100%;
    }
`
const SpecialSpan = styled.span`
    color: #9A7E4E;
`

export default function Secondary(){
    return(
        <SecondarySec>
            <FlexColumnCenter>
                <PageH1>Você quer aumentar o faturamento e o volume de pacientes, mas continua com os mesmos problemas, não é?</PageH1>
                <br/>
                <br/>
                <GoldenBlock>
                <FlexRow alignItems="center" setMarginDois="0 0 30px 0;">
                        <img
                            src='./images/x-icon.svg'
                            width='41'
                            alt='Ícone vermelho em formato de X redondo'
                            className="iconsXRed"
                        />
                        <BlackTexts fontWeight="600" setMargin="0 0 0 20px;" textAlignMobile="left">Contatos que não agendam e não comparecem</BlackTexts>
                </FlexRow>
                <FlexRow alignItems="center" setMarginDois="0 0 30px 0;">
                        <img
                            src='./images/x-icon.svg'
                            width='41'
                            alt='Ícone vermelho em formato de X redondo'
                            className="iconsXRed"
                        />
                        <BlackTexts fontWeight="600" setMargin="0 0 0 20px;" textAlignMobile="left">Ainda ocupa a agenda com tratamentos de baixo valor</BlackTexts>
                </FlexRow>
                <FlexRow alignItems="center" setMarginDois="0 0 30px 0;">
                        <img
                            src='./images/x-icon.svg'
                            width='41'
                            alt='Ícone vermelho em formato de X redondo'
                            className="iconsXRed"
                        />
                        <BlackTexts fontWeight="600" setMargin="0 0 0 20px;" textAlignMobile="left" fontSizeMobile="16px">Dependente de indicações e convênios</BlackTexts>
                </FlexRow>
                <FlexRow alignItems="center">
                        <img
                            src='./images/x-icon.svg'
                            width='41'
                            alt='Ícone vermelho em formato de X redondo'
                            className="iconsXRed"
                        />
                        <BlackTexts fontWeight="600" setMargin="0 0 0 20px;" textAlignMobile="left">Sem resultados consistentes com tráfego pago/anúncios online</BlackTexts>
                </FlexRow>
                </GoldenBlock>
                <FlexRow setMarginDois="30px 0 100px 0;">
                    <img
                            src='./images/arrow-icon.svg'
                            width='26'
                            alt='Ícone vermelho em formato de X redondo'
                            className="iconsXRed"
                        />
                    <BlackTexts fontWeight="500" setMargin="0 0 0 20px;" textAlignMobile="left">Se você se identifica com algum destes problemas,<PcBr/> temos uma mensagem para você…</BlackTexts>
                </FlexRow>
                <PageH1>
                    Benefícios do <SpecialSpan>Sistema de <PcBr/>Recorrência de Pacientes.</SpecialSpan>
                </PageH1>
                <br/>
                <BlackTexts fontWeight="500" setMargin="0 0 60px 0" textAlignMobile="center" textAlign="center">Porque definitivamente o tráfego<PcBr/> pago não é suficiente!</BlackTexts>
                <FlexRow justifyItems="space-between;" flexDirection="column;" justifyItemsMob="center">
                 <FlexColumn setMargin="0 90px 0 0;" setMarginMob="0 0 0 0;">
                    <FlexColumn justifyItems="start" setMaxWidth="290px" setMargin="0 0 40px 0;">
                        <img
                                src='./images/cycle.svg'
                                width='34'
                                alt='Ícone dourado em formato de ciclo'
                                className="iconsXRed"
                            />
                            <br/>
                            <BlackTexts fontWeight="600" fontSize="18px" textAlignMobile="left !important" fontSizeMobile="16px">
                                Captação Recorrente e Eficiente
                            </BlackTexts>
                            <BlackTexts fontWeight="500" fontSize="16px" setMargin="10px 0 0 0;" textAlignMobile="left !important">
                            Com a aplicação do Sistema você irá se conectar com o seu público-alvo através de uma estrutura e comunicação assertiva para atraí-los e despertar o desejo por sua clínica. 
                            </BlackTexts>
                    </FlexColumn>
                    <FlexColumn justifyItems="start" setMaxWidth="290px">
                        <img
                                src='./images/chat-icon.svg'
                                width='34'
                                alt='Ícone dourado em formato de chat'
                                className="iconsXRed"
                            />
                            <br/>
                            <BlackTexts fontWeight="600" fontSize="18px" textAlignMobile="left !important" fontSizeMobile="16px">
                                Mais agendamentos e comparecimentos
                            </BlackTexts>
                            <BlackTexts fontWeight="500" fontSize="16px" setMargin="10px 0 0 0;" textAlignMobile="left !important">
                            Não basta captar, é preciso converter. Por isso, estruturamos e treinamos o seu comercial &#40;atendimento&#41; para que agende o maior número possível e mantenha sempre alta a sua taxa de comparecimento.
                            </BlackTexts>
                    </FlexColumn>
                 </FlexColumn>
                 <FlexColumn>
                    <FlexColumn justifyItems="start" setMaxWidth="290px" setMargin="0 0 40px 0;" setMarginMob="40px 0 40px 0">
                        <img
                                src='./images/golden-x-icon.svg'
                                width='34'
                                alt='Ícone dourado em formato de ciclo'
                                className="iconsXRed"
                            />
                            <br/>
                            <BlackTexts fontWeight="600" fontSize="18px" textAlignMobile="left !important" fontSizeMobile="16px">
                            Fim da dependência de Indicações
                            </BlackTexts>
                            <BlackTexts fontWeight="500" fontSize="16px" setMargin="10px 0 0 0;" textAlignMobile="left !important">
                            O Sistema nos garante um fluxo semanal de novos pacientes particulares de implantes e bucomaxilo graças aos seus pilares que dão à clínica uma estrutura de vendas robusta.
                            </BlackTexts>
                    </FlexColumn>
                    <PcBr/>
                    <FlexColumn justifyItems="start" setMaxWidth="290px">
                        <img
                                src='./images/growth-icon.svg'
                                width='34'
                                alt='Ícone dourado em formato de chat'
                                className="iconsXRed"
                            />
                            <br/>
                            <BlackTexts fontWeight="600" fontSize="18px" textAlignMobile="left !important" fontSizeMobile="16px">
                            Autoridade elevada
                            </BlackTexts>
                            <BlackTexts fontWeight="500" fontSize="16px" setMargin="10px 0 0 0;" textAlignMobile="left !important">
                            Com o posicionamento digital completo nas redes sociais e no Google, o único fim será maior exposição da sua marca e percepção de autoridade maximizada.
                            </BlackTexts>
                    </FlexColumn>
                 </FlexColumn>
                </FlexRow>
                <br/><br/><PcBr/>
                <FlexColumn justifyItems="start" setMaxWidth="680px" setMaxWidthMob="290px">
                        <img
                                src='./images/premio.svg'
                                width='45'
                                alt='Ícone dourado em formato de chat'
                                className="iconsXRed"
                            />
                            <br/>
                            <BlackTexts fontWeight="600" fontSize="18px" textAlignMobile="left !important" fontSizeMobile="16px">
                            Diferenciação da concorrência
                            </BlackTexts>
                            <BlackTexts fontWeight="500" fontSize="16px" setMargin="10px 0 0 0;" textAlignMobile="left !important">
                            Aos olhos dos pacientes as clínicas odontológicas são muito parecidas: ambiente frio, paredes e uniformes brancos. Sua chance de se diferenciar é pela estrutura do Sistema de Recorrência de Pacientes!
                            </BlackTexts>
                    </FlexColumn>
                    <br/><br/><br/><PcBr/>
                <StyledButton href="#hero-section">
                    Clique e agende sua consultoria
                </StyledButton>
            </FlexColumnCenter>
            
        </SecondarySec>
    )   
}