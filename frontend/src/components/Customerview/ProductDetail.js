import { AiOutlineHeart } from "react-icons/ai";
import { BiShoppingBag } from "react-icons/bi";
import ReactImageGallery from "react-image-gallery";
import Rater from "react-rater";
import "react-rater/lib/react-rater.css";
import FrontNavbar from "../Navbars/FrontNavbar";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FindProduct, GetAllProducts, addToBasket } from "../Redux/Action/ProductAction";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import ProductsCarousel from "./ProductsCarousel";
import FooterCustomer from "../Footers/FooterCustomer";

const ProductDetail = () => {
  const id = useParams()
 // console.log(id)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(FindProduct(id.id));
    dispatch(GetAllProducts());
  }, []);
  const product = useSelector((state) => state.product.product);
  const userFormState = useSelector((state)=> state.product.products) 
  //console.log(product);
  const [key, setKey] = useState('Description');
  const [quantity, setQuantity] = useState(1)
 
 return(
  <>
  <FrontNavbar/>
    <section className="py-5">
  <div className="container py-5">
    <div className="row">
      <div className="col-lg-6 mb-5 mb-lg-0">
        <div className="row">
          <div className="col-md-10 order-1 order-md-2 mb-4 mb-lg-0">
            {/* Item slider*/}
            <div
              className="swiper-container swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events"
              id="detailSlider"
            >
              <div
                className="swiper-wrapper"
                id="swiper-wrapper-ac9bfa31e92786f10"
                aria-live="polite"
                style={{ transform: "translate3d(0px, 0px, 0px)" }}
              >
                   
                <div
                  className="swiper-slide"
                  role="group"
                  aria-label="4 / 4"
                  style={{ width: 523, marginRight: 10 }}
                >
                 
                    <img
                    style={{backgroundColor: "#f4f5fa"}}
                      className="img-fluid"
                      src={product.Avatar}
                      alt=".."
                    />
                   
                </div>
              </div>
              <span
                className="swiper-notification"
                aria-live="assertive"
                aria-atomic="true"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Item info*/}
      <div className="col-lg-6">
        <div className="badge bg-info small rounded-0 mb-2">Trending</div>
        <h1>{product.Name}</h1>
         
        <p className="h4">${product.Price}</p>
        <p className="text-small mb-4">
        {product.Description}
        </p>
        
        <div className="d-flex align-items-center mb-4">
          <div className="border d-flex align-items-center justify-content-between p-1 me-2">
            <div className="quantity py-0">
            <button className="inc-btn p-0" 
              onClick={()=>quantity>1?setQuantity (quantity-1):quantity} >
              
              <i className="fas fa-solid fa-minus" />
            </button>
              
              <input
                className="form-control border-0 shadow-0 p-0 quantity-result align-items-center"
                type="text"
                value={quantity}
               
              />
              <button className="dec-btn p-0" 
                onClick={()=>setQuantity (quantity+1)} >
               
               <i className="fas fa-caret-left fa-solid fa-plus" />
             </button>
            </div>
          </div>
          <a
            className="btn btn-primary btn-sm py-2 border-bottom-0 px-5 me-3"
            onClick={()=>dispatch(addToBasket({pro:product, quantity}))}
          >
            {" "}
            <i className="fas fa-shopping-bag py-1 me-2" />
            Add to cart
          </a>
          <a className="p-0 reset-anchor d-inline-block mx-2"  >
            <i className="fas fa-heart" />
          </a>
          <a className="p-0 reset-anchor d-inline-block mx-2">
            <i className="fas fa-share-alt" />
          </a>
        </div>
        <br />
        
      </div>
    </div>
  </div>
</section>
<section className="pb-5">
  <div className="container">
    <div className="row">
   
      {/* Item information*/}
      <div className="col-xl-10 mx-auto">
     
      <Tabs
            id="controlled-tab-example"
            activeKey={key}
           
            onSelect={(k) => setKey(k)}
            className="nav nav-tabs tabs-fill  border-0 flex-column flex-md-row nav-link text-small fw-bold py-3 border-0 "
           
          >
        <Tab eventKey="Description" title="Description"  className="tab-content tab-pane fade show" >
           
              <p className="text-muted mb-4 p-3 ">
                {product.Description}
              </p>
                
        </Tab>
        
        <Tab eventKey="Additional" title="Additional info" >
            <div className="row">
                <div className="col-lg-6">
                  <table className="table table-bordered">
                    <tbody>
                      <tr>
                        <th className="small px-3">Category:</th>
                        <td className="small px-3">{product.idCategorie}</td>
                      </tr>
                      <tr>
                        <th className="small px-3">Available stock:</th>
                        <td className="small px-3">{product.QtStock}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>        
          
          </Tab>
          </Tabs>
       
      </div>
    </div>
  </div>
</section>
<div class="col-xl-8 mx-auto row pb-5">
  <header class="mb-3 text-center">
    <p className="small text-muted small text-uppercase mb-1">
      Made the hard way
    </p>
    <h2 className="h5 text-uppercase mb-4">Top trending products</h2>
  </header>
  <ProductsCarousel data={userFormState}/>
</div>  
<FooterCustomer/>     
        
</>
 ) 

};

export default ProductDetail;