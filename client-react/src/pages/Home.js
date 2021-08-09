import React from 'react'
import IndexFarmer from '../component/IndexFarmer/IndexFarmer'
import IndexCustomAni from '../component/indexCustomAni/IndexCustomAni'
import Cover from '../component/Cover/Cover'
import IndexMain from '../component/IndexMain/IndexMain'
import IndexAbout from '../component/IndexAbout/IndexAbout'

function Home(){
    return (
			<>

				<Cover />
				<IndexMain />
				<IndexCustomAni />
				<IndexFarmer />
				<IndexAbout />
				
			</>
		);
}

export default Home