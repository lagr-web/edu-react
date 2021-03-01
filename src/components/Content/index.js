import React, { useState, useEffect } from 'react';
import DesktopView from "./DesktopView"
import MobileView from "./MobileView"

const windowDims = () => ({
	height: window.innerHeight,
	width: window.innerWidth,
});



const Content = ({items}) => {

const [dimensions, setDimensions] = useState(windowDims());


useEffect(() => {


    const handleResize = () => {
        setDimensions(windowDims());
        //console.log((windowDims()));
    };//
      window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
}, []);

const breakpoint = 620;

return dimensions.width < breakpoint ? <MobileView items={items} /> : <DesktopView items={items} />;


}

export default Content;
