import React, { useEffect, useRef } from "react";
import "./styles.css";

const ResponsiveBackground = ({ mobileBg, tabletBg, desktopBg }) => {
    const bgRef = useRef(null);

    useEffect(() => {
        if (bgRef.current) {
          bgRef.current.style.setProperty("--mobile-bg", `url(${mobileBg})`);
          bgRef.current.style.setProperty("--tablet-bg", `url(${tabletBg})`);
          bgRef.current.style.setProperty("--desktop-bg", `url(${desktopBg})`);
        }
      }, [mobileBg, tabletBg, desktopBg]);

      return <div ref={bgRef} className="dynamic-bg" style={{ height: "100vh" }} />;
    };
    
    export default ResponsiveBackground;