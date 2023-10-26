import { styled } from 'styled-components'
import { useEffect, useState } from 'react'
import EstilosGlobais from './components/EstilosGlobais'
import Header from './components/Header'
import BarraLateral from './components/BarraLateral'
import Banner from './components/Banner'
import Galeria from './components/Galeria'
import backgroundImage from './assets/banner.png'
import fotos from './fotos.json'
import populares from './populares.json'
import ModalZoom from './components/ModalZoom'
import Footer from './components/Footer'

const FundoGradiente = styled.div`
    background: linear-gradient(175deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
    width: 100%;
    min-height: 100vh;
`

const AppContainer = styled.main`
    width: 1440px;
    max-width: 100%;
    margin: 0 auto;
    padding: 0 24px;
`

const MainContainer = styled.div`
    display: flex;
    gap: 24px;
`

const ConteudoGaleria = styled.section`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
`

const App = () => {

    const [fotosDaGaleria, setFotosDaGaleria] = useState([])
    const [fotoSelecionada, setFotoSelecionada] = useState(null)
    const [texto, setTexto] = useState('O que você procura?')
    const [pesquisa, setPesquisa] = useState('')
    const [tagId, setTagId] = useState(0)

    const aoFocar = () => texto !== '' ? setTexto('') : setTexto('O que você procura?')

    const aoDigitar = (valor) => {
        setPesquisa(valor)
    }

    const enviaBusca = (id) => {
        setTagId(id)
    }

    useEffect(() => {
        if (pesquisa && pesquisa.length >= 3) {
            fetch(`http://localhost:8080/fotos?titulo=${pesquisa}`)
                .then(resposta => resposta.json())
                .then(dados => setFotosDaGaleria(dados))
        } else if (tagId && tagId > 0) {
            fetch(`http://localhost:8080/fotos?tagId=${tagId}`)
                .then(resposta => resposta.json())
                .then(dados => setFotosDaGaleria(dados))
        } else {
            fetch("http://localhost:8080/fotos")
                .then(resposta => resposta.json())
                .then(dados => setFotosDaGaleria(dados))
        }
    }, [pesquisa, tagId])

    const aoFavoritar = (foto) => {
        if (foto.id === fotoSelecionada?.id) {
            setFotoSelecionada({ ...fotoSelecionada, favorito: !fotoSelecionada.favorito })
        }
        setFotosDaGaleria(fotosDaGaleria.map(fotoAtual => {
            return ({ ...fotoAtual, favorito: fotoAtual.id === foto.id ? !foto.favorito : fotoAtual.favorito })
        }))
    }

    const aoFechar = (e) => {
        e.preventDefault()
        setFotoSelecionada(null)
    }

    return (
        <FundoGradiente>
            <EstilosGlobais />
            <AppContainer>
                <Header placeholder={texto} aoFocar={aoFocar} aoDigitar={aoDigitar} />
                <MainContainer>
                    <BarraLateral />
                    <ConteudoGaleria>
                        <Banner bannerTexto="A galeria mais completa de fotos do espaço!" backgroundImage={backgroundImage} />
                        <Galeria
                            aoFotoSelecionada={(foto) => setFotoSelecionada(foto)}
                            fotos={fotosDaGaleria}
                            populares={populares}
                            aoFavoritar={aoFavoritar}
                            enviaBusca={enviaBusca}
                        />
                    </ConteudoGaleria>
                </MainContainer>
            </AppContainer>
            <Footer />
            <ModalZoom foto={fotoSelecionada} aoFavoritar={aoFavoritar} aoFechar={aoFechar} fecharModal={aoFechar} />
        </FundoGradiente>
    )
}

export default App
