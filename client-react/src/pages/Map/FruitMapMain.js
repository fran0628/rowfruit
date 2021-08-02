import React, { useEffect, useState } from "react";
import "./Map.scss";
import FruitBall from "./components/FruitBall/FruitBall";
import FruitMap from "./components/FruitMapFarmer/FruitMap";
import FruitMapFarmerItem from "./components/FruitMapFarmer/FruitMapFarmerItem";
import axios from "axios";
import MultiLevelBreadcrumb from '../../component/BreadCrumb/MultiLevelBreadcrumb';


function FruitMapMain(props) {
  const [farmerMap, setFarmerMap] = useState([]);
  // const [position, setPosition] = useState([]); 全部小農座標
  // const [singlePosition, setSinglePosition] = useState([]); 單個小農座標

  useEffect(() => {
    const fetchFruitMap = async () => {
      const res = await axios.get("/Map/Fruit");
      console.log(res.data);
      setFarmerMap(res.data);
    };
    fetchFruitMap();
  }, []);

  // 伺服器的資料 const [fruitData, setFruitData]= useState([]);

  // 篩選出每個水果種類對應到的水果小農
  // const [fruitType, setFruitType] = useState([]);

  

  return (
    <>
    <MultiLevelBreadcrumb />
      <div>
        <FruitBall farmerMap={farmerMap} setFarmerMap={setFarmerMap} />
        <div className="container-fluid row">
          <div className="col-6">
            {/* 地圖 */}
            <FruitMap farmerMap={farmerMap} setFarmerMap={setFarmerMap} />
          </div>
          <div className="col-6">
            {" "}
            {/* 小農資訊 */}
            <FruitMapFarmerItem />
            {/* <FruitMapFarmerItem  fruitType={fruitType} , setFruitType={setFruitType} /> */}
          </div>
        </div>
      </div>
    </>
  );
}
export default FruitMapMain;
