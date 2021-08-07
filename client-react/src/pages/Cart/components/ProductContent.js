import React from "react";

function StepOneContent() {
  return (
    <>
    <tbody>
      <td style={{ width: "10%" }}>
        <img
          className="imageStyle"
          src="https://images.pexels.com/photos/7502346/pexels-photo-7502346.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt=""
        />
      </td>
      <td style={{ width: "10%" }}>美白水果合</td>
      <td style={{ width: "60%" }}>
        蜜蕉1個,台蕉1號1個,寶島蕉1個,羅馬蘋果1個,富士蘋果1個,加拉蘋果1個
      </td>
      <td>$500</td>
      <td>1</td>
      <td>
        <i className="pe-2 fas fa-trash-alt "></i>
      </td>
      </tbody>
    </>
  );
}
export default StepOneContent;
