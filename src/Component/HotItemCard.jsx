import React from "react";
import "../StylesSheets/HotItemCard.css";
const HotItemCard=({ image,index,name,price})=>{
    return(
        <div className="Hotitem">
          <img src={image} alt={`${index} product`} />
          <p>{name}</p>
          <span>{price}</span>
        </div>

    )
}
export default HotItemCard