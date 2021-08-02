import React, { useEffect, useState } from "react";
import "./Map.scss";
import FruitBall from "./components/FruitBall";
import FruitMapFarmer from "./components/FruitMapFarmer";
import axios from "axios";
import MultiLevelBreadcrumb from '../../component/BreadCrumb/MultiLevelBreadcrumb';


function FruitMapMain(props) {
  const [data, setData] = useState([]);
  const [fruitNameList, setFruitNameList] = useState([]);
  const fruitList = [
    "apple",
    "banana",
    "guava",
    "avocado",
    "pineapple",
    "tangerine",
    "kiwi",
    "papaya",
    "watermelon",
    "mango",
  ];

  useEffect(() => {
    const fetchFruitMapFarmerItem = async () => {
      const res = await axios.get("/Map/Fruit");
      // console.log(res);
      console.log(res.data);
      setData(res.data);
    };
    fetchFruitMapFarmerItem();
  }, []);

  return (
		<>
			<MultiLevelBreadcrumb />
			<div>
				<FruitBall />
				<FruitMapFarmer data={data} />
			</div>
		</>
	);
}
export default FruitMapMain;
