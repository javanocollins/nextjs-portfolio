import { useState, useEffect } from "react";

export default function useWindowDimensions() {
    const hasWindow = typeof window !== "undefined";

    const [windowDimensions, setWindowDimensions] = useState({
        width: hasWindow ? window.innerWidth : null,
        height: hasWindow ? window.innerHeight : null,
    });

    useEffect(() => {
        function handleResize() {
            setWindowDimensions({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowDimensions;
}
