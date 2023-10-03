import { styled } from 'styled-components'

const Input = styled.input`
    width: 602px;
    height: 56px;
    box-sizing: border-box;
    display: inline-flex;
    padding: 12px 16px;
    outline: none;
    align-items: center;
    gap: 365px;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    color: #D9D9D9;
    font-family: Gandhi Sans;
    border-radius: 10px;
    border: 2px solid var(--Degrad-com-rosa, #C98CF1);
    background: transparent url('icons/search.png') no-repeat 97% center;
    &::placeholder {
        color: #D9D9D9;
    }
`

const CampoTexto = () => {
    return (<Input placeholder="O que você procura?"></Input>)
}

export default CampoTexto
