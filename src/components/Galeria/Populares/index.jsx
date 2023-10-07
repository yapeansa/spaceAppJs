import { styled } from "styled-components"
import Titulo from "../../Titulo"

const PopularesContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    img {
        width: 212px;
        height: 158px;
        border-radius: 20px;
    }
    button {
        font-size: 20px;
        color: #FFF;
        font-weight: 700;
        border-radius: 10px;
        border: 2px solid #C98CF1;
        background-color: transparent;
        width: 208px;
        height: 56px;
        cursor: pointer;
        transition: .3s all ease;
        &:hover {
            background: #C98CF1;
        }
    }
`

const Populares = ({ populares }) => {
    return (
        <PopularesContainer>
            <Titulo $alinhamento="center">Populares</Titulo>
            { populares.map(imagem => <img key={imagem.id} src={imagem.caminho} alt="Popular" />) }
            <button>Ver mais</button>
        </PopularesContainer>
    )
}

export default Populares
