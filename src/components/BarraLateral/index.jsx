import { styled } from "styled-components"
import ItemNavegacao from "./ItemNavegacao"

const ListaEstilizada = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    min-width: 212px;
    a {
        text-decoration: none;
        color: #FFFFFF;
    }
`

const BarraLateral = () => {

    const menuTexts = [
        {
            texto: 'Início',
            iconeAtivo: 'icons/home-ativo.png',
            iconeInativo: 'icons/home-inativo.png',
            ativo: true
        },
        {
            texto: 'Mais vistas',
            iconeAtivo: 'icons/mais-vistas-ativo.png',
            iconeInativo: 'icons/mais-vistas-inativo.png',
            ativo: false
        },
        {
            texto: 'Mais curtidas',
            iconeAtivo: 'icons/mais-curtidas-ativo.png',
            iconeInativo: 'icons/mais-curtidas-inativo.png',
            ativo: false
        },
        {
            texto: 'Novas',
            iconeAtivo: 'icons/novas-ativo.png',
            iconeInativo: 'icons/novas-inativo.png',
            ativo: false
        },
        {
            texto: 'Surpreenda-me',
            iconeAtivo: 'icons/surpreenda-me-ativo.png',
            iconeInativo: 'icons/surpreenda-me-inativo.png',
            ativo: false
        }
    ]

    return (
        <aside>
            <nav>
                <ListaEstilizada>
                    { menuTexts.map(item => <ItemNavegacao
                        iconeAtivo={ item.iconeAtivo }
                        iconeInativo={ item.iconeInativo }
                        ativo={ item.ativo }
                        key={ item.texto }
                    >
                        { item.texto }
                    </ItemNavegacao>) }
                </ListaEstilizada>
            </nav>
        </aside>
    )
}

export default BarraLateral
