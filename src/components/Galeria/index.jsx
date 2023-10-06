import { styled } from "styled-components"
import Titulo from "../Titulo"
import Tags from "./Tags"
import Populares from "./Populares"
import Imagem from "./Imagem"

const GaleriaContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`

const SecaoFluida = styled.section`
    flex: 1;
    margin-right: 24px;
`

const FotosContainer = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 24px;
    flex-wrap: wrap;
`

const Galeria = ({ fotos = [], aoFotoSelecionada, populares, aoFavoritar }) => {
    return (
        <>
            <Tags />
            <GaleriaContainer>
                <SecaoFluida>
                    <Titulo>Navegue pela galeria</Titulo>
                    <FotosContainer>
                        {fotos.map(foto => <Imagem
                            aoZoomSolicitado={aoFotoSelecionada}
                            key={foto.id}
                            foto={foto}
                            aoFavoritar={aoFavoritar} />)
                        }
                    </FotosContainer>
                </SecaoFluida>
                <Populares populares={populares} />
            </GaleriaContainer>
        </>
    )
}

export default Galeria
