import React, { useEffect, useState } from "react";
import "./Map.scss";
import FruitBall from "./components/FruitBall/FruitBall";
import FruitMap from "./components/FruitMapFarmer/FruitMap";
import FruitMapFarmerItem from "./components/FruitMapFarmer/FruitMapFarmerItem";
// import FruitMapFarmer from "./components/FruitMapFarmer/FruitMapFarmer"

import axios from "axios";
import MultiLevelBreadcrumb from "../../component/BreadCrumb/MultiLevelBreadcrumb";
import { API_HOST } from "../../config";

function FruitMapMain(props) {
  // const farmerInfoItem
  const [farmerInfoItem, setFarmerInfoItem] = useState([]);
  const [farmerMap, setFarmerMap] = useState([]);
  const [fruits, setFruits] = useState([]);
  // const [position, setPosition] = useState([]); //全部小農座標
  // const [singlePosition, setSinglePosition] = useState([]); 單個小農座標

  // 伺服器的資料 const [fruitData, setFruitData]= useState([]);
  // 伺服器完整資料
  useEffect(() => {
    const fetchFarmerMap = async () => {
      const res = await axios.get("/Map/Fruit");
      console.log(res.data);
      setFarmerMap(res.data);
    };
    fetchFarmerMap();
  }, []);

  // 抓出單個水果種類的api
  useEffect(() => {
    const fetchFruits = async () => {
      const res = await axios.get(API_HOST + "/api/Map/SingleFruit");
      console.log(res.data);
      setFruits(res.data);
    };
    fetchFruits();
  }, []);

  //點選水果的function 以及過濾出相對應小農
  //把fruitclick這個function一層一層傳下去 main->ball->item ; item->ball->main會再回傳
  function fruitClick(fruit) {
    console.log("fruitClick", fruit);
    let result = farmerMap.filter((map) => {
      return map.fruit.indexOf(fruit) > 0;
    });
    console.log(result);
  }

  return (
    <>
      <MultiLevelBreadcrumb />
      <div>
        <FruitBall fruitClick={fruitClick} fruits={fruits} />
        <div className="container-fluid row">
          <div className="col-6">
            {/* 地圖 */}
            <FruitMap farmerMap={farmerMap} setFarmerMap={setFarmerMap} />
          </div>
          <div className="col-6">
            {" "}
            {/* 小農資訊 */}
            <FruitMapFarmerItem farmerInfoItem={setFarmerInfoItem} />
          </div>
        </div>
      </div>
    </>
  );
}
export default FruitMapMain;
