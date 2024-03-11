import React, { useEffect, useState } from "react";

function Background() {
  const [currentBackgroundIndex, setCurrentBackgroundIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentBackgroundIndex((prevIndex) => (prevIndex % 4) + 1);
    }, 20000);

    return () => clearInterval(intervalId);
  }, []);

  return <div className={`background-image-${currentBackgroundIndex}`}></div>;
}

export default Background;
