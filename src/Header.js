import React from "react";
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import logo from "./amazon_logo.jpg";
import { ShoppingBagRounded } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";

function Header() {
  const [{basket},dispatch] = useStateValue();

  return (
    <div className="header">
    <Link to ="./">
    <img className="header_logo" alt="logo" src={logo} />
    </Link>
      
      <div className="header_search">
        <input className="header_searchInput" type="text" />
    
        <SearchIcon className="header_searchIcon" />
      </div>
      <div className="header_nav">
      <Link to="./login">
        <div className="header_option">
          <span className="header_optionLineOne">Hello</span>
          <span className="header_optionLineTwo">Sign In</span>
        </div>
        </Link>
        <div className="header_option">
          <span className="header_optionLineOne">Return</span>
          <span className="header_optionLineTwo">& Orders</span>
        </div>
        <div className="header_option">
          <span className="header_optionLineOne">Your</span>
          <span className="header_optionLineTwo">Prime</span>
        </div>
        
        <Link to="./Checkout">
           <div className="header_optionBasket">
            <ShoppingBagRounded></ShoppingBagRounded>
             <span className="header_optionLineTwoheader_basketCount">
                {basket?.length}
             </span>
        </div>

        </Link>
       
      </div> 
    </div>
  );
}

export default Header;
