import React, { useEffect } from 'react';
import Typed from 'react-typed';
import 'react-typed/dist/animatedCursor.css';
const PrincipalBaner = () => {
   
    return (
        
        <>
          <div class="hero" id="home">
            <div class="container-fluid">
                <div class="row align-items-center">
                    <div class="col-sm-12 col-md-6">
                        <div class="hero-content">
                            <div class="hero-text">
                            <Typed
                    strings={[`<h2>${'Munya developers'}</h2>`]}
                    typeSpeed={90}
                    style={{color:'white'}}
                    loop
                />
                            </div>
                            <div class="hero-btn">
                                <a class="btn" href="">Hire Me</a>
                                <a class="btn" href="">Contact Me</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-6 d-none d-md-block">
                        <div class="hero-image">
                            <img src="img/hero.png" alt="Hero Image"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            
        </>
    );
};

export default PrincipalBaner;