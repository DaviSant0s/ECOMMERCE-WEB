import { useEffect, useState } from 'react';
import './styles.css';
import { getProductsBySlug } from '../../api/productsApi';
import { useParams } from 'react-router-dom';
import { useProducts } from '../../context/productsContext/productsProvider';
import Layout from '../../components/Layout';
import ProductCard from '../../components/ui/productCard';
import emptyListProducts from '../../assets/utils-images/empty-list-products.png'

const ProductList = () => {

    const [under_250, setUnder_250] = useState(false);
    const [between_250_and_500, setBetween_250_and_500] = useState(false);
    const [between_500_and_1000, setBetween_500_and_1000] = useState(false);
    const [between_1000_and_2000, setBetween_1000_and_2000] = useState(false);
    const [over_2000, setOver_2000] = useState(false);

    const [filteredProducts, setFilteredProducts] = useState([]);

    console.log('filtro', filteredProducts)

    const { slug } = useParams();
    const {productState, productDispatch} = useProducts();

    console.log(productState)

    useEffect(()=> {
        getProductsBySlug(productDispatch, slug);
    }, []);

    useEffect(() => {
        setFilteredProducts(productState.products);
    }, [productState.products]);

    const applyFilters = () => {
        const selected = [];

        if (under_250) selected.push(...productState.productsByPrice.under_250);
        if (between_250_and_500) selected.push(...productState.productsByPrice.between_250_and_500);
        if (between_500_and_1000) selected.push(...productState.productsByPrice.between_500_and_1000);
        if (between_1000_and_2000) selected.push(...productState.productsByPrice.between_1000_and_2000);
        if (over_2000) selected.push(...productState.productsByPrice.over_2000);

        if (
            !under_250 &&
            !between_250_and_500 &&
            !between_500_and_1000 &&
            !between_1000_and_2000 &&
            !over_2000
        ) {
            setFilteredProducts(productState.products);
        } else {
            setFilteredProducts(selected);
        }
    }

    return (
        <Layout>
            <div className='productList-container'>

                <div className='slug-name-category-container'><span>{ slug }</span></div>

                <div className='filter-products-by-price-container'>

                    <h2 className="text-lg font-semibold">Filtrar por preço</h2>

                    <div className='filter-products-by-price-content'>
                        <label className="label-checkbox-product-by-price">
                            <input
                            type="checkbox"
                            checked={under_250}
                            onChange={(e) => setUnder_250(e.target.checked)}
                            />
                            Abaixo de R$250
                        </label>
                        <label className="label-checkbox-product-by-price">
                            <input
                            type="checkbox"
                            checked={between_250_and_500}
                            onChange={(e) => setBetween_250_and_500(e.target.checked)}
                            />
                            R$250 - R$500
                        </label>
                        <label className="label-checkbox-product-by-price">
                            <input
                            type="checkbox"
                            checked={between_500_and_1000}
                            onChange={(e) => setBetween_500_and_1000(e.target.checked)}
                            />
                            R$500 - R$1000
                        </label>
                        <label className="label-checkbox-product-by-price">
                            <input
                            type="checkbox"
                            checked={between_1000_and_2000}
                            onChange={(e) => setBetween_1000_and_2000(e.target.checked)}
                            />
                            R$1000 - R$2000
                        </label>
                        <label className="label-checkbox-product-by-price">
                            <input
                            type="checkbox"
                            checked={over_2000}
                            onChange={(e) => setOver_2000(e.target.checked)}
                            />
                            Acima de R$2000
                        </label>
                        <button
                            onClick={applyFilters}
                            className="mt-2 px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
                        >
                            Aplicar filtros
                        </button>
                    </div>
                </div>

                <div className='grid-product-list'>
                    {filteredProducts.length > 0 ? 

                        filteredProducts.map((product) => (
                            <div key={product.id}>
                                <ProductCard price={product.price} name={product.name} image={product.Pictures[0].img}/>
                            </div>
                        ))

                        :

                        <div className='empty-product-list'>
                            <img src={emptyListProducts} alt="" />
                            <span>Nenhum produto</span>
                            <span>encontrado</span>
                        </div>
                    
                    }

                </div>
            </div>
        </Layout>
    );
};

export default ProductList;