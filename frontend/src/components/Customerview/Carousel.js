import Carousel from 'react-bootstrap/Carousel';
 import img1 from '../../assets/img/slider/papier.jpg'
 import img2 from '../../assets/img/slider/cleaning-server.jpg'
 import img3 from '../../assets/img/slider/cleaning-tools.jpg'
import { Link } from 'react-router-dom';
function Slider() {
  return (
   
    <Carousel>
      
    <Carousel.Item>
      <Link to={`/category-product/Wiping%20Paper`}>
      <img width={1920} height={640} alt="900x500" src={img1} />
      </Link>
      <Carousel.Caption>
        
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
    <Link to={`/category-product/General%20hygiene`}>
      <img width={1920} height={640} alt="900x500" src={img2}/>
      </Link>
       
    </Carousel.Item>
    <Carousel.Item>
    <Link to={`/category-product/Brush`}>
      <img width={1920} height={640} alt="900x500" src={img3} />
      </Link>
       
    </Carousel.Item>
  </Carousel>
  );
}

export default Slider;