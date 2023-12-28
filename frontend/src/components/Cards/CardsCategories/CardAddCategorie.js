import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { AddCategorie } from '../../Redux/Action/CategorieAction';
import axios from 'axios';

function CardAddCategorie({data}) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
     //les set des inputs
    const [Name,setName]= useState('')
    const [Avatar,setAvatar] = useState([])
    const [Description, setDescription] = useState('')
    const [Parent_Categorie, setParentCategorie] = useState('')
    const [Status, setStatus] = useState('')

    const handleChangeParentCatg = (e) => {
        setParentCategorie(e.target.value);
      };
     
      //console.log({Name,Description,Parent_Categorie,Status})
    //function pour dispatche la fct dans l'actionteam
    const Addcategory = async () => {
        const formaData=new FormData()
        formaData.append('file',Avatar)
        formaData.append('upload_preset','ml_default')
        if(Avatar.length===undefined){
            await axios
            .post('https://api.cloudinary.com/v1_1/dm5ktvety/upload',formaData)
            .then(res=> 
                dispatch
                (AddCategorie(
                    {Name,Description,Parent_Categorie,Status,Avatar:res.data.url},navigate
                    )
                )
                
                )
          }else{
                dispatch
                (AddCategorie(
                    {Name,Description,Parent_Categorie,Status,Avatar:data.image},navigate
                    )
                ); 
                } 
                
        handleClose()
    }
    const dispatch = useDispatch()
    const navigate = useNavigate()
    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Add New Categorie
            </Button>


            <Modal show={show} onHide={handleClose} className='offcanvas offcanvas-end'>
                <Modal.Header closeButton>
                    <Modal.Title>
                        <h5 id="offcanvasAddUserLabel" className="offcanvas-title">
                        Add Categorie
                        </h5>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body >

                    <Form>
                        {/**Name ctg */}
                        <div className="form-floating form-floating-outline mb-4 fv-plugins-icon-container">
                            <input
                                type="text"
                                className="form-control"
                                id="add-user-fullname"
                                placeholder="ALIMENTAIRE"
                                name="Name"
                                aria-label="John Doe"
                                onChange={(e) => setName(e.target.value)}
                            />
                            <label htmlFor="add-user-fullname">Name categorie</label>
                            <div className="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback" />
                        </div>
                         {/**image */}
                         <div className="form-floating form-floating-outline mb-4 fv-plugins-icon-container"> 
                         <div className="form-floating form-floating-outline mb-4">
                            <input 
                                className="form-control" type="file" 
                                accept="image/*" id="ecommerce-category-image"
                                onChange={(e) => setAvatar(e.target.files[0])}
                             />
                            <label htmlFor="ecommerce-category-image">Attachment</label>
                            </div>
                        </div>
                         {/**fin img */}

                        <div className="form-floating form-floating-outline mb-4 fv-plugins-icon-container">
                            
                            <textarea
                                className="form-control"
                                id="exampleFormControlTextarea1"
                                rows={3}
                                defaultValue={""}
                                name="Description"
                                onChange={(e) => setDescription(e.target.value)}
                            />
                            <label htmlFor="add-user-Username">Description</label>
                            <div className="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback" />
                        </div>
                        
                        <div className="form-floating form-floating-outline mb-4 fv-plugins-icon-container">
                            <select
                                className="select2 form-select"
                                id="userRole"
                                name="userRole"
                                onChange={(e) => setParentCategorie(e.target.value)}
                            >
                                <option value="">Select parent category</option>
                                {
                                    data?.map((e)=>(<option onChange={handleChangeParentCatg} value={e.Name}>{e.Name}</option>))
                                }
                                 
                            </select>
                            <label htmlFor="add-user-Username">Parent category</label>
                            <div className="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback" />
                        </div>
                        <div className="form-floating form-floating-outline mb-4 fv-plugins-icon-container">
                            <div className="form-check mb-2">

                                <input
                                    type="radio"
                                    id="active"
                                    name="true"
                                    className="form-check-input"
                                    required=""
                                    //defaultChecked={(data.isEnabled)===true ? "Checked" : ""}
                                    onChange={(e) => { setStatus(true) }}
                                />
                                <label className="form-check-label" for="active">Active</label>
                            </div>
                            <div className="form-check">
                                <input
                                    type="radio"
                                    id="desactive"
                                    name="false"
                                    className="form-check-input"
                                    value="inactive"
                                    required=""
                                    defaultChecked=""
                                    onChange={(e) => { setStatus(false) }}
                                />
                                <label className="form-check-label" for="desactive">Desactive</label>
                            </div>

                            <div className="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback" />
                        </div>

                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={Addcategory}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

 

export default CardAddCategorie
