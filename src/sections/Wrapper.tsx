import React from "react";

const Wrapper = (Component: React.FC) => () => {
  return (
    <div className="conent">
      <Component />
    </div>
  );
};

export default Wrapper;
