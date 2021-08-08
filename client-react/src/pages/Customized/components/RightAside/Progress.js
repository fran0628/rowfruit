import React from "react";

function Progress({className,chineseName,width}) {
  
    const newName = className+" progress-bar"
  return (
    <>
      <div className="progress">
        <div
          className={newName}
          style={{ width: `${width}%` }}
          role="progressbar"
        >
         {width}%
        </div>
      </div>
      <p className="text-center my-0 text-dark">{chineseName}</p>
    </>
  );
}
export default Progress;
