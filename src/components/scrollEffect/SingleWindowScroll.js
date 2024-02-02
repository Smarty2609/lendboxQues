import React, { useEffect, useRef, useState } from 'react';
import {handleCustomWheel} from "../../utils/customScroll";
import useComponentObserver from '../../customHooks/useComponentObserver';

const SingleWindowScroll = () => {
  const windowSectionRef = useRef(null);
  const [enableScroll, observer] = useComponentObserver();

  const handleWheel = (event) => {
    if(enableScroll){
      handleCustomWheel(event, windowSectionRef, '.singleWindow', '.windowSection');
    }
  }

  useEffect(() => {
    if (windowSectionRef?.current) {
      observer.observe(windowSectionRef.current);
    }
    window.addEventListener('wheel', handleWheel);
    return(()=>{
      window.removeEventListener('wheel', handleWheel);
    });
  });

  return (
    <div className='singleWindow'>
      <p>Horizontal Scroll Begins</p>
      <section
        ref={windowSectionRef}
        onWheel={handleWheel}
        className='windowSection'
      >
        <h1>ON FOCUS, STOPS VERTICAL SCROLLING.... only Horizontal Scrolls works</h1>
      </section>
    </div>
  );
};

export default SingleWindowScroll;
