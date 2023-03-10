import styled from "styled-components";

const SmallTexts = styled.p`
    color: #F5E4F2;
    font-family: 'glacial';
    max-width: 487px;
    font-size: 24px;

    @media screen and (max-width: 768px){
        font-size: 18px;
    }
`
const ButtonStyle1 = styled.a`
    padding: 0.8em 2em;
    background-color: #41C70D;
    color: #fff;
    font-size: 22px;
    border-radius: 6px;
    font-family: 'glacial';
    cursor: pointer;
    transition: 0.5s;
    text-decoration: none;

    &:hover{
        transition: 0.5s;
        background-color: #76ce53;
    }

    @media screen and (max-width: 768px){
        font-size: 18px;
    }
`
const TemporaryBr = styled.br`
    display:block;
    @media screen and (max-width: 768px){
        display: none;
    }
`
const FlexRowCenter = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export {TemporaryBr, SmallTexts, ButtonStyle1, FlexRowCenter}