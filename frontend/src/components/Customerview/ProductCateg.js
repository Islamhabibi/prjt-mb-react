import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import Icon from '@mdi/react'
import { mdiArrowExpandAll, mdiCartVariant } from '@mdi/js'
import FrontNavbar from '../Navbars/FrontNavbar'
import FooterCustomer from '../Footers/FooterCustomer'
import { GetProductsbyCatg, addToBasket } from '../Redux/Action/ProductAction'
function ProductCateg() {
  
  const dispatch = useDispatch()

  const NameCtg = useParams()
  const [quantity, setQuantity] = useState(1)

  useEffect(() => {
    dispatch(GetProductsbyCatg(NameCtg.name))
  }, [])
  const userFormState = useSelector((state) => state.product.productsByCategory)
  //console.log(userFormState)
  //console.log(NameCtg)
  return (
    <>
      <FrontNavbar />
      <div className="container">
        <section className="py-5">
          <div className="container py-5">
            <div className="row">              
              <div className="col-xl-12 col-lg-12 order-3 order-lg-3 mb-5 mb-lg-0">                
                <div className="row">                 
                  {/* Product*/}
                  {userFormState?.map((e) => (
                    <>
                      <div className="col-xl-3 col-lg-4 col-6">
                        <div className="product mb-4">
                          <a className="reset-anchor" href={`/detail-product/${e._id}`}>
                            <img
                              className="img-fluid"
                              src={e.Avatar}
                              alt="Round grey hanging decor"
                            />
                          </a>
                          <div className="cta shadow d-inline-block">
                            <a
                              className="product-btn"
                              href={`/detail-product/${e._id}`}

                            >
                              <Icon path={mdiArrowExpandAll} size={1} />
                            </a>
                            <Link className="product-btn" onClick={() => dispatch(addToBasket({ pro: e, quantity }))}>
                              <Icon path={mdiCartVariant} size={1} />
                            </Link>
                          </div>
                        </div>
                        <h6 className="text-center">
                          <Link className="reset-anchor" to={`/detail-product/${e._id}`}>
                            {e.Name}
                          </Link>
                        </h6>
                        <p className="text-center text-muted font-weight-bold mb-4">
                          $ {e.Price}
                        </p>
                      </div>
                    </>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <FooterCustomer />
    </>
  )
}
export default ProductCateg


