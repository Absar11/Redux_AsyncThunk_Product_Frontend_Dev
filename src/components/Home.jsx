import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';
import { fetchProducts } from '../features/productSlice';
import { addProduct } from '../features/cartSlice';
import { toast } from 'react-hot-toast';

function Home() {
    const { products, isLoading, error } = useSelector((state) => state.product)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    const handleAddToCart = (product) => {
        dispatch(addProduct(product));
        toast.success(`Item added to cart`);
    };

    if (isLoading) {
        return <p>Products are Loading.....</p>;
    }

    if (error) {
        return <p>Error to fetch products</p>;
    }

    return (
        <div className="home-container">
            <style>{`
                .home-container {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                    gap: 1.5rem;
                    padding: 2rem;
                    background-color: #f4f4f4;
                }

                .product-card {
                    background-color: #fff;
                    border: 1px solid #ddd;
                    border-radius: 8px;
                    padding: 1rem;
                    width: 250px;
                    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
                    transition: transform 0.2s ease;
                }

                .product-card:hover {
                    transform: scale(1.03);
                }

                .product-card h1 {
                    font-size: 1.2rem;
                    margin-bottom: 0.5rem;
                }

                .product-card p {
                    font-size: 0.95rem;
                    margin-bottom: 1rem;
                    color: #555;
                }

                .product-card button {
                    background-color: #007bff;
                    color: white;
                    border: none;
                    padding: 0.5rem 1rem;
                    border-radius: 4px;
                    cursor: pointer;
                }

                .product-card button:hover {
                    background-color: #0056b3;
                }
            `}</style>

            {products && products.length > 0 ? (
                products.map((product, index) => (
                    <div key={index} className="product-card">
                        <h1>{product.title}</h1>
                        <p>{product.description}</p>
                        <button onClick={() => handleAddToCart(product)}>Add Product</button>
                    </div>
                ))
            ) : (
                <p>No products found.</p>
            )}
        </div>
    );
}

export default Home;
