import React from "react";
import "../StylesSheets/ProductItemCard.css"

const ProductItemCard=({name,price,image,review,index})=>{
    return(
        <div className="product">
            <img src={image} alt={`${index} review`} />
            <h5>{review}</h5>
            <span>{name}</span>
            <b>{price}</b>
            
        </div>
    )
}
export default ProductItemCard