import './styles.css';

export default function Price({children}) {
  return (
    <div className='price-container'>
        <span className='floating-price'>R$</span>
            {children}    
        <span className='floating-price'>00</span>
    </div>
  )
}
