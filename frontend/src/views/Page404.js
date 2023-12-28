import React from 'react'
import img1 from '../assets/img/illustrations/misc-mask-light.png'
import img2 from '../assets/img/illustrations/404.png'
import '../assets/styles/css/pages/page-auth.css'
function Page404() {
    return (
        <>
            <div className="misc-wrapper">
                <h1 className="mb-2 mx-2" style={{ fontSize: "6rem" }}>
                    404
                </h1>
                <h4 className="mb-2">Page Not Found ⚠️</h4>
                <p className="mb-4 mx-2">we couldn't find the page you are looking for</p>
                <div className="d-flex justify-content-center mt-5">
                    
                    <img
                        src={img1}
                        alt="misc-error"
                        className="scaleX-n1-rtl misc-bg d-none d-lg-inline-block"
                        data-app-light-img="illustrations/misc-mask-light.png"
                        data-app-dark-img="illustrations/misc-mask-dark.png"
                    />
                    <div className="d-flex flex-column align-items-center">
                        <img
                            src={img2}
                            alt="misc-error"
                            className="misc-model img-fluid z-1"
                            width={780}
                        />
                        <div>
                            <a
                                href={'/'}
                                className="btn btn-primary text-center my-4 waves-effect waves-light"
                            >
                                Back to home
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Page404
