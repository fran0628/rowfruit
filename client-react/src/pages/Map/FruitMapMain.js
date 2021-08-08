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
  // const [farmerInfoItem, setFarmerInfoItem] = useState([]);

  // 傳遞小農位置
  const [farmerMap, setFarmerMap] = useState([]);
  const [fruits, setFruits] = useState([]);
  const [sample, setSample] = useState([]);
  // const [position, setPosition] = useState([]); //全部小農座標
  // const [singlePosition, setSinglePosition] = useState([]); 單個小農座標

  // 伺服器的資料 const [fruitData, setFruitData]= useState([]);
  // 伺服器完整資料
  useEffect(() => {
    const fetchFarmerMap = async () => {
      const res = await axios.get("/Map/Fruit");
      // console.log(res.data);
      setFarmerMap(res.data);
      setSample(res.data);
    };
    // console.log("123");
    fetchFarmerMap();
  }, []);

  // 抓出單個水果種類的api
  useEffect(() => {
    const fetchFruits = async () => {
      const res = await axios.get(API_HOST + "/api/Map/SingleFruit");
      // console.log(res.data);
      setFruits(res.data);
    };
    fetchFruits();
  }, []);

  //把fruitclick這個function一層一層傳下去 main->ball->item ; item->ball->main會再回傳
  function fruitClick(fruit) {
    console.log("fruitClick", fruit);
    let result = sample.filter((map) => {
      return map.fruit?.indexOf(fruit) >= 0;
    });
    // console.log(result);
    setFarmerMap(result);
  }

  return (
    <>
      <MultiLevelBreadcrumb />

      <div className="container-fluid row">
        <FruitBall
          fruitClick={fruitClick}
          fruits={fruits}
          farmerMap={farmerMap}
        />
        <div className="container-fluid row ">
          <div className="col-6">
            {/* 地圖 */}
            <FruitMap farmerMap={farmerMap} setFarmerMap={setFarmerMap} />
          </div>

          <div className="col-6 vh-100  overflow-scroll px-5" id="style-3">
            <h5　className="text-decoration-underline">小農列表</h5> 
            {/* 小農資訊 */}
            {farmerMap &&
              farmerMap.map((f, i) => {
                return <FruitMapFarmerItem value={f} key={i} />;
              })}
          </div>
        </div>
      </div>
    </>
  );
}
export default FruitMapMain;
