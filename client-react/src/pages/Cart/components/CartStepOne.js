import React from "react";
import ProductTable from "./ProductTable";
function CartStepOne(props) {
  const{setStep,myCart}=props
  return (
    <>
      <ProductTable myCart={myCart}/>
      <div className="d-flex justify-content-center pt-3">
        <span className="btn normal-btn mx-4 my-3">繼續購物</span>
        <span onClick={()=>{setStep(2)}} className="btn normal-btn mx-4 my-3">下一步</span>
      </div>
    </>
  );
}
export default CartStepOne;
