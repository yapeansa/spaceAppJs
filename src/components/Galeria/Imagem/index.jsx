import { styled } from "styled-components"
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai"
import { CgExpand } from "react-icons/cg"
import { useState } from "react"

const Figura = styled.figure`
    max-width: 448px;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    color: #FFF;
    img {
        border-radius: 20px 20px 0 0;
        width: 100%;
        height: 256px;
    }
    figcaption {
        height: 80px;
        background-color: #001634;
        border-radius: 0 0 20px 20px;
        padding: 16px;
        h3 {
            margin: 0;
            font-size: 20px;
            font-weight: 700;
        }
        footer {
            display: grid;
            grid-template-columns: 2fr auto auto;
            align-items: center;
            gap: 16px;
            p {
                margin: 0;
                font-size: 16px;
                font-weight: 400;
            }
            button {
                background: transparent;
                border: none;
                cursor: pointer;
            }
        }
    }

`

const Imagem = ({ foto }) => {

    const [favoritar, setFavoritar] = useState(false)

    const aoFavoritar = () => {
        setFavoritar(() => !favoritar)
    }

    return (
        <Figura>
            <img src={foto.path} alt={foto.titulo} />
            <figcaption>
                <h3>{foto.titulo}</h3>
                <footer>
                    <p>{foto.fonte}</p>
                    <button onClick={aoFavoritar}>
                        { !favoritar ? <AiOutlineHeart size={25} color="white" /> : <AiFillHeart size={25} color="white" /> }
                    </button>
                    <button><CgExpand size={30} color="white" /></button>
                </footer>
            </figcaption>
        </Figura>)
}

export default Imagem
