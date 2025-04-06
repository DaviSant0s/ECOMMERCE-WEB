import './styles.css';
import phone from '../../../assets/teste/phone.jpg'
import Price from './components/Price';

const ProductCard = ({ price, name}) => {
    return (
        <div className="productCard-container">
            <div className='image-productCard'>
                <img src={phone} alt="" />
            </div>
            <div className='description-productCard'>

                <Price>
                    <span className='price-productCard'>{price}</span>
                </Price>
                    
                <p className='name-product-productCard'>{name}</p>

            </div>
        </div>
    );
};

export default ProductCard;