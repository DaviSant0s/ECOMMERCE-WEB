import './styles.css';
import banner from '../../assets/banners/banner_blackfriday.png'
import Layout from '../../components/Layout';

const Home = () => {
    return (
        <div className='home-container'>
            <div className='banner-container'>
                <img src={banner} alt="" />
            </div>

            <Layout>

            </Layout>
        </div>
    );
};

export default Home;