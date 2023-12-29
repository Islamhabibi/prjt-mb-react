import React, { useEffect } from 'react'
import FooterAdmin from '../../components/Footers/FooterAdmin'
import AdminNavbar from '../../components/Navbars/AdminNavbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux';
import { getcurrent } from '../../components/Redux/Action/TeamAction';
function Dashboard() {
  const dispatch = useDispatch()
  useEffect(() => {    
    dispatch(getcurrent())
  }, [])
  const user= useSelector((state)=> state.team.user)
  console.log(user)
  return (
    <>
      <AdminNavbar />
      <div className='content-wrapper'>
        <div className='container-xxl flex-grow-1 container-p-y'>
           {/**profile */}
          <div className='row gy-4'>
            <div className="col-md-12 col-lg-4">
              <div className="card">
                <div className="card-body" style={{ marginTop: "5%",marginBottom: "11%"}}>
                  <h4 className="card-title mb-1">Welcome {user.FullName} 🎉</h4>
                  <p className="pb-0"><b>Profile:</b> {user.Profile}</p>
                  <a
                     href={'/admin/profil'}
                    className="btn btn-sm btn-primary waves-effect waves-light"
                  >
                    View Profil
                  </a>
                </div>
                <img
                  src={user.Avatar}
                  className="scaleX-n1-rtl position-absolute bottom-0 end-0"
                  width={166}
                  alt="triangle background"
                  data-app-light-img="icons/misc/triangle-light.png"
                  data-app-dark-img="icons/misc/triangle-dark.png"
                />
                 
              </div>
            </div>
            {/**Category */}
            <div className="col-md-12 col-lg-4">
              <div className="card">
                <div className="card-body" style={{ marginTop: "5%",marginBottom: "8%"}}>
                  <h4 className="card-title mb-1">Category management </h4>
                  <p className="pb-0">List of category</p>
                  <h4 className="text-primary mb-1"> </h4>
                  <p className="mb-2 pb-1"> </p>
                  <a
                     href={'/admin/category-list'}
                    className="btn btn-sm btn-primary waves-effect waves-light"
                  >
                    View Category
                  </a>
                </div>
                 
              </div>
            </div>
              {/**Product */}
              <div className="col-md-12 col-lg-4">
              <div className="card">
                <div className="card-body" style={{ marginTop: "5%",marginBottom: "8%"}}>
                  <h4 className="card-title mb-1">Product management</h4>
                  <p className="pb-0">List of product</p>
                  <h4 className="text-primary mb-1"> </h4>
                  <p className="mb-2 pb-1"> </p>
                  <a
                    href={'/admin/product-list'}
                    className="btn btn-sm btn-primary waves-effect waves-light"
                  >
                    View Product
                  </a>
                </div>
                 
                 
              </div>
            </div>
            {/**Customer */}
            <div className="col-md-12 col-lg-4">
              <div className="card">
                <div className="card-body" style={{ marginTop: "5%",marginBottom: "8%"}}>
                  <h4 className="card-title mb-1">Team management</h4>
                  <p className="pb-0"></p>
                  <h4 className="text-primary mb-1"> </h4>
                  <p className="mb-2 pb-1"> </p>
                  <a
                    href={'/admin/all-team'}
                    className="btn btn-sm btn-primary waves-effect waves-light"
                  >
                    View Team
                  </a>
                </div>
                 
              </div>
            </div>
            {/**Teams */}
            <div className="col-md-12 col-lg-4">
              <div className="card">
                <div className="card-body" style={{ marginTop: "5%",marginBottom: "8%"}}>
                  <h4 className="card-title mb-1">Customer management</h4>
                  <p className="pb-0"> </p>
                  <h4 className="text-primary mb-1"> </h4>
                  <p className="mb-2 pb-1"> </p>
                  <a
                    href={'/admin/all-customer'}
                    className="btn btn-sm btn-primary waves-effect waves-light"
                  >
                    View customer
                  </a>
                </div>
                 
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterAdmin />
    </>
  )
}

export default Dashboard
