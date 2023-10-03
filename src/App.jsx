import { styled } from 'styled-components'
import EstilosGlobais from './components/EstilosGlobais'
import Header from './components/Header'
import BarraLateral from './components/BarraLateral'
import Banner from './components/Banner'
import Galeria from './components/Galeria'
import backgroundImage from './assets/banner.png'

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

function App() {
    return (
        <FundoGradiente>
            <EstilosGlobais />
            <AppContainer>
                <Header />
                <MainContainer>
                    <BarraLateral />
                    <ConteudoGaleria>
                        <Banner bannerTexto="A galeria mais completa de fotos do espaço!" backgroundImage={backgroundImage} />
                        <Galeria />
                    </ConteudoGaleria>
                </MainContainer>
            </AppContainer>
        </FundoGradiente>
    )
}

export default App
