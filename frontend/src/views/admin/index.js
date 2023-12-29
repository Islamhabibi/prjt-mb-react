// ** MUI Imports
import Navbarverticl from '../../components/Navbars/navbarverticl'
import CardListCategories from '../../components/Cards/CardsCategories/CardListCategories'

 
// ** Custom Components Imports
  
// ** Demo Components Imports
 
  

const Dashboard = () => {
  return (

    <>
      <div className="layout-wrapper layout-content-navbar  ">
        <div className="layout-container">
          <Navbarverticl/>
        
        <div className="layout-page">
          <div className="content-wrapper">
            <CardListCategories/>
          </div>
        </div>
        </div>
      </div>
    </>
      
          
         
     
  )
}

export default Dashboard
