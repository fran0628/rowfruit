import React from "react";

function Progress(props) {
    const {className,chineseName}=props
    const newName = className+"progress-bar"
  return (
    <>
      <div className="progress">
        <div
          className={newName}
          style={{ width: "0%" }}
          role="progressbar"
        >
          0%
        </div>
      </div>
      <p className="text-center my-0">{chineseName}</p>
    </>
  );
}
export default Progress;
