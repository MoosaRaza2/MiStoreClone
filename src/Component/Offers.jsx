import react from 'react';
import Offer from './Offer.jsx';
import "../StylesSheets/offers.css"
const Offers= ({offers})=>{

    return(
        <div className='offer'>
            {
                offers.map((item,index)=>(
                    < Offer key={item.image} index={index} src={item.image} link={item.url}/>
                 ))
            }

        </div>

    )
}

export default Offers