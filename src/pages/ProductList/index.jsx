import { useEffect } from 'react';
import './styles.css';
import { getProductsBySlug } from '../../api/productsApi';
import { useParams } from 'react-router-dom';
import { useProducts } from '../../context/productsContext/productsProvider';

const ProductList = () => {

    const { slug } = useParams();
    const {productState, productDispatch} = useProducts();
    console.log(productState)

    useEffect(()=> {
        getProductsBySlug(productDispatch, slug);
    }, []);

    return (
        <div className='productList-container'>

            <div className='slug-name-category-container'><span>{slug}</span></div>

            <h1>Product List</h1>
            <p>Here you can browse all available products.</p>

        </div>
    );
};

export default ProductList;