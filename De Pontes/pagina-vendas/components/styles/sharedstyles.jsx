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
`
const FlexRow = styled.div`
    display: flex;
    align-items: ${props => props.alignItems};
    justify-content: ${props => props.justifyItems};
`
const FlexColumnCenter = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1275px;
    margin: auto;
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
const GradientButton = styled.div`
    background-color: #9A7E4E;
    max-width: ${props => props.maxWidth};
    align-self: center;
    box-shadow: 0 0 12px #C5AE86;
`
const YellowText = styled.p`
    color: #9A7E4E;
    font-size: ${props => props.fontSize};
    max-width: ${props => props.maxWidth};
    font-weight: ${props => props.fontWeight};
    margin: ${props => props.setMargin};
    text-align: ${props => props.textAlign};

    @media screen and (max-width: 768px){
        text-align: ${props => props.textAlignMobile};
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
const GradientBorder = styled.div`
    border-width: 2px;
    border-left: 0;
    border-style: solid;
    border-image: linear-gradient(to left, #9A7E4E, rgba(0, 0, 0, 0)) 1 27%;
    margin: ${props => props.setMargin};
`

export {EvenlyDiv, FlexColumn, TemporaryBr, GradientButton, StyledButton, 
    FlexColumnCenter, YellowText, WhiteTexts, BoldMontserrat, MobileBr,
    BlackTexts, FlexRow, GradientBorder}