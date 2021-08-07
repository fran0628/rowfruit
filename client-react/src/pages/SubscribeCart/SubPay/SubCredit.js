import React from "react";
import './SubCredit.scss';

function SubCredit() {      
    return (
    <>
    <div class="container">
      <div class="container mt-5 d-flex justify-content-center">
        <div class="cartlist">01 確認明細及選擇配送方式</div>
        <div class="d-flex align-items-center"><i class="fas fa-arrow-right"></i></div>
        <div class="cartlist">02 選擇付款方式</div>
        <div class="d-flex align-items-center"><i class="fas fa-arrow-right"></i></div>
        <div class="cartlist">03 購物完成</div>
      </div>
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
                <span>（本公司只提供電子發票</span>
              </div>
          </div>
        </div>
        <div class="col-md-4 ms-2">
            <div class="checkoutdetail p-3">
              <span>訂單摘要</span>
              <hr />
              <div class="d-flex justify-content-between">
                <span>商品總額</span>
                <span>$2000</span>
              </div>
              <div class="d-flex justify-content-between">
                <div class="my-3">
                  <span>運費</span>
                </div>
                <div class="my-3">
                  <span>$150</span>
                </div>
              </div>
              <hr />
              <div class="d-flex justify-content-between">
                <span>訂單總額</span>
                <span>$2150</span>
              </div>
            </div>
        </div>
      </div>
        
    </div>
    </>
    );
}

export default SubCredit