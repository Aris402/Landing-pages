import styled from "styled-components"

const GrowthSec = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 3em 0;
`

export default function Growth(){
    return (
        <GrowthSec>
            <img
                src="./images/growth.webp"
                alt="Gráfico de crescimento da clínica com a De Pontes"
                width="1013"
            />
        </GrowthSec>
    )
}