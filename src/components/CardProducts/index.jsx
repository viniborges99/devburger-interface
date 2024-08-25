import React from "react";
import PropTypes from 'prop-types'
import { Button } from "../button";
import { Container, Image, ProductName, ProductPrice } from './styles';


export function CardProduct({ product }) {
    return (
        <Container>
            <Image src={product.url} alt="imagem do produto" />
            <ProductName>{product.name}</ProductName>
            <ProductPrice>{product.price}</ProductPrice>
            <Button>Adicionar</Button>
        </Container>
    )

}

CardProduct.propTypes = {
    product: PropTypes.object
}
