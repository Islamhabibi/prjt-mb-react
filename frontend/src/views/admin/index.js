// ** MUI Imports
import Grid from '@mui/material/Grid'
import Trophy from '../dashboard/Trophy'
import Navbarverticl from '../../components/Navbars/navbarverticl'
import CardListCategories from '../../components/Cards/CardsCategories/CardListCategories'

 
// ** Custom Components Imports
  
// ** Demo Components Imports
 
  

const Dashboard = () => {
  return (

    <>
      <div class="layout-wrapper layout-content-navbar  ">
        <div class="layout-container">
          <Navbarverticl/>
        
        <div class="layout-page">
          <div class="content-wrapper">
            <CardListCategories/>
          </div>
        </div>
        </div>
      </div>
    </>
      
          
         
     
  )
}

export default Dashboard
