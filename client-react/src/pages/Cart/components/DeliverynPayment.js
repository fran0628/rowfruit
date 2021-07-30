import React from "react";

function DeliverynPayment(props) {
  return (
    <>
      <h3 className="container">配送方式 & 付款方式</h3>
      <div classNameName="col-8 mx-auto mt-3 container">
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio1"
            value="option1"
          ></input>
          <label class="form-check-label" for="inlineRadio1">
            宅配+貨到付款
          </label>
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio2"
            value="option2"
          ></input>
          <label class="form-check-label" for="inlineRadio2">
            宅配+線上刷卡
          </label>
        </div>
      </div>
    </>
  );
}
export default DeliverynPayment;
