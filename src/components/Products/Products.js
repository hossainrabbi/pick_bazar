import React from 'react';
import { productsData } from '../../data/productsData';
import Container from '../common/Container';
import ProductCart from './ProductCart';

const Products = () => {
    return (
        <section className="bg-gray-100 py-10">
            <Container>
                <div className="grid grid-cols-4 gap-4">
                    {productsData.map((item) => (
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
