import styled from 'styled-components'

const RedDiv = styled.div`
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%);
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    color: #fff;
    text-align: center;
    padding: 1rem;
`
const GradientHeader = styled.header`
    background-color: #B10000;
`

export default function Hero(){
    return(
        <section>
            <GradientHeader>
                <RedDiv>
                    <p>Atenção: O que você verá aqui é exclusivo para donos de clínicas e consultórios odontológicos!</p>
                </RedDiv>
                
            </GradientHeader>
        </section>
    )
}