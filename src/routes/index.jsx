import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from '../pages/Home'
import ProductList from '../pages/ProductList';

export const RoutesApp = () => {
    return(

        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/:slug' element={<ProductList/>}/>
        </Routes>

    )
}

{/*<Route path='/products' element={<PrivateRoute element={Products}/>}/>*/}