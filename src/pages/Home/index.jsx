import './styles.css';
import banner from '../../assets/banners/banner_blackfriday.png'

const Home = () => {
    return (
        <div className='home-container'>
            <div className='banner-container'>
               <img src={banner} alt="" />
            </div>
        </div>
    );
};

export default Home;