import React from "react";
import ProductItemCard from "./ProductItemCard";
import "../StylesSheets/ProductCard.css"
const ProductCard=({productreviews})=>{
    return(
       <div className="ProductCard">

           {
            productreviews.map((item,index)=>(

                <ProductItemCard name={item.name} price={item.price} image={item.image} review={item.review} index={item.index} key={item.key}/>

            ))
           }

       </div>
    )
}

export default ProductCard;