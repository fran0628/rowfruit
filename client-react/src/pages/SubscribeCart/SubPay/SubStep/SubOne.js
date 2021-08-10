import React ,{ useState } from "react";
import SubItem from '../SubItem';
import SubCheck from '../SubCheck';
import { withRouter } from "react-router-dom";

function SubOne(props) {
  const{setStep, subCart, userData, transport, setTransport, receiver, setReceiver, phone, setPhone, address, setAddress, subOrder, setSubOrder}=props

  function nameChange(e) {
    setReceiver(e.target.value);
  }
  function phoneChange(e) {
    setPhone(e.target.value);
  }
  function addressChange(e) {
    setAddress(e.target.value);
  }
  const [inputData, setInputData] = useState(false)
  
  return (
    <>
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
                                <th><span>月繳金額</span></th>
                            </tr>
                            </thead>
                            <tbody>
                            {subCart.map((item, index) => {
                                const {
                                product_id,
                                product_name,
                                subscribe_way,
                                images,
                                } = item;
                                return (
                                <SubItem
                                    key={product_id}
                                    productId={product_id}
                                    product_name={product_name}
                                    images={images}
                                    subscribe_way={subscribe_way}
                                />
                                );
                            })}
                            </tbody>
                        </table>
                    </div>
                    <div>
                        <div class="subinfo">配送資訊</div>
                        <section id="checkbox">
                        <input
                            type="checkbox"
                            checked={inputData}
                            onChange={(event) => {
                            setInputData(event.target.checked);
                            setReceiver(userData.name);
                            setPhone(userData.phone);
                            setAddress(userData.address);
                            }}
                        />
                        <lable class="m-2">輸入會員資料</lable>
                        </section>
                        <div class="subinfoway"><span>選擇配送方式</span></div>
                        <select class="form-select" 
                        aria-label="Default select example" 
                        value={transport}
                        onChange={(event) => {
                            setTransport(event.target.value)
                        }}>
                        <option value="150,黑貓宅急便" selected>黑貓宅急便</option>
                        <option value="100,711取貨">7-11取貨</option>
                        </select>
                        <div class="my-2">
                            <label for="exampleFormControlInput1" class="form-label"><span>收貨人</span></label>
                            <input type="text" class="form-control" placeholder="請輸入名字" onChange={nameChange} value={receiver}/>
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label"><span>手機號碼</span></label>
                            <input type="tel" class="form-control" placeholder="請輸入手機號碼" onChange={phoneChange} value={phone}/>
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">地址</label>
                            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="請輸入寄送地址" onChange={addressChange} value={address}/>
                        </div>
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
                        <SubCheck
                            key={product_id}
                            productId={product_id}
                            subscribe_way={subscribe_way}
                            setStep={setStep}
                            transport={transport}
                            receiver={receiver}
                            phone={phone}
                            address={address}
                            subOrder={subOrder}
                            setSubOrder={setSubOrder}
                        />
                        );
                    })} 
                </div>
                </div>
                <div class="container back">
                <button class="btn normalback-btn mt-5" onClick={() => {props.history.goBack()}}><i class="fas fa-arrow-left me-2"></i>返回</button>
                </div>
    </>
  );
}
export default withRouter(SubOne);
