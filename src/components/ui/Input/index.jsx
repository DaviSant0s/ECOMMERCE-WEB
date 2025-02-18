import './styles.css';

const Input = ({ type = 'text', placeholder = '', value, onChange, onClick }) => {
    return (
        <div className='inputContainer'>
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className="input"
            />

            <span onClick={onClick} class="material-symbols-outlined">
                search
            </span>

        </div>
    );
};

export default Input;