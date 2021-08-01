import React, { useEffect, useState } from "react";
import axios from "axios";
// import Item from "../../Cart/components/Item";

function FruitMapFarmerItem(props) {
  const { avatar, fram_name, content } = props;
  // const [FruitMapFarmerItem, setFruitMapFarmerItem] = useState([]);

  // 認識小農按鈕連結
  const urlid = String();
  const urlknowfarmbtn = "/farmerlist/" + urlid;

  // 抓小農頭像圖片
  const { farmerImg } = props;
  const PF = "http://localhost:5000/images/";
  console.log(farmerImg);

  // 抓果園名稱與果園介紹
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchFruitMapFarmerItem = async () => {
      const res = await axios.get("/Map/Fruit");
      console.log(res);
      console.log(res.data);
      setData(res.data);
    };
    fetchFruitMapFarmerItem();
  }, []);

  useEffect(() => {
    setData(data);
    // setFruitMapFarmerItem(data);
  }, []);

  return (
    <>
      <div className="container-fluid d-flex farmer flex-row block mt-2">
        <div>
          <img
            className="avatar mt-3 m-3 object-fit"
            src={PF + avatar}
            alt="..."
          />
          <h6 className="mt-3 m-3"></h6>
        </div>
        <div className="vertical align-items-center">
          <h5 className="mt-4">
            果園名稱：
            <br />
            {fram_name}
          </h5>
          <h6>{content}</h6>
          {/* <div className="mt-5 "><h6>口碑第一</h6></div> */}
        </div>
        <a className="align-self-end" href={urlknowfarmbtn}>
          <button className="knowfarmbtn ">認識小農</button>
        </a>
      </div>
    </>
  );
}
export default FruitMapFarmerItem;
