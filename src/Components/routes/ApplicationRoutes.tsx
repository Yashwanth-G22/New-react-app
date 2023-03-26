import React from 'react'
import { useRoutes } from 'react-router-dom'
import About from '../About'
import Cart from '../cart/Cart'
import Contact from '../Contact'
import Home from '../Home'
import Admain from '../loginPages/Admain'
import Login from '../loginPages/Login'
import Products from '../Products'

export default function ApplicationRoutes() {
    let Routes = useRoutes([
        {
            path: '/',
            element: <Home />,
        },
        {
            path: 'contact',
            element: <Contact />
        },
        {
            path: 'product',
            element: <Products />
        },
        {
            path: 'about',
            element: <About />
        },
        {
            path: 'cart',
            element: <Cart />
        },
        {
            path: 'login',
            element: <Login />,
            children: [
                {
                    path: 'admin',
                    element: <Admain />
                }
            ]
        }
    ])
    return (
        <div>

        </div>
    )
}
