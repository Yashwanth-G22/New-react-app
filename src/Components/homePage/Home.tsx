import React, { useEffect } from 'react';
import './Home.css'
import { Link, Outlet } from 'react-router-dom';
import Products from '../productPage/Products';
export default function Home () {

    return (
        <>
            <div>
                <img src="https://images.pexels.com/photos/9546375/pexels-photo-9546375.jpeg?auto=compress&cs=tinysrgb&w=600" alt='Nike shoe pic'  className='home-image'/>
            </div>
            <div className='about-item'>
                <div className='information-about-item'>
                    <p>Nike, Inc is an American multinational corporation that is engaged in the design, development, 
                        manufacturing, and worldwide marketing and sales of footwear, apparel, equipment, accessories, and services.
                     The company is headquartered near Beaverton, Oregon, in the Portland metropolitan area.It is the
                      world's largest supplier of athletic shoes and apparel and a major manufacturer of sports equipment, 
                      with revenue in excess of US$46 billion in its fiscal year 2022.

`                   The company was founded on January 25, 1964, as "Blue Ribbon Sports", by Bill Bowerman and Phil Knight, 
                    and officially became Nike, Inc. on May 30, 1971. The company takes its name from Nike, the Greek goddess 
                    of victory. Nike markets its products under its own brand, as well as Nike Golf, Nike Pro, Nike+, Air 
                    Jordan, Nike Blazers, Air Force 1, Nike Dunk, Air Max, Foamposite, Nike Skateboarding, Nike and
                     subsidiaries including Air Jordan and Converse. Nike also owned Bauer Hockey from 1995 to 2008, and 
                     previously owned Cole Haan, Umbro, and Hurley International In addition to manufacturing sportswear
                      and equipment, the company operates retail stores under the Niketown name. Nike sponsors many high-profile
                       athletes and sports teams around the world, with the highly recognized trademarks of "Just Do It" and 
                       the Swoosh logo.On July 23, 2019, a pair of Nike Inc. running shoes sold for $437,500 at a Sotheby's auction.
                        The so-called "Moon Shoes" were designed by Nike co-founder and track coach Bill Bowerman for runners 
                        participating in the 1972 Olympics trials. The buyer was Miles Nadal, a Canadian investor and car collector,
                         who had just paid $850,000 for a group of 99 rare of limited collection pairs of sport shoes</p>
                </div>
                <div>
                    <Link to='/product'><img src='https://images.pexels.com/photos/5413291/pexels-photo-5413291.jpeg?auto=compress&cs=tinysrgb&w=600' alt='' height='500px' width= '500px' className='about-image'/></Link>
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
