import React, { useEffect, useState} from 'react'
import './Map.scss'
import FruitBall from './components/FruitBall'
import FruitMapFarmer from './components/FruitMapFarmer'
import axios from 'axios'

function FruitMapMain(props) {
  const [data, setData]=useState([])
  useEffect(() => {
    const fetchFruitMapFarmerItem = async () => {
      const res = await axios.get("/Map/Fruit");
      console.log(res);
      // setFruitMapFarmerItem(res.data);
      console.log(res.data);
      setData(res.data)

    };

    fetchFruitMapFarmerItem();
  }, []);

  return (
    <>
      <div>
        <FruitBall />
        <FruitMapFarmer data={data}/>
      </div>
    </>
  )
}
export default FruitMapMain
