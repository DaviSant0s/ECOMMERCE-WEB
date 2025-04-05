import { useEffect } from 'react';
import './styles.css';
import { getProductsBySlug } from '../../api/productsApi';
import { useParams } from 'react-router-dom';

const ProductList = () => {

    const { slug } = useParams();

    useEffect(()=> {
        getProductsBySlug(slug);
    }, []);

    return (
        <div>
            <h1>Product List</h1>
            <p>Here you can browse all available products.</p>
        </div>
    );
};

export default ProductList;