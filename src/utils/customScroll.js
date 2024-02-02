export const handleCustomWheel = (event,section,container,scrollContainer) => {
    const windowSection = section?.current;
    const content = document.querySelector(container);
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const contentTop = content?.offsetTop;
      const contentBottom = contentTop + content?.offsetHeight;
      if (contentTop >= (scrollPosition + windowHeight / 2.65) || contentBottom <= (scrollPosition + windowHeight / 1.4 )) {
        document.body.style.overflowY = '';
      } else {
        document.body.style.overflowY = 'hidden';
        if(document.querySelector(scrollContainer)?.style?.overflowX){
          document.querySelector(scrollContainer).style.overflowX="scroll";
        }
        if (windowSection?.scrollLeft === 0) {
          document.body.style.overflowY = '';
        }
        
        const isAtEnd = windowSection.scrollLeft === windowSection?.scrollWidth - windowSection?.clientWidth;
        if (isAtEnd) {
          document.body.style.overflowY = '';
        }
    }
    
    if (event?.deltaY < 0) {
      windowSection.scrollLeft -= 15;
    } else {
      windowSection.scrollLeft += 15;
    }
  };