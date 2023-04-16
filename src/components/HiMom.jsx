import React, { useState } from 'react';

const HiMom = () => {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <button onClick={toggleVisibility}>Toggle Visibility</button>
      {isVisible && <div>hi mom</div>}
    </div>
  );
};

export default HiMom;

