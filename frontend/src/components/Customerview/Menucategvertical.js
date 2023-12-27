import React, { useEffect } from 'react'
import { GetCategories } from '../Redux/Action/CategorieAction'
import { useDispatch, useSelector } from 'react-redux'

function Menucategvertical() {
    const dispatch = useDispatch()
    useEffect(()=>{
       
      dispatch(GetCategories())
    },[])
     
    const CategoryName = useSelector((state)=>state.categorie.categories)
        
       console.log(CategoryName)
  return (
    <>
       {/* Shop sidebar*/}
      
        <ul className="list-unstyled text-muted mb-5">
        {CategoryName?.map(
          (e)=>(
            <li className="mb-2 d-flex align-items-center justify-content-between">
            <a className="reset-anchor" href={`/cart/${e.Name}`}>
              {e.Name}
            </a>
            <span className="badge bg-light text-dark">240</span>
          </li> 
          ))}
          
        </ul>
      
    </>
  )
}

export default Menucategvertical
