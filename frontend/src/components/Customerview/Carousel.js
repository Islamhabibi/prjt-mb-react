import Carousel from 'react-bootstrap/Carousel';
 import img1 from '../../assets/img/slider/papier.jpg'
 import img2 from '../../assets/img/slider/cleaning-server.jpg'
 import img3 from '../../assets/img/slider/cleaning-tools.jpg'
function Slider() {
  return (
   
    <Carousel>
    <Carousel.Item>
      <img width={1920} height={640} alt="900x500" src={img1} />
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img width={1920} height={640} alt="900x500" src={img2}/>
      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img width={1920} height={640} alt="900x500" src={img3} />
      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  );
}

export default Slider;