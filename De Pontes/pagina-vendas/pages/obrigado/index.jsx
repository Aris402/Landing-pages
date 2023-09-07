import styled from "styled-components"
import { YellowText, PcBr, FlexRow, FlexColumnCenter, MobileBr, BlackTexts } from "../../components/styles/Sharedstyles"
import HeadDiv from "../../components/HeadDiv"
import { useEffect } from "react"
import MetaPixelTwo from "../../components/MetaPixel"

export default function Obrigado(){

    useEffect(() => {
        const script = document.createElement("script");
        script.type = "text/javascript";
        script.src = "https://assets.calendly.com/assets/external/widget.js"
        script.async = true;
        document.body.appendChild(script);
        const hsscript = document.createElement("script");
        hsscript.type = "text/javascript";
        hsscript.src = "//js.hs-scripts.com/24271807.js";
        hsscript.id = "hs-script-loader"
        hsscript.async = true;
        hsscript.defer = true;
        document.body.appendChild(hsscript);
        return () => {
            document.body.removeChild(script);
        }
    }, [])
    
    return(
        <section>
            <HeadDiv/>
            <MetaPixelTwo/>
            <FlexRow justifyItems="space-evenly" alignItems="center" setPadding="6em 0" flexDirection="column" setMargin="0 35px" setPaddingMobile="2em 0">
                <div>
                    <YellowText textAlign="left" fontSize="34px" textAlignMobile="center" fontWeight="600">Parabéns por sua <br/>iniciativa!</YellowText>
                    <br/><br/>
                    <BlackTexts fontWeight="500" fontSize="20px">
                        Estamos quase lá...
                    </BlackTexts>
                    <br/>
                    <BlackTexts fontWeight="500" fontSize="20px">
                        Finalize seu agendamento <PcBr/> escolhendo a data e horário no quadro a seguir.
                    </BlackTexts>
                    <MobileBr/>
                </div>
                <div>
                {/* Widget em linha do Calendly - início */}
                <div className="calendly-div calendly-inline-widget" data-url="https://calendly.com/depontesmarketing/consultoria-estrategica-gratuita" ></div>
                
                </div>
            </FlexRow>
            <FlexColumnCenter setPadding="1em 3em">
                <img
                    src="./images/logo-depontes.svg"
                    width="220"
                    alt="logo da De Pontes Medical Marketing"
                    className="logoObg"
                />
                <br/>
                <BlackTexts fontSize="14px">
                    © 2023 De Pontes Medical Marketing - Todos os Direitos Reservados
                </BlackTexts>
            </FlexColumnCenter>
        </section>
    )
}