import React from "react";
import VideoCard from './VideoCard';
import "../StylesSheets/Videos.css"
const Videos =({videos})=>{
    return(
        <div className="Videos">
             
             {
               videos.map((item,index)=>(
                   <VideoCard name={item.name} image={item.image} key={item.key} index={index}/>
               ))
             }
        </div>

    )
}
export default Videos