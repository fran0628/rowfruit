import React from 'react'
import './orderlist.scss'
import Order from './Order/Order'

export default function OrderList() {
    return (
			<>
				<h3 className="text-center">訂單資訊</h3>
				<div className="container">
					<div className="row">
						<Order />
						{/* <Order />
						<Order />
						<Order />
						<Order /> */}
					</div>
				</div>
			</>
		);
}
