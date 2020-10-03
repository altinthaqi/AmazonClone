import React from 'react'
import './Home.css'
import Product from './Product'
function Home() {
    return (
        <div className="home">
            <img className="home__image"
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
            />
        <div className="home__row">
        <Product 
        id="f"
        title="iPhone 11 Pro Max (64GB, Gray)"
        price={999.99}
        rating={5}
        image="http://pngimg.com/uploads/iphone_11/iphone_11_PNG39.png"
        />

        <Product 
        id="f"
        title="Fitbit Charge 3 Fitnes Activity Tracker"
        price={114.88}
        rating={4}
        image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
        />
        </div>
        
        <div className="home__row">
        <Product 
        id="f"
        title="iHome Alexa Built-in Bluetooth Speaker Portable Wireless"
        price={59.99}
        rating={4}
        image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
        />

        <Product 
        id="f"
        title="Home Depot Gas Power Washer"
        price={199.99}
        rating={3}
        image="https://pencilone.com//wp-content/uploads/2018/06/Side-view.jpg"
        />

        <Product 
        id="f"
        title="Dabbawalla Bags Preschool Backpack, Vintage Flyer"
        price={42.99}
        rating={4}
        image="https://pencilone.com//wp-content/uploads/2018/06/Backview.jpg"
        />
        </div>
        <Product 
        id="f"
        title="8K Ultra HD Nano Cell Smart TV"
        price={4999.99}
        rating={5}
        image="https://images-na.ssl-images-amazon.com/images/I/81sFKj4MtyL._AC_SL1500_.jpg"
        />


        
        </div>
    )
}

export default Home
