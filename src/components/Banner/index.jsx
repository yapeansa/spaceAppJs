import { styled } from 'styled-components'

const FundoBanner = styled.div`
    background: url('${ props => props.$backgroundImage }') no-repeat center / cover;
    max-width: 100%;
    display: flex;
    flex-grow: 1;
    min-height: 328px;
    border-radius: 20px;
    align-items: center;
    padding-left: 64px;
`

const TextoBanner = styled.h1`
    font-size: 40px;
    color: #FFF;
    font-weight: 400;
    max-width: 300px;
`

const Banner = ({ bannerTexto, backgroundImage }) => {
    return (
        <FundoBanner $backgroundImage={backgroundImage}>
            <TextoBanner>
                {bannerTexto}
            </TextoBanner>
        </FundoBanner>
    )
}

export default Banner
