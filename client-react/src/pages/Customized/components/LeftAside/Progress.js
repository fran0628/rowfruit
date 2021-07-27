import React from "react";

function Progress({className,chineseName,width}) {
  
    const newName = className+" progress-bar"
    console.log(newName)
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
      <p className="text-center my-0">{chineseName}</p>
    </>
  );
}
export default Progress;
