import { styled } from "styled-components"
import CampoTexto from "../CampoTexto"

const StyledHeader = styled.header`
    padding: 60px 0;
    display: flex;
    justify-content: space-between;
    img {
        max-width: 212px;
    }
`

const Header = ({ placeholder, aoFocar, aoDigitar }) => {
    return (<StyledHeader>
        <img src="./images/logo.png" alt="" />
        <CampoTexto placeholder={placeholder} aoFocar={aoFocar} aoDigitar={aoDigitar} />
    </StyledHeader>)
}

export default Header
