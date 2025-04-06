import './styles.css';

export default function Layout({ children, styles={}}) {
  return (
    <div style={styles} className='layout-container'>
        {children} 
    </div>
  )
}
