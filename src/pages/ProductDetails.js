import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import Container from '../components/common/Container';
import ProductBtn from '../components/common/ProductBtn';
import ProductCarousel from '../components/Products/ProductCarousel';

const ProductDetails = () => {
    const { productId } = useParams();
    const { products } = useSelector((state) => state);

    const {
        id,
        name,
        title,
        price,
        available,
        categories,
        description,
        images,
    } = products.find((item) => item.id === Number(productId));

    return (
        <article className="mt-12">
            <Container>
                <div className="grid grid-cols-2 gap-4">
                    <div className="relative">
                        <ProductCarousel name={name} images={images} />
                        <Link
                            className="absolute left-10 top-0 text-green-600 flex justify-start items-center"
                            to="/"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 mr-3"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path d="M8.445 14.832A1 1 0 0010 14v-2.798l5.445 3.63A1 1 0 0017 14V6a1 1 0 00-1.555-.832L10 8.798V6a1 1 0 00-1.555-.832l-6 4a1 1 0 000 1.664l6 4z" />
                            </svg>
                            <span className="inline-block mt-px">Back</span>
                        </Link>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold">{name}</h3>
                        <p className="text-gray-500 mt-3 mb-5">{title}</p>
                        <p className="text-gray-500">{description}</p>
                        <h3 className="text-3xl font-semibold text-green-600 my-8">
                            ${price}
                        </h3>
                        <div className="flex justify-start items-center mb-5">
                            <ProductBtn className="w-2/4" id={id} />
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
