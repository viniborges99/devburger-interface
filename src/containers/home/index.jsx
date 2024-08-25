import HomeLogo from '../../assets/logo-home.png'
import { CategoryCarousel } from '../../components/CategoryCarousel'
import { OffersCarousel } from '../../components/OffersCarousel'

import { Container, HomeImg } from './styles'



export function Home() {

    return (
        <Container>
            <HomeImg src={HomeLogo} alt='logo da home' />
            <CategoryCarousel />
            <OffersCarousel />
        </Container>
    )
}