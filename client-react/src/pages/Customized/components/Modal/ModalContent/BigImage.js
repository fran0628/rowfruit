import React from 'react'

function BigImage(props) {
    const{image}=props
  return (
    <>
      <img
        className="productImage"
        style={{ width: '350px', height: '350px' }}
        src={image}
        alt=""
      />
    </>
  )
}
export default BigImage