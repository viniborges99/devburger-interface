import Offers from '../../assets/ofertas.png'
import React, { useEffect, useState } from 'react'
import Carousel from 'react-elastic-carousel'
import cesta from '../../assets/Vector.svg'
import { formatCurrency } from '../../util/formatCurrancy'
import { Container, CategoryImg, ContainerItems, Image, Button } from './styles'
import { api } from '../../services/api';




export function OffersCarousel() {
    const [offers, setOffers] = useState([]);


    useEffect(() => {
        async function loadOffers() {
            const { data } = await api.get('products')

            const onlyOffers = data.filter(product => product.offer)


            setOffers(onlyOffers)//para mostrar os produtos com offers true

        }
        loadOffers()

    }, [])

    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 400, itemsToShow: 2 },
        { width: 600, itemsToShow: 3 },
        { width: 900, itemsToShow: 4 },
        { width: 1300, itemsToShow: 5 }
    ]

    return (
        <Container>
            <CategoryImg src={Offers} alt="Ofertas" />
            <Carousel itemsToShow={3} style={{ width: '90%' }} breakPoints={breakPoints}>
                {
                    offers.map(product => (
                        <ContainerItems key={product.id}>
                            <Image src={product.url} alt="foto do produto" />
                            <p>{product.name}</p>
                            <p style={{ color: 'black' }}>{formatCurrency(product.price)}</p>
                            <Button><img src={cesta} a /></Button>

                        </ContainerItems>
                    ))
                }
            </Carousel>

        </Container >

    )

}