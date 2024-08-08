import Category from '../../assets/categori.png'
import React, { useEffect, useState } from 'react'
import Carousel from 'react-elastic-carousel'

import { Container, CategoryImg } from './styles'
import { api } from '../../services/api'




export function CategoryCarousel() {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        async function loadCategories() {
            const { data } = await api.get('categories')
            setCategories(data)

        };

        loadCategories()

    }, [])


}