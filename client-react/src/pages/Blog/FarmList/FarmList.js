import React, { useState, useEffect } from "react";
import Farmer from "./Farmer/Farmer";
import axios from "axios";
import MultiLevelBreadcrumb from "../../../component/BreadCrumb/MultiLevelBreadcrumb";

function FarmList() {
  const [farmers, setFarmers] = useState([]);
  const [dataLoading, setDataLoading] = useState(false);
  useEffect(() => {
    setTimeout(() => setDataLoading(false), 1500);
  }, []);

  // const serverUrl = "http://localhost:5000/api"
  useEffect(() => {
    const fetchFarmers = async () => {
      const res = await axios.get("/farmer");
      // console.log(res);
      setFarmers(res.data);
      // console.log(res.data)
    };

    fetchFarmers();
    setDataLoading(true);
    setTimeout(() => setDataLoading(false), 500);
  }, []);

  return (
    <>
      {dataLoading ? (
        <div className="d-flex justify-content-center align-items-center vh-100">
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      ) : (
        <>
          <MultiLevelBreadcrumb />
          <div className="container">
            <h1 className="text-center mt-0 mb-0">小農總覽</h1>
            <div className="row g-5 mt-0" id="cards">
              {farmers.map((f, i) => {
                return <Farmer farmer={f} key={i} />;
              })}
            </div>
          </div>
        </>
      )}
    </>
  );
}
export default FarmList;
