import './App.css'
import Header from './components/Header'
import MenuHeader from './components/MenuHeader'
import { RoutesApp } from './routes'

function App() {

  return (
    <div className='appContainer'>
      <Header/>
      <MenuHeader/>
      <RoutesApp/>
    </div>
  )
}

export default App
