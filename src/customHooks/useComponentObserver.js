import React, {useState} from "react";

const useComponentObserver = () =>{
    const [enableScroll, setEnableScroll] = useState(false);
  
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setEnableScroll(true);
          }else{
            setEnableScroll(false);
          }
        },
        { threshold: 0 }
      );
    
    return [enableScroll, observer];
    
  }

 export default useComponentObserver; 