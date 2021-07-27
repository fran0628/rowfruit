import React from 'react'
import IndexFarmer from '../component/IndexFarmer/IndexFarmer'
import IndexCustomAni from '../component/indexCustomAni/IndexCustomAni'
import Cover from '../component/Cover/Cover'


function Home(){
    return (
			<>

				<Cover />
				<IndexCustomAni />
				<IndexFarmer />
				
			</>
		);
}

export default Home