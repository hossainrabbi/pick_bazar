import React from 'react';
import { useSelector } from 'react-redux';
import Container from '../common/Container';
import ProductCart from './ProductCart';

const Products = () => {
    const { products } = useSelector((state) => state);

    return (
        <section className="bg-gray-100 py-10">
            <Container>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {products.map((item) => (
                        <div key={item.id}>
                            <ProductCart {...item} />
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default Products;
