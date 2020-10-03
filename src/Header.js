import React from 'react'
import "./Header.css"
import { Link } from "react-router-dom";
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
function Header() {
    return (
        <nav className="header">
            
            <Link to = "/">
            <img 
            className="header__logo" 
            src = "http://pngimg.com/uploads/amazon/amazon_PNG25.png"/>
            </Link>
            
            <div className="header__search">
                <input type="text" className="header__searchInput" />
                <SearchIcon className="header__searchIcon"/>
            </div>

            <div className="header__nav">
                
                {/* link 1*/}
                <Link to="/login" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Hello There</span>
                        <span className="header__optionLineTwo">Sign In</span>
                    </div>
                </Link> 
                
                {/* link 2*/}
                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Returns</span>
                        <span className="header__optionLineTwo">& Orders</span>
                    </div>
                </Link> 
                
                {/* link 3*/}
                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Your</span>
                        <span className="header__optionLineTwo">Prime</span>
                    </div>
                </Link> 
            </div>

            <Link to="/checkout" className="header__link">
                <div className="header__optionBasket">
                    
                    {/* basket icon */}
                    <ShoppingBasketIcon />
                    
                    {/* number of items in container */}
                    <span className="header__optionLineTwo basket__count">0</span>
                </div>
            </Link>
        </nav>
    )
}

export default Header
