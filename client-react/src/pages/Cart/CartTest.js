import React, { useState } from "react";
import "./Cart.scss";
import CartStepOne from "./components/CartStepOne";
import CartStepTwo from "./components/CartStepTwo";
import CartStepThree from "./components/CartStepThree"
import CartStepFour from "./components/CartStepFour"

export default function CartTest(props) {
  const [step, setStep] = useState(1);

  return (
    <div className="container position-relative">
      <div className="fullLine"></div>
      <div
        className="d-flex justify-content-around align-items-center"
        style={{ height: "200px" }}
      >
        <div className="d-flex flex-column align-items-center">
          {step === 1 ? (
            <div className="step" style={{ background: "rgb(136, 133, 133)" }}>
              1
            </div>
          ) : (
            <div className="step">1</div>
          )}

          <p className="m-0">Check Order</p>
          <p className="m-0">確認購買</p>
        </div>
        <div className="d-flex flex-column align-items-center">
        {step === 2 ? (
            <div className="step" style={{ background: "rgb(136, 133, 133)" }}>
              2
            </div>
          ) : (
            <div className="step">2</div>
          )}
          <p className="m-0">Choose Payment Method</p>
          <p className="m-0">選擇付款方式</p>
        </div>
        <div className="d-flex flex-column align-items-center">
        {step === 3 ? (
            <div className="step" style={{ background: "rgb(136, 133, 133)" }}>
              3
            </div>
          ) : (
            <div className="step">3</div>
          )}
          <p className="m-0">Fill The Add</p>
          <p className="m-0">確認購買</p>
        </div>
        <div className="d-flex flex-column align-items-center">
        {step === 4 ? (
            <div className="step" style={{ background: "rgb(136, 133, 133)" }}>
              4
            </div>
          ) : (
            <div className="step">4</div>
          )}
          <p className="m-0">Shopping Completed</p>
          <p className="m-0">購買完成</p>
        </div>
      </div>

      {step === 1 && <CartStepOne setStep={setStep} />}
      {step === 2 && <CartStepTwo setStep={setStep} />}
      {step === 3 && <CartStepThree setStep={setStep} />}
      {step === 4 && <CartStepFour setStep={setStep} />}

     
    </div>
  );
}
