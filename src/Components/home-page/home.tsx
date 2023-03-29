import React, { useEffect } from 'react';
import './home.css'
import { Link, Outlet } from 'react-router-dom';
import Products from '../product-page/Products';
import {home} from "../../../application.json"
export default function Home () {

    return (
        <>
            <div>
                <img src="https://images.pexels.com/photos/9546375/pexels-photo-9546375.jpeg?auto=compress&cs=tinysrgb&w=600" alt='Nike shoe pic'  className='home-image'/>
            </div>
            <div className='about-item'>
                <div className='information-about-item'>
                    <p>{home.infoNike}</p>
                </div>
                <div>
                    <Link to='/product'><img src='https://images.pexels.com/photos/5413291/pexels-photo-5413291.jpeg?auto=compress&cs=tinysrgb&w=600' alt=''  className='about-image'/></Link>
                </div>
            </div>
            <div>
                <Link to='/product'><Products/></Link>
            </div>
            <div>
                <Outlet/>
            </div>
        </>
    )
}
