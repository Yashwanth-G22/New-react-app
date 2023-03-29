import React from 'react'
import { useRoutes } from 'react-router-dom'
import About from '../about/about'
import Cart from '../cart/cart'

import Home from '../home-page/home'
import Admin from '../login-pages/admin-pages/admin'
import Login from '../login-pages/login'
import Products from '../product-page/Products'
import SignIn from '../login-pages/signIn'
export default function ApplicationRoutes() {
    let Routes = useRoutes([
        {
            path: '/',
            element: <Home />,
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
        },
        {
            path : 'signin',
            element : <SignIn/>
        }
    ])
    return Routes;
}
