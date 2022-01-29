
import './App.css';
import PreNavbar from'./Component/PreNavbar.jsx';
import NavBar from './Component/Navbar.jsx'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Slider from './Component/Slider'
import data from './data/data.json';
import Offers from "./Component/Offers";
import Heading from './Component/Heading'
import StarProduct from './Component/StarProduct';
import HotAccessoriesMenu from './Component/HotAccessoriesMenu.jsx';
import HotAccessories from './Component/HotAccessories.jsx';
import ProductCard from './Component/ProductCard.jsx';
import Videos from './Component/Videos.jsx';
import Banner from './Component/Banner.jsx';
import Footer from './Component/Footer.jsx';
import NavOptios from './Component/NavOptios.jsx';


function App() {
  return (
    <Router>
     <PreNavbar/>
     <NavBar/>
     <NavOptios miPhones={data.miPhones} redmiPhones={data.redmiPhones} tv={data.tv} laptop={data.laptop} fitnessAndLifeStyle={data.fitnessAndLifeStyle} home={data.home} audio={data.audio}  accessories={data.accessories}/>
     <Slider start={data.banner.start}/>
     <Offers offers={data.offer}/>
     <Heading text="STAR PRODUCT"/>
     <StarProduct star={data.starProduct}/>
     <Heading text="HOT ACCESSORIES"/>
     <HotAccessoriesMenu />
      <Routes>
     <Route path="/music" element={ <HotAccessories music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music}/>}/>
     <Route path="/smartDevice" element={ <HotAccessories smartDevice={data.hotAccessories.smartDevice} smartDeviceCover={data.hotAccessoriesCover.smartDevice}/>}/>
     <Route path="/home" element={ <HotAccessories home={data.hotAccessories.home} homeCover={data.hotAccessoriesCover.home}/>}/>
     <Route path="/lifeStyle" element={ <HotAccessories lifeStyle={data.hotAccessories.lifeStyle} lifeStyleCover={data.hotAccessoriesCover.lifeStyle}/>}/>
     <Route path="/mobileAccessories" element={ <HotAccessories mobileAccessories={data.hotAccessories.mobileAccessories} mobileAccessoriesCover={data.hotAccessoriesCover.mobileAccessories}/>}/>
      
    
     </Routes>
     <Heading text="PRODUCT REVIEWS"/>
     <ProductCard productreviews={data.productReviews}/>
     <Heading text="VIDEOS"/>
     <Videos videos={data.videos}/>
     <Heading text="IN THE PRESS"/>
     <Banner banner={data.banner}/>
     <Footer footer={data.footer} />
     
      
    </Router>
  );
}


export default App;
