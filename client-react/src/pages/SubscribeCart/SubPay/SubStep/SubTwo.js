import React ,{ useState } from "react";
import SubDetail from '../SubDetail';

function SubTwo(props) {
  const{setStep, subCart, userData}=props


  return (
    <>
    <div class="container">
      <div class="container row mt-5">
        <div class="col-md-7 me-5">
          <div class="d-flex flex-column">
              <div class="subinfo">付款方式</div>
              <div class="subinfoway mt-4 ms-3"><span>請選擇支付方式</span></div>
              <div class="d-flex mt-1 mb-3 ms-3">
                <div class="form-check me-5">
                  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"checked />
                  <label class="form-check-label" for="flexRadioDefault1">
                    貨到現金付款
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                  <label class="form-check-label" for="flexRadioDefault2">
                    信用卡支付
                  </label>
                </div>
              </div>
              <div class="subinfo mt-3">發票信息</div>
              <div class="form-check mt-4 ms-3">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked />
                <label class="form-check-label" for="flexCheckChecked">
                  開立發票
                </label>
                <span>（本公司只提供電子發票）</span>
              </div>
          </div>
        </div>
        <div class="col-md-4 ms-2">
        {subCart.map((item, index) => {
              const {
              product_id,
              subscribe_way,
              } = item;
              return (
              <SubDetail
                key={product_id}
                productId={product_id}
                subscribe_way={subscribe_way}
                setStep={setStep}
                userData={userData}
              />
              );
          })} 
        </div>
        <div class="container back">
          <button class="btn normalback-btn mt-5" onClick={()=>{setStep(1)}}><i class="fas fa-arrow-left me-2"></i>返回</button>
        </div>
      </div>
    </div>
    </>
  );
}
export default SubTwo;
