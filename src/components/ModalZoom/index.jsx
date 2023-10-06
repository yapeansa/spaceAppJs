import { styled } from "styled-components"
import Imagem from "../Galeria/Imagem"
import { AiOutlineClose } from "react-icons/ai"

const Overlay = styled.div`
    background-color: rgba(0, 0, 0, 0.7);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    dialog {
        position: absolute;
        top: 94px;
        background: transparent;
        border: 2px solid #FFF;
        padding: 0;
        border: none;
        img {
            width: 1156px;
            height: 660px;
        }
        form {
            button {
                background: transparent;
                border: none;
                position: absolute;
                top: 24px;
                right: 24px;
            }
        }
    }
`

const ModalZoom = ({ foto }) => {
    return (
        <>
            {foto && <Overlay>
                <dialog open={!!foto}>
                    <Imagem foto={foto} expandida={true} />
                    <form method="dialog">
                        <button><AiOutlineClose color="white" size={25} /></button>
                    </form>
                </dialog>
            </Overlay>}
        </>
    )
}

export default ModalZoom
