import React,{useState,useEffect} from 'react'
import Farmer from './Farmer/Farmer';
import axios from 'axios'

 function FarmList() {
	const [farmers, setFarmers] = useState([]);
    // const serverUrl = "http://localhost:5000/api"
    useEffect(() => {
			const fetchFarmers = async () => {
				const res = await axios.get("/farmer");
				console.log(res);
				setFarmers(res.data);
                // console.log(res.data)
			};

			fetchFarmers();
            
		}, []);

    return (
			<>
				<div className="container">
					<h1 className="text-center mt-5">小農部落</h1>
					<div className="row g-5 mt-2" id="cards">
						{farmers.map((f,i)=>{
							return (
								<Farmer farmer={f} key={i}/>
							)
						})}
						
					</div>
				</div>
			</>
		);
}
export default FarmList