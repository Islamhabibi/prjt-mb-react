import React, { useState } from 'react'
import FrontNavbar from '../Navbars/FrontNavbar'
import axios from 'axios'
import { useNavigate } from 'react-router'
import FooterCustomer from '../Footers/FooterCustomer'

function ContactUS() {
  const [Name,setName] = useState('')
  const [email,setEmail]= useState('')
  const [subject,setSubject]= useState('')
  const [message,setMessage]=useState('')
  const sendEmail = async()=>{
    const res= await axios
        .post('/customer/sendemail',{Name,email,subject,message})
        .then((res)=>alert(res.data.message))
        navigate('/')
  }
  const navigate = useNavigate()
  return (
    <>
    <FrontNavbar/>
    <section className="py-5">
      <div className="container py-5 text-center">
        <header className="text-center mb-5">
          <h2 className="lined lined-center">Contact Us</h2>
          <p className="lead">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
        </header>
        <div className="row">
          <div className="col-lg-10 mx-auto">
            
              <div className="row gy-4">
                <div className="position-relative col-md-6">
                  <input
                    type="text"
                    className="form-control-material"
                    id="add-user-fullname"
                    placeholder="Your Name"
                    name="Name"
                    aria-label="John Doe"
                    onChange={(e) => setName(e.target.value)}
                  /> 
                  <span className="valid-feedback px-2 bg-success text-white text-sm rounded">
                    Looks good!
                  </span>
                  <span className="invalid-feedback px-2 bg-danger text-white text-sm rounded">
                    This field is required
                  </span>
                </div>
                <div className="position-relative col-md-6">
                  <input
                    className="form-control-material"
                    id="email"
                    type="email"
                    name="email"
                    required=""
                    placeholder="Your Email"
                    onChange={(e=>setEmail(e.target.value))}
                  />
                  
                  <span className="valid-feedback px-2 bg-success text-white text-sm rounded">
                    Looks good!
                  </span>
                  <span className="invalid-feedback px-2 bg-danger text-white text-sm rounded">
                    This field is required
                  </span>
                </div>
                <div className="position-relative col-md-12">
                <input
                    className="form-control-material"
                    id="Subject"
                    type="text"
                    name="Subject"
                    required=""
                    placeholder="Subject"
                    onChange={(e=>setSubject(e.target.value))}
                  />
                   
                  <span className="valid-feedback px-2 bg-success text-white text-sm rounded">
                    Looks good!
                  </span>
                  <span className="invalid-feedback px-2 bg-danger text-white text-sm rounded">
                    This field is required
                  </span>
                </div>
                <div className="position-relative col-md-12">
                  <textarea
                    className="form-control-material"
                    id="message"
                    name="message"
                    required=""
                    placeholder=" How can we help you?"
                    onChange={(e=>setMessage(e.target.value))}
                  />
                  
                  <span className="valid-feedback px-2 bg-success text-white text-sm rounded">
                    Looks good!
                  </span>
                  <span className="invalid-feedback px-2 bg-danger text-white text-sm rounded">
                    This field is required
                  </span>
                </div>
                <div className="position-relative col-md-12 text-end">
                  <a className="btn btn-primary me-sm-3 me-1 waves-effect waves-light " onClick={sendEmail}> 
                    <i className="fas  fa-envelope me-2"></i>
                      Send
                  </a>          
                </div>
              </div>
           
          </div>
        </div>

    
       </div>
    </section>
    <FooterCustomer/>
    </>
  )
}

export default ContactUS
