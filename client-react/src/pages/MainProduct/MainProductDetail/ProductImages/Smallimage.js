import React from 'react'

export default function Smallimage(props) {
   const {data,setImage}=props

    function changeImage(){
        setImage(data)
    }
    return (
        <>
            <img className="choseimg" onClick={changeImage} src={data} alt=""/>
        </>
    )
}
