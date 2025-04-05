import './styles.css';
import logo from '../../assets/logo.png'
import Input from '../ui/Input';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="headerConatiner">
            <div className='logo-input-search-container'>
                <Link to='/'>
                    <div className='logo-container'>
                        <img src={logo} alt="" />
                    </div>
                </Link>
                <Input placeholder='Buscar produtos, marcas e muito mais...'/>
            </div>

            <div className='items-header-container'>
                <div className='signin-or-signup-welcome'>
                    <i className='bx bx-user'></i>
                    <div>
                        <span className='welcome-title'>Bem-vindo</span>
                        <span className='signin-or-signup'>Entre ou cadastre-se</span>
                    </div>
                </div>
                <i className='bx bx-cart-alt' ></i>
            </div>
            
        </header>
    );
};

export default Header;