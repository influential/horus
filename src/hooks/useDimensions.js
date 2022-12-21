import { useState, useEffect } from "react";

export const useDimensions = () => {
    const [windowDimenion, detectHW] = useState({
        winWidth: window.innerWidth,
        winHeight: window.innerHeight,
    });
    
    const detectSize = () => {
        detectHW({
            winWidth: window.innerWidth,
            winHeight: window.innerHeight,
        })
    }
    
    useEffect(() => {
        window.addEventListener('resize', detectSize);
        // console.log(winWidth)
        // console.log(windowDimenion)
    
        return () => {
            window.removeEventListener('resize', detectSize);
        }
    }, [windowDimenion]);

    return windowDimenion;
}

