import React from 'react';
import About from './components/About';
import BannerPrice from './components/BannerPrice';
import Experience from './components/Experience';
import Header from './components/Header';
import PrincipalBaner from './components/PrincipalBaner';
import Services from './components/Services';

const Index = () => {
    return (
        <>
          <Header />
          <PrincipalBaner />
          <About />
          <Services/>
          <Experience/>
          <BannerPrice />
        </>
    );
};

export default Index;