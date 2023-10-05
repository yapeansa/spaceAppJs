import { styled } from "styled-components"
import Titulo from "../Titulo"
import Tags from "./Tags"
import Populares from "./Populares"
import Imagem from "./Imagem"

const GaleriaContainer = styled.div`
    display: flex;
`

const SecaoFluida = styled.section`
    flex-grow: 1;
`

const FotosContainer = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 24px;
    flex-wrap: wrap;
`

const Galeria = ({ fotos = [] }) => {
    return (
        <>
            <Tags />
            <GaleriaContainer>
                <SecaoFluida>
                    <Titulo>Navegue pela galeria</Titulo>
                    <FotosContainer>
                        { fotos.map( foto => <Imagem key={foto.id} foto={foto} /> ) }
                    </FotosContainer>
                </SecaoFluida>
                <Populares />
            </GaleriaContainer>
        </>
    )
}

export default Galeria
