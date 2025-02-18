import './styles.css';
import logo from '../../assets/logo.png'
import Input from '../ui/Input';

const Header = () => {
    return (
        <header className="headerConatiner">
            <div className='logo-input-search-container'>
                <div className='logo-container'>
                    <img src={logo} alt="" />
                </div>
                <Input placeholder='Buscar produtos, marcas e muito mais...'/>
            </div>

            <div className='items-header-container'>
                <div className='signin-or-signup-welcome'>
                    <i class='bx bx-user'></i>
                    <div>
                        <span className='welcome-title'>Bem-vindo</span>
                        <span className='signin-or-signup'>Entre ou cadastre-se</span>
                    </div>
                </div>
                <i class='bx bx-cart-alt' ></i>
            </div>
            
        </header>
    );
};

export default Header;