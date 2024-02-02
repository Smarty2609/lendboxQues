import React, {useEffect, useRef} from 'react';
import {handleCustomWheel} from "../../utils/customScroll";
import useComponentObserver from '../../customHooks/useComponentObserver';

const DualWindowScroll = () =>{
  const leftSectionRef = useRef(null);
  const [enableScroll, observer] = useComponentObserver();
  const handleWheel = (event) => {
    if(enableScroll)
    handleCustomWheel(event, leftSectionRef, '.dualWindow', '.leftSection');
  };

  useEffect(() => { 
    if (leftSectionRef?.current) { // it will check if section is in view
      observer.observe(leftSectionRef?.current);
    }

    window.addEventListener('wheel', handleWheel);
    return(()=>{
      window.removeEventListener('wheel', handleWheel);
    });
  
  });

  useEffect(()=>{
    const scrollable1 = document.getElementById('scrollable1');
    const scrollable2 = document.getElementById('scrollable2');
  
    scrollable1.addEventListener('scroll', function() {
      scrollable2.scrollLeft = scrollable1.scrollLeft;
    });
  
    scrollable2.addEventListener('scroll', function() {
      scrollable1.scrollLeft = scrollable2.scrollLeft;
    });
  });

  return (
    <div className='dualWindow'>
      <section
        id="scrollable1"
        ref={leftSectionRef}
        onWheel={handleWheel}
        className='leftSection'
      >
        <h1>ON FOCUS, STOPS VERTICAL SCROLLING.... only Horizontal Scrolls works</h1>
      </section>
      <section id='scrollable2' className='rightSection'>
        <h1>ON FOCUS, STOPS VERTICAL SCROLLING.... only Horizontal Scrolls works</h1>
      </section>
    </div>
  )
}

export default DualWindowScroll;
