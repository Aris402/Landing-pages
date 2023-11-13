import styled from "styled-components";

const EvenlyDiv = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    @media screen and (max-width: 768px){
        flex-direction: column;
        padding: 0 20px;
        justify-content: ${props => props.justifyItems};
        align-items: ${props => props.alignItems};
        text-align: ${props => props.textAlign};
    }
`
const FlexColumn = styled.div`
    display: flex;
    flex-direction: column;
    margin: ${props => props.setMargin};
    justify-content: ${props => props.justifyItems};
    align-items: ${props => props.alignItems};
    text-align: ${props => props.textAlign};
    max-width: ${props => props.setMaxWidth};

    @media screen and (max-width: 768px){
        padding: ${props => props.setPadding};
        margin: ${props => props.setMarginMob};
        flex-direction: ${props => props.flexDirection};
        justify-content: ${props => props.justifyItemsMob};
        align-items: ${props => props.alignItemsMob};
        width: ${props => props.setWidthMob};
        max-width: ${props => props.setMaxWidthMob};
    }
`
const FlexRow = styled.div`
    display: flex;
    align-items: ${props => props.alignItems};
    justify-content: ${props => props.justifyItems};
    padding: ${props => props.setPadding};
    margin: ${props => props.setMarginDois};
    width: ${props => props.setWidth};
    gap: ${props => props.setGap};
    flex-direction: ${props => props.flexDirectionDois};
    max-width: ${props => props.setMaxWidth};

    @media screen and (max-width: 768px){
        flex-direction: ${props => props.flexDirection};
        margin: ${props => props.setMargin};
        justify-content: ${props => props.justifyItemsMobile};
        text-align: ${props => props.textAlignMobile};
        padding: ${props => props.setPaddingMobile};
        width: ${props => props.setWidthMobile};
        align-items: ${props => props.alignItemsMob};
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
    color: #434343;
    text-align: ${props => props.textAlign};
    font-size: ${props => props.fontSize};
    max-width: ${props => props.maxWidth};
    font-weight: ${props => props.fontWeight};
    font-family: 'Montserrat', sans-serif;
    margin: ${props => props.setMargin};
    padding: ${props => props.setPadding};
    line-height: 1.5em;

    @media screen and (max-width: 768px){
        font-size: 14px;
        text-align: center;
        padding: ${props => props.setPaddingMob};
        text-align: ${props => props.textAlignMobile};
        font-size: ${props => props.fontSizeMobile};
        margin: ${props => props.setMarginMob};
    }
`

const StyledButton = styled.a`
    padding: 1em 2.2em;
    color: #0A0A1E;
    text-decoration: none;
    border-radius: 5px;
    background: linear-gradient(354.44deg,#C5AE86 3.67%,rgba(197,174,134,0) 207.12%);
    font-weight: 600;
    font-family: 'Montserrat', sans-serif;
    border: none;
    text-transform: uppercase;
    width: ${props => props.maxWidth};
    text-align: ${props => props.textAlign};
    margin: ${props => props.setMargin};
    font-size: 18px;
    cursor: pointer;

    @media screen and (max-width: 768px){
        font-size: 14px;
        padding: 1em 1.5em;
        width: ${props => props.maxWidthMob};
    }
`
const YellowText = styled.p`
    color: #9A7E4E;
    font-size: ${props => props.fontSize};
    max-width: ${props => props.maxWidth};
    font-weight: ${props => props.fontWeight};
    margin: ${props => props.setMargin};
    text-align: ${props => props.textAlign};
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

export {EvenlyDiv, FlexColumn, TemporaryBr, StyledButton, 
    FlexColumnCenter, YellowText, WhiteTexts, BoldMontserrat, MobileBr,
    BlackTexts, FlexRow, GradientBorder, BgText, PcBr}