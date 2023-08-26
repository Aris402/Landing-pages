import styled from "styled-components"; 
import { BlackTexts, FlexColumn, FlexRow, PcBr } from "./styles/Sharedstyles";

const HowBox = styled.div`
    background: ${props => props.setBackground};
    padding: ${props => props.setPadding};
    

    @media screen and (max-width: 768px){
        padding: 20px 25px 25px 25px;
        
    }
`

const MiniBox = styled.div`
    border: solid #9a7e4e73 3px;
    border-radius: 25px;
    padding: 7px 55px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    font-size: 14px;
    text-align: center;
    height: max-content;
`

export default function How(){
    return(
        <FlexColumn>
            <FlexRow justifyItemsMob="center" flexDirection="column">
                <HowBox setBackground="#e4e4e4" setPadding="80px 20px 80px 150px">
                    <FlexRow justifyItems="space-between" alignItems="center" flexDirectionDois="row">
                    <MiniBox>
                        <BlackTexts>
                            Como funciona?
                        </BlackTexts>
                    </MiniBox>
                    <div className="iconsRounded">
                        <img
                            src='./images/pen-icon.svg'
                            width='50'
                            alt='Ícone dourado com lápis dentro'
                        />
                        </div>
                    <br/>
                    </FlexRow>
                    <br/><PcBr/>
                    <BlackTexts fontWeight="400" fontSize="18px" setPadding="0 50px 0 0;" textAlignMobile="left" fontSizeMobile="15px" setPaddingMob="0">
                        Após a Consultoria e iniciarmos a nossa Assessoria, fazemos um planejamento estratégico focado exclusivamente no seu negócio, determinamos o seu Cliente Ideal e quais ações vamos realizar com a nossa equipe especializada.
                    </BlackTexts>
                </HowBox>
                <HowBox setBackground="#fff" setPadding="80px 20px 80px 150px">
                    <FlexRow justifyItems="space-between" alignItems="center">
                    <MiniBox>
                        <BlackTexts>
                            Como funciona?
                        </BlackTexts>
                    </MiniBox>
                    <div className="iconsRounded">
                        <img
                            src='./images/engrenagem.svg'
                            width='50'
                            alt='Ícone dourado com lápis dentro'
                        />
                        </div>
                    <br/>
                    </FlexRow>
                    <br/><PcBr/>
                    <BlackTexts fontWeight="400" fontSize="18px" setPadding="0 0 0 0;" textAlignMobile="left" fontSizeMobile="15px">
                    Depois, implementamos o Sistema de Recorrência de Pacientes. Deixe todo trabalho de captação, tráfego pago, estruturação e treinamento comercial e posicionamento digital por nossa conta.
                    </BlackTexts>
                </HowBox>
            </FlexRow>
            <FlexRow justifyItemsMob="center" flexDirection="column">
            <HowBox setBackground="#fff" setPadding="80px 20px 80px 150px">
                        <FlexRow justifyItems="space-between" alignItems="center">
                        <MiniBox>
                            <BlackTexts>
                                Como funciona?
                            </BlackTexts>
                        </MiniBox>
                        <div className="iconsRounded">
                            <img
                                src='./images/growth-rounded.svg'
                                width='50'
                                alt='Ícone dourado com seta dentro'
                            />
                            </div>
                        <br/>
                        </FlexRow>
                        <br/><PcBr/>
                        <BlackTexts fontWeight="400" fontSize="18px" setPadding="0 50px 0 0;" textAlignMobile="left" fontSizeMobile="15px">
                            Dessa forma, obtenha os melhores anúncios online, exclusivos e focados no seu negócio. E assim, aumente a relevância das suas redes sociais e atinja o Top of Mind dos seus clientes ideais.
                        </BlackTexts>
                    </HowBox>
                <HowBox setBackground="#e4e4e4" setPadding="80px 20px 80px 150px">
                        <FlexRow justifyItems="space-between" alignItems="center">
                        <MiniBox>
                            <BlackTexts>
                                Como funciona?
                            </BlackTexts>
                        </MiniBox>
                        <div className="iconsRounded">
                            <img
                                src='./images/network-icon.svg'
                                width='50'
                                alt='Ícone dourado com seta dentro'
                            />
                            </div>
                        <br/>
                        </FlexRow>
                        <br/><PcBr/>
                        <BlackTexts fontWeight="400" fontSize="18px" setPadding="0 50px 0 0;" textAlignMobile="left" fontSizeMobile="15px">
                        Por fim, estruturamos um Relatório Mensal analítico e prático para você estar ciente de todos os processos do teu novo modelo de captação de pacientes. Além disso, disponibilizamos o melhor suporte no Brasil.
                        </BlackTexts>
                    </HowBox>
            </FlexRow>

        </FlexColumn>
    )
}