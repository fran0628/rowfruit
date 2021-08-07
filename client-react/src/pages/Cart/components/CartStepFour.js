import React,{useEffect} from 'react'
import { withRouter } from 'react-router'

function CartStepFour(props) {
  


    useEffect(()=>{

        window.scrollTo(0, 0)
      },[])
    return (
        <div class="d-flex justify-content-center">
            <div>
                <h1>購買成功!!</h1>
                <h1>感謝您的購買</h1>
                <button onClick={()=>{props.history.push("/orderlist")}} className="btn btn-primary">點此查看訂單明細</button>
            </div>
        </div>
    )
}
export default withRouter(CartStepFour)