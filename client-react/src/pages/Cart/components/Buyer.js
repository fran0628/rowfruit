import React from 'react';

function Buyer() {
  return (
    <>
      <h3 className="text-center">訂購人資訊</h3>
      <form class="container">
        <div class="row mb-3">
          <label for="inputEmail3" class="col-sm-2 col-form-label">
            購買姓名
          </label>
          <div class="col-sm-10">
            <input
              type="email"
              class="form-control"
              id="inputEmail3"
              placeholder="王x名"
            ></input>
          </div>
          <label for="inputEmail3" class="col-sm-2 col-form-label mt-3">
            連絡電話
          </label>
          <div class="col-sm-10 mt-3">
            <input
              type="email"
              class="form-control"
              id="inputEmail3"
              placeholder="09xxxxxxxx"
            ></input>
          </div>
          <label for="inputEmail3" class="col-sm-2 col-form-label mt-3">
            寄送地址
          </label>
          <div class="col-sm-10 mt-3">
            <input
              type="email"
              class="form-control"
              id="inputEmail3"
              placeholder="台北市信義區吳興街177號"
            ></input>
          </div>
          <button type="submit" class="btn btn-success container-fluid mt-3">
            確認並送出訂單
          </button>
        </div>
      </form>
    </>
  );
}
export default Buyer