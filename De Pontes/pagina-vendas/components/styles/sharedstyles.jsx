import styled from "styled-components";

const EvenlyDiv = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    @media screen and (max-width: 768px){
        flex-direction: column;
        padding: 0 20px;
    }
`
const FlexColumn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: ${props => props.justifyItems};
    align-items: ${props => props.alignItems};
    text-align: ${props => props.textAlign};
    @media screen and (max-width: 768px){
        padding: ${props => props.setPadding};
        flex-direction: ${props => props.flexDirection};
        justify-content: ${props => props.justifyItemsMob};
        width: ${props => props.setWidthMob};
    }
`
const FlexRow = styled.div`
    display: flex;
    align-items: ${props => props.alignItems};
    justify-content: ${props => props.justifyItems};
    padding: ${props => props.setPadding};
    width: ${props => props.setWidth};

    @media screen and (max-width: 768px){
        flex-direction: ${props => props.flexDirection};
        margin: ${props => props.setMargin};
        justify-content: ${props => props.justifyItemsMobile};
        text-align: ${props => props.textAlignMobile};
        padding: ${props => props.setPaddingMobile};
        width: ${props => props.setWidthMobile};
    }
`
const FlexColumnCenter = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1275px;
    max-width: ${props => props.maxWidth};
    margin: auto;

    @media screen and (max-width: 768px){
       padding: ${props => props.setPadding};
    }
`
const TemporaryBr = styled.br`
    display:block;
    @media screen and (max-width: 768px){
        display: none;
    }
`
const WhiteTexts = styled.p`
    color: #fff;
    text-align: ${props => props.textAlign};
    font-size: ${props => props.fontSize};
    max-width: ${props => props.maxWidth};
    font-weight: ${props => props.fontWeight};
    font-family: 'Montserrat', sans-serif;

    @media screen and (max-width: 768px){
        font-size: 14px;
        text-align: center;
        text-align: ${props => props.textAlignMobile};
    }
`
const BlackTexts = styled.p`
    color: #000000;
    text-align: ${props => props.textAlign};
    font-size: ${props => props.fontSize};
    max-width: ${props => props.maxWidth};
    font-weight: ${props => props.fontWeight};
    font-family: 'Montserrat', sans-serif;

    @media screen and (max-width: 768px){
        font-size: 14px;
        text-align: center;
        text-align: ${props => props.textAlignMobile};
        font-size: ${props => props.fontSizeMobile};
    }
`
const StyledButton = styled.button`
    padding: 1em;
    color: #0A0A1E;
    background: linear-gradient(354.44deg, #D0A04D 3.67%, rgba(197, 174, 134, 0) 207.12%);
    font-weight: 800;
    font-family: 'Montserrat', sans-serif;
    border: none;
    width: ${props => props.maxWidth};
    font-size: 18px;
    cursor: pointer;

    @media screen and (max-width: 768px){
        font-size: 16px;
        width: 300px;
    }
`
const GradientButton = styled.a`
    background-color: #9A7E4E;
    max-width: ${props => props.maxWidth};
    align-self: center;
    align-self: ${props => props.alignSelf};
    box-shadow: 0 0 12px #C5AE86;

    @media screen and (max-width: 768px){
        align-self: ${props => props.alignSelfMobile};
    }
`
const YellowText = styled.p`
    color: #9A7E4E;
    font-size: ${props => props.fontSize};
    max-width: ${props => props.maxWidth};
    font-weight: ${props => props.fontWeight};
    margin: ${props => props.setMargin};
    text-align: ${props => props.textAlign};
    text-transform: uppercase;
    font-family: 'Montserrat', serif;
    font-family: ${props => props.fontFamily};

    @media screen and (max-width: 768px){
        text-align: ${props => props.textAlignMobile};
        font-size: 22px;
    }
`
const BoldMontserrat = styled.span`
    font-weight: bold;
`
const MobileBr = styled.br`
    display: none;

    @media screen and (max-width: 768px){
        display: block;
    }
`
const PcBr = styled.br`
    display: block;

    @media screen and (max-width: 768px){
        display: none;
}
`
const GradientBorder = styled.div`
    border-width: 2px;
    border-left: ${props => props.setBLeft};
    border-right: ${props => props.setBRight};
    border-style: solid;
    border-image: linear-gradient(${props => props.setBorder}, ${props => props.setColor}, rgba(0, 0, 0, 0)) 1 7%;
    margin: ${props => props.setMargin};
    padding: ${props => props.setPadding};

    @media screen and (max-width: 768px){
        margin: ${props => props.setMarginMobile};
        padding: ${props => props.setPaddingMobile};
    }
`
const BgText = styled.span`
    color: #fff;
    background-color: #9A7E4E;
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    font-size: 25.41px;

    @media screen and (max-width: 768px){
        font-size: 18px;
    }
`

export {EvenlyDiv, FlexColumn, TemporaryBr, GradientButton, StyledButton, 
    FlexColumnCenter, YellowText, WhiteTexts, BoldMontserrat, MobileBr,
    BlackTexts, FlexRow, GradientBorder, BgText, PcBr}