import React, { useEffect,useState } from "react";
// import { Link, withRouter } from "react-router-dom";
// import FruitMapIcon from "../indexCustomAniIcon/avocado.png";
import axios from "axios";

function FruitMapFarmerItem(props) {
  // const { farmName, description, feature } = props;
  // const [farm_Name, setFarm_Name] = useState([]);
  // const [content, setContent] = useState([]);
  // 認識小農按鈕連結
  const urlid = String();
  const urlknowfarmbtn = "/farmerlist/" + urlid;
  // 抓小農頭像圖片
  const PF = "http://localhost:5000/images";
  
  // 抓果園名稱與果園介紹
  // const [FruitMapFarmerItem, setFruitMapFarmerItem] = useState([]);
  // useEffect(() => {
  //   const fetchFruitMapFarmerItem = async () => {
  //     const res = await axios.get("/farmer");
  //     console.log(res);
  //     setFruitMapFarmerItem(res.data);
  //     console.log(res.data);
  //   };

  //   fetchFruitMapFarmerItem();
  // }, []);

  return (
    <>
      <div className="container-fluid d-flex farmer flex-row block mt-2">
        <div>
          <img
            className="avatar mt-3 m-3"
            src={PF + FruitMapFarmerItem.avatar}
            alt="..."
          />
          <h6 className="mt-3 m-3">
            <i className="fa fa-star" aria-hidden="true"></i>            
            <i className="fa fa-star" aria-hidden="true"></i>            
            <i className="fa fa-star" aria-hidden="true"></i>            
            <i className="fa fa-star" aria-hidden="true"></i>            
            <i className="fa fa-star" aria-hidden="true"></i>            
          </h6>
        </div>
        <div className="vertical align-items-center">
          <h4 className="mt-4">
            {/* 名稱{FruitMapFarmerItem.fram_Name} */}
            {/* {FruitMapFarmerItem.map((f, i) => {
              return <FruitMapFarmerItem farmer={f} key={i} />;
            })} */}
          </h4>
          <h6>{FruitMapFarmerItem.content}</h6>
          <div className="mt-5 px-3">
            {/* <img className="icon" src="/img/ecology.png" alt="" /> */}
            {/* <h6>口碑第一</h6> */}
          </div>
        </div>
        <a href={urlknowfarmbtn}>
        <button className="knowfarmbtn align-self-end p-1">認識小農</button>
        </a>
      </div>
    </>
  );
}
export default FruitMapFarmerItem;
