import { styled } from "styled-components"

const ContainerFooter = styled.footer`
    width: 100%;
    background: #04244F;
    margin: 73px 0 0;
    display: flex;
    justify-content: center;
    div {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        width: 1440px;
        max-width: 1440px;
        padding: 23px 46px 22px;
        box-sizing: border-box;
        ul {
            margin: 0;
            padding: 0;
            list-style: none;
            display: flex;
            align-items: center;
            gap: 35px;
        }
        p {
            color: #FFF;
            font-size: 16px;
        }
    }
`

const Footer = () => {

    const redes = [
        {
            nome: "Facebook",
            caminho: "./images/sociais/facebook.svg",
            id: 1
        },
        {
            nome: "Twitter",
            caminho: "./images/sociais/twitter.svg",
            id: 2
        },
        {
            nome: "Instagram",
            caminho: "./images/sociais/instagram.svg",
            id: 3
        }
    ]

    return (
        <ContainerFooter>
            <div>
                <ul>
                    {redes.map(rede => <li key={rede.id}><a href=""><img src={rede.caminho} alt={rede.nome} /></a></li>)}
                </ul>
                <p>Desenvolvido por Yago.</p>
            </div>
        </ContainerFooter>
    )
}

export default Footer
