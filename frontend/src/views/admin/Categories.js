import React, { useState } from 'react'
import Navbarverticl from '../../components/Navbars/navbarverticl'
import CardListCategories from '../../components/Cards/CardsCategories/CardListCategories'
import Modal from 'react-bootstrap/Modal';
import AdminNavbar from '../../components/Navbars/AdminNavbar';
function Categories() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
    <div class="layout-wrapper layout-content-navbar  ">
      <div class="layout-container">
        <AdminNavbar/>
      
      <div class="layout-page">
        <div class="content-wrapper">
            <Modal show={show} onHide={handleClose}>
            <CardListCategories/>
            </Modal>
        </div>
      </div>
      </div>
    </div>
  </>
  )
}

export default Categories
