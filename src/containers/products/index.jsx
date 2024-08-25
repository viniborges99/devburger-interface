import { useEffect, useState } from 'react';
import ProductLogo from '../../assets/products-logo.svg'
import { CardProduct } from '../../components/CardProducts';

import { Container, ProductImg, CategoryButton, CategoriesMenu, ProductsContainer } from './styles'
import { api } from '../../services/api';

export function Products() {
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [activeCategory, setActiveCategory] = useState(0);

    useEffect(() => {
        async function loadCategories() {
            const { data } = await api.get('categories')

            const newCategories = [{ id: 0, name: 'Todas' }, ...data]

            setCategories(newCategories);
        }

        async function loadProducts() {
            const { data } = await api.get('products')

            setProducts(data);
        }
        loadProducts();
        loadCategories();
    }, []);

    return (
        <Container>
            <ProductImg src={ProductLogo} alt='logo da home' />
            <CategoriesMenu>
                {categories && categories.map(category => (
                    <CategoryButton
                        type='button'
                        key={category.id}
                        isActiveCategory={activeCategory === category.id}
                        onClick={() => setActiveCategory(category.id)}
                    >
                        {category.name}
                    </CategoryButton>
                ))}
            </CategoriesMenu>
            <ProductsContainer>
                {products && products.map(product => (
                    <CardProduct key={product.id} product={product} />

                ))}

            </ProductsContainer>
        </Container>
    );
}
