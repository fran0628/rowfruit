import React from "react";
// import Swal from "sweetalert2";

function FruitIconItem(props) {
  const { Img } = props;
  const fruitIcon = "http://localhost:3000/indexCustomAniIcon/indexCustom/" + Img;
  // console.log(fruitIcon);

  //   function clickMe() {
  //     Swal.fire({
  //       title: `水果名稱`,
  //       text: "營養成分",
  //     });
  //   }

  return (
    <>
      <div className="fruit_ball" id="clickMe">
        <img src={fruitIcon} alt="rowfruit" />
      </div>
    </>
  );
}
export default FruitIconItem;
