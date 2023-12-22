import React, {  useEffect, useState } from 'react'
 import { useNavigate, useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
 import Form from "react-bootstrap/Form";
import axios from 'axios'
import { DeleteCategorie, GetCategorie, GetCategories, Updatecategorie } from '../../Redux/Action/CategorieAction';
 
function CardUpdateCategorie() {
    const idctg= useParams()
     
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(GetCategorie(idctg.id))
        dispatch(GetCategories())
      },[dispatch, idctg.id])
      
      const data = useSelector((state)=> state.categorie.categorie)
      
      const userFormState = useSelector((state)=> state.categorie.categories)
      
    const [Name,setName]= useState(data.Name)
    const [Avatar,setAvatar] = useState(data.Avatar)
    const [Description, setDescription] = useState(data.Description)
    const [Parent_Categorie, setParentCategorie] = useState(data.Parent_Categorie)
    const [Status, setStatus] = useState(data.Status)
     const navigate = useNavigate()

    
  //fin modification statut
  
     
    const handleChangeParentCatg = (e) => {
      setParentCategorie(e.target.value);
    };
   
    const Update = async () => {
      const formaData=new FormData()
      formaData.append('file',Avatar)
      formaData.append('upload_preset','ml_default')
      if(Avatar?.length===undefined){
      await axios
      .post('https://api.cloudinary.com/v1_1/dm5ktvety/upload',formaData)
      .then(res=> 
           dispatch
            (Updatecategorie(data._id,
              {Name,Description,Parent_Categorie,Status,Avatar:res.data.url},navigate
              )
            )
            
          ) 
          console.log(formaData)
         
        }else{
              dispatch
              (Updatecategorie(data._id,
                  {Name,Description,Parent_Categorie,StatusAvatar:data.Avatar},navigate
                  )
              );  console.log( {Name,Description,Parent_Categorie,Status,Avatar})
              }
    };
     return (
      <><div className="container-xxl flex-grow-1 container-p-y">
      <div className="app-ecommerce-category over">
              <div className="card mb-4">
                <h4 className="card-header">Category Details</h4>
                {/* Account */}
                <div className="card-body">
                  <div className="d-flex align-items-start align-items-sm-center gap-4">
                    <img
                      src={data.Avatar}
                      alt="user-avatar"
                      className="d-block w-px-120 h-px-120 rounded"
                      id="uploadedAvatar"
                    />
                    <div className="button-wrapper">
                      <label
                        htmlFor="upload"
                        className="btn btn-primary me-2 mb-3"
                        tabIndex={0}
                      >
                         
                        
                        <Form.Control
                          type="file"
                          accept="image/*"
                        
                          autoFocus
                          onChange={(e) => setAvatar(e.target.files[0])}
                        />
                      </label>
                      
                      <div className="text-muted small">
                        Allowed JPG, GIF or PNG. Max size of 800K
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-body pt-2 mt-1">
                     <div className="row mt-2 gy-4">
                      <div className="col-md-6">
                        <div className="form-floating form-floating-outline">
                          <input
                            className="form-control"
                            type="text"
                            id="Name"
                            name="Name"
                            defaultValue={data.Name}
                            onChange={(e)=>setName(e.target.value)}
                            autofocus=""
                          />
                          <label htmlFor="firstName">Name</label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-floating form-floating-outline">
                        <textarea
                                className="form-control"
                                id="exampleFormControlTextarea1"
                                rows={10}  
                                name="Description"
                                defaultValue={data.Description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                          <label htmlFor="lastName">Description</label>
                        </div>
                      </div>
                      
                       
                        
                     <div className="col-md-6">
                        <div className="form-floating form-floating-outline">
                           
                          <select
                                className="select2 form-select"
                                id="userRole"
                                name="userRole"
                                onChange={(e) => setParentCategorie(e.target.value)}
                            >
                                <option value="">Select parent category</option>
                                <option onChange={handleChangeParentCatg}  value="root">root</option>
                                {
                                       userFormState?.map(
                                      (e)=>( (data._id!== e._id) && data.name!== 'root'?
                                      <option onChange={handleChangeParentCatg} 
                                        value={e.Name}>
                                        {e.Name}
                                      </option>:null)
                                      )
                                }
                                 
                            </select>
                          <label htmlFor="language">Parent category</label>
                        </div>
                      </div>
                      {/************(data.isEnabled === true )?(checked):(traitement2) */}
                      <div class="col-md-6">
                        <label class="d-block form-label">Statut</label>
                        <div class="form-check mb-2">

                                <input
                                    type="radio"
                                    id="active"
                                    name="satatus active"
                                    className="form-check-input"
                                    required=""
                                    onChange={(e) => { setStatus(true) }}
                                />
                                <label class="form-check-label" for="active">Active</label>
                            </div>
                            <div class="form-check">
                                <input
                                    type="radio"
                                    id="desactive"
                                    name="statuts desactive"
                                    class="form-check-input"
                                    value="inactive"
                                    required=""
                                    defaultChecked=""
                                    onChange={(e) => { setStatus(false) }}
                                />
                                <label class="form-check-label" for="desactive">Desactive</label>
                            </div>
                      </div>
                      
                       
                    </div>
                    <div className="mt-4">
                      <button onClick={Update} type="submit" className="btn btn-primary me-2">
                        Save changes
                      </button>
                      <button type="reset" className="btn btn-outline-secondary">
                        Reset
                      </button>
                    </div>
                </div>
                {/* /Account */}
              </div>
              <div className="card">
                <h5 className="card-header fw-normal">Delete this category</h5>
                <div className="card-body">
                  <div className="mb-3 col-12 mb-0">
                    <div className="alert alert-warning">
                      <h6 className="alert-heading mb-1">
                        Are you sure you want to delete this category?
                      </h6>
                      <p className="mb-0">
                        Once you delete this category, there is no going back. Please be
                        certain.
                      </p>
                    </div>
                  </div>
                     <div className="form-check mb-3 ms-3">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="accountActivation"
                        id="accountActivation"
                      />
                      <label className="form-check-label" htmlFor="accountActivation">
                        I confirm my account deactivation
                      </label>
                    </div>
                    <button type="submit" className="btn btn-danger" 
                      onClick={()=>dispatch(DeleteCategorie(data._id),navigate("/listcategories"))}>
                      Deactivate Account
                    </button>
                </div>
              </div>
           </div>  
          </div> 
         
  
      </>
    )
  
}

export default CardUpdateCategorie
