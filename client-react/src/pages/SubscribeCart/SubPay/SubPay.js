import React from 'react'
import './SubPay.scss'

function SubPay() {
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
                    <div class="d-flex flex-column ">
                    <div>
                        <div class="subinfo">訂單資訊</div>
                        <table class="table subtable mt-5">
                            <thead>
                            <tr>
                                <th><span>商品圖片</span></th>
                                <th><span>商品名稱</span></th>
                                <th><span>訂閱時間</span></th>
                                <th><span>數量</span></th>
                                <th><span>金額</span></th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <th class="cartimg"><img src="/Mainphotos/4.jpg" alt="" /></th>
                                <td><span>美白水果盒</span></td>
                                <td><span>月訂閱制</span></td>
                                <td><span>一盒</span></td>
                                <td><span>＄2000</span></td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div>
                        <div class="subinfo">配送資訊</div>
                        <div class="subinfoway"><span>請選擇配送方式</span></div>
                        <select class="form-select" aria-label="Default select example">
                            <option selected>黑貓宅急便</option>
                            <option value="1">7-11取貨</option>
                        </select>
                        <div class="my-2">
                            <label for="exampleFormControlInput1" class="form-label"><span>收貨人</span></label>
                            <input type="text" class="form-control" placeholder="請輸入名字" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label"><span>手機號碼</span></label>
                            <input type="text" class="form-control" placeholder="請輸入手機號碼" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">電子信箱</label>
                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="請輸入電子信箱" />
                        </div>
                    </div>
                    </div>
                </div>
                <div class="col-md-4 ms-2">
                    <div class="checkoutdetail p-3">
                        <span class="subpaydetail">訂單摘要</span>
                        <hr />
                        <div class="d-flex justify-content-between">
                        <span class="subpayinfodetail">商品總額</span>
                        <span>$2000</span>
                        </div>
                        <div class="d-flex justify-content-between">
                        <div class="my-3">
                            <span class="subpayinfodetail">運費</span>
                        </div>
                        <div class="my-3">
                            <span>$150</span>
                        </div>
                        </div>
                        <hr />
                        <div class="d-flex justify-content-between">
                        <span class="subpayinfodetail">訂單總額</span>
                        <span class="text-danger">$2150</span>
                        </div>
                        <div class="submit text-end">
                        <button class="subpaybuy-btn mt-3">立即付款</button>
                        </div>
                    </div>
                </div>
                </div>
                <div class="container back">
                <button class="btn btn-light mt-5">返回</button>
                </div>
            </div>
        </>
    );
}

export default SubPay