import React from 'react'
import SubscribeItem from './SubscribeItem'

function Subscribe(props) {
    const {subscribeList,subscribePrice} = props
    return (
        <>
          <div className="container">
            <div className="subscribe row">
                <SubscribeItem
                    subname={subscribeList.SubscribeOne}
                    subprice={subscribePrice.SubscribeOne}
                />
                <SubscribeItem
                    subname={subscribeList.SubscribeTwo}
                    subprice={subscribePrice.SubscribeTwo}
                />
                <SubscribeItem
                    subname={subscribeList.SubscribeThree}
                    subprice={subscribePrice.SubscribeThree}
                />
                <SubscribeItem
                    subname={subscribeList.SubscribeFour}
                    subprice={subscribePrice.SubscribeFour}
                />
                    
            </div>
        </div> 
        </>
    )

}

export default Subscribe