export const handleCustomWheel = (event,section,container,scrollContainer) => {
    const windowSection = section?.current;
    const content = document.querySelector(container);
    const contentTop = content?.offsetTop;
    const contentBottom = contentTop + content?.offsetHeight;
   
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
     
    // enable vertical scrolling if required comp is not in view
    if (contentTop >= (scrollPosition + windowHeight / 2.65) || contentBottom <= (scrollPosition + windowHeight / 1.4 )) {
      document.body.style.overflowY = '';
    } else {
      document.body.style.overflowY = 'hidden'; // disable vertical scroll
      if(document.querySelector(scrollContainer)?.style?.overflowX){
        document.querySelector(scrollContainer).style.overflowX="scroll"; // enable horizontal scroll
      }

      // enable vertical scrolling when horizontal scroll is at start or end position
      const isAtEnd = windowSection.scrollLeft === windowSection?.scrollWidth - windowSection?.clientWidth;
      if (windowSection?.scrollLeft === 0 || isAtEnd) {
        document.body.style.overflowY = '';
      }
    }
    
    if (event?.deltaY < 0) {
      windowSection.scrollLeft -= 15;  // scroll towards right on scrolling downward
    } else {
      windowSection.scrollLeft += 15; // scroll towards left on scrolling upward
    }
  };