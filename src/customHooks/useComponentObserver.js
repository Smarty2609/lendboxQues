import {useState} from "react";

const useComponentObserver = () =>{
    const [enableScroll, setEnableScroll] = useState(false);
  
    const observer = new IntersectionObserver(
    ([entry]) => {
        if (entry.isIntersecting) {  // if required component is in window view
        setEnableScroll(true);
        }else{
        setEnableScroll(false);
        }
    },{ threshold: 0 }
    );
    return [enableScroll, observer];
  }

 export default useComponentObserver; 