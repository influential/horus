import { useState, useEffect } from "react";

export const useWindowDimensions = () => {
    const [windowDimenions, detectHW] = useState({
        winWidth: null,
        winHeight: null,
    });

    const detectSize = () => {
        if (typeof window !== 'undefined') {
            detectHW({
                winWidth: window.innerWidth,
                winHeight: window.innerHeight,
            });
        }
    }

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('resize', detectSize);
        }
        // console.log(winWidth)
        // console.log(windowDimenions)

        return () => {
            window.removeEventListener('resize', detectSize);
        }
    }, [windowDimenions]);

    return windowDimenions;
}