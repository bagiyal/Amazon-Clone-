import React from "react";
import "./Home.css";
import Product from "./Product";
import banner from "./banner.jpg";
import "./Home.css";
import product1 from './product1.jpg'; 

const Home = ()=>{
    return(
        <div className="home">
         <div className="home_container">
          <img className="home_image" src={banner} alt="banner" />
          
          <div className="home_row">
             <Product
                id = '1'
                title = "Latest I Phone 14 Pro Max 256GB"
                price = {590}
                image = <img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-7inch-deeppurple_AV1_GEO_EMEA?wid=5120&hei=2880&fmt=jpeg&qlt=90&.v=1662060528139" alt='product'/>
                rating = {5}
             />
             <Product
                id = '2'
                title = "Apple iPhone 12 128 GB, Blue"
                price = {489}
                image = <img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-family-select-2021?wid=940&hei=1112&fmt=jpeg&qlt=90&.v=1617135051000" alt='product'/>
                rating = {4}
             />
         </div>
         <div className="home_row">
            <Product 
                id = '3'
                title = "APPLE iPhone 11 (Black, 64 GB)"
                price = {5}
                image = <img src="https://rukminim1.flixcart.com/image/416/416/k2jbyq80pkrrdj/mobile-refurbished/x/j/s/iphone-11-128-d-mwm02hn-a-apple-0-original-imafkg242ugz8hwc.jpeg?q=70" alt='product'/>
                rating = {3}

                />
            <Product 
                id = '4'
                title = "I Phone 14"
                price = {5}
                image = <img src={product1} alt='product'/>
                rating = {5}/>
            <Product 
                id = '5'
                title = "I Phone 14"
                price = {13}
                image = <img src={product1} alt='product'/>
                rating = {5}/>
         </div>
         
         <div className="home_row">
           <Product 
                id = '6'
                title = " Apple MacBook Pro 2022 (M2, 13.3 inch, 8GB, 256GB, macOS Monterey, Space Grey)"
                price = '1200'
                image = <img src="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1664412955/Croma%20Assets/Computers%20Peripherals/Laptop/Images/256605_0_elrzey.png/mxw_1440,f_auto" alt='product'/>
                rating = {5}/>
         </div>


        </div>
        </div>
    );
}

export default Home;