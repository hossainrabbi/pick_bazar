import React from 'react';
import { useParams } from 'react-router-dom';
import Button from '../components/common/Button';
import Container from '../components/common/Container';
import ProductBtn from '../components/common/ProductBtn';
import { productsData } from '../data/productsData';

const ProductDetails = () => {
    const { id } = useParams();

    const { name, title, price, available, categories, description, images } =
        productsData.find((item) => item.id === Number(id));

    return (
        <article className="mt-12">
            <Container>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Tempora, aperiam et atque dicta pariatur recusandae vero
                        consequuntur aliquam? Error necessitatibus omnis saepe
                        eum harum quod explicabo commodi voluptatem corrupti
                        tempora?
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold">{name}</h3>
                        <p className="text-gray-500 mt-3 mb-5">{title}</p>
                        <p className="text-gray-500">{description}</p>
                        <h3 className="text-3xl font-semibold text-green-600 my-8">
                            ${price}
                        </h3>
                        <div className="flex justify-start items-center mb-5">
                            <ProductBtn className="w-2/4" />
                            <span className="text-gray-500 ml-9">
                                {available} pieces available
                            </span>
                        </div>
                        <hr />
                        <div className="flex justify-start items-center mt-6">
                            <strong>Categories:</strong>
                            {categories.map((item) => (
                                <button
                                    className="border border-gray-200 text-gray-500 hover:border-green-600 hover:text-green-600 transition-all px-2 py-0.5 rounded-md ml-3"
                                    key={item}
                                >
                                    {item}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </article>
    );
};

export default ProductDetails;
