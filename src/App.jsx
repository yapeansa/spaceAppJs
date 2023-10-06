import { styled } from 'styled-components'
import { useState } from 'react'
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

    const [fotosDaGaleria, setFotosDaGaleria] = useState(fotos)
    const [fotoSelecionada, setFotoSelecionada] = useState(null)

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
                <Header />
                <MainContainer>
                    <BarraLateral />
                    <ConteudoGaleria>
                        <Banner bannerTexto="A galeria mais completa de fotos do espaço!" backgroundImage={backgroundImage} />
                        <Galeria
                            aoFotoSelecionada={(foto) => setFotoSelecionada(foto)}
                            fotos={fotosDaGaleria}
                            populares={populares}
                            aoFavoritar={aoFavoritar}
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
