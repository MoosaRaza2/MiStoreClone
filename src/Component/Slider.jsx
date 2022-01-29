import react from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

const Slider=({start})=>{
  return(
      <Carousel fade>
          
          {
              start.map((item)=>(
                <Carousel.Item>
                <img src={item}
                alt="FirstSlide" className='d-block w-100' />
               
            </Carousel.Item>
              ))
          }
      </Carousel>

  )
}

export default Slider;