import React from 'react'
import './Home.css'
import Product from './Product'
function Home() {
    return (
        <div className="home">
            <img className="home__image"
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
            />
        <Product 
        id="f"
        title="iPhone 11"
        price={999.99}
        rating={5}
        image="http://pngimg.com/uploads/iphone_11/iphone_11_PNG39.png"
        />

        </div>
    )
}

export default Home
