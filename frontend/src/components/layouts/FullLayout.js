import React, { useState } from "react";
import { styled, Container, Box } from '@mui/material';
import { Outlet } from 'react-router-dom';


  import Navbar from "../Navbars/Navbar";
  

const MainWrapper = styled('div')(() => ({
  display: 'flex',
  minHeight: '100vh',
  width: '100%',
}));

const PageWrapper = styled('div')(() => ({
  display: 'flex',
  flexGrow: 1,
  paddingBottom: '60px',
  flexDirection: 'column',
  zIndex: 1,
  backgroundColor: 'transparent',
}));

const FullLayout = () => {

  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [isMobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  // const lgUp = useMediaQuery((theme) => theme.breakpoints.up("lg"));

  return (
    
    <MainWrapper
      className='mainwrapper'
    >  
      {/* ------------------------------------------- */}
      {/* Sidebar */}
      {/* ------------------------------------------- */}
      
      {/* ------------------------------------------- */}
      {/* Main Wrapper */}
      {/* ------------------------------------------- */}
      <PageWrapper
        className="page-wrapper"
      >
        
        {/* ------------------------------------------- */}
        {/* Header */}
        {/* ------------------------------------------- 
        <Header toggleSidebar={() => setSidebarOpen(!isSidebarOpen)} toggleMobileSidebar={() => setMobileSidebarOpen(true)} />*/}
        {/* ------------------------------------------- */}
        {/* PageContent */}
        {/* ------------------------------------------- */}
        <Container sx={{
          paddingTop: "20px",
          maxWidth: '1200px',
        }}
        >
          {/* ------------------------------------------- */}
          {/* Page Route */}
          {/* ------------------------------------------- */}
          
          {/* ------------------------------------------- */}
          {/* End Page */}
          {/* ------------------------------------------- */}
        </Container>
      </PageWrapper>
    </MainWrapper>
  );
};

export default FullLayout;
