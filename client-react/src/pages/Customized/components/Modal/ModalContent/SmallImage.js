import React from 'react'

function SmallImage(props) {
   const {data,setImage}=props
    function changeImage(){
        setImage(data)
    }
    return (
        <>
             <img onClick={changeImage} className="productImage" style={{width:"70px",height:"70px",padding:"10px"}} src={data} alt="" />
        </>
    )
}
export default SmallImage