import React from 'react'
import { useRoutes } from 'react-router-dom'
import About from '../about/About'
import Cart from '../cart/Cart'
import Contact from '../contact/Contact'
import Home from '../home-page/Home'
import Admin from '../login-pages/Admin'
import Login from '../login-pages/Login'
import Products from '../product-page/Products'

export default function ApplicationRoutes() {
    let Routes = useRoutes([
        {
            path: '/',
            element: <Home />,
        },
        {
            path: 'contact',
            element: <Contact/>
        },
        {
            path: 'product',
            element: <Products/>
        },
        {
            path: 'about',
            element: <About/>
        },
        {
            path: 'cart',
            element: <Cart/>
        },
        {
            path: 'login',
            element: <Login/>,
        },
        {
            path: 'admin',
            element: <Admin/>
        }
    ])
    return Routes;
}
