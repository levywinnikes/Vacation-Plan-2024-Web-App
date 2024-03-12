import React, { Fragment, useEffect, useState } from "react";
import background1 from "../../../assets/images/1.jpeg";
import background2 from "../../../assets/images/2.jpeg";
import background3 from "../../../assets/images/3.jpeg";
import background4 from "../../../assets/images/4.jpeg";

function Background() {
  const [currentBackgroundIndex, setCurrentBackgroundIndex] = useState(1);

  useEffect(() => {
    const images = [background1, background2, background3, background4];

    const preLoadImages = () => {
      images.forEach((image) => {
        const img = new Image();
        img.src = image;
      });
    };

    preLoadImages();

    const intervalId = setInterval(() => {
      setCurrentBackgroundIndex((prevIndex) => (prevIndex % 4) + 1);
    }, 20000); // Tempo limite para troca de imagens

    return () => clearInterval(intervalId);
  }, []);

  return (
    <Fragment>
      <div className={`background-image-${currentBackgroundIndex}`}></div>
    </Fragment>
  );
}

export default Background;
