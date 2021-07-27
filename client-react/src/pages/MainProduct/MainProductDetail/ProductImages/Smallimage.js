import React from 'react'

export default function Smallimage(props) {
   const {data,setImage}=props

    function changeImage(){
        setImage(data)
    }
    return (
        <>
            <img onClick={changeImage} src={data} alt=""/>
        </>
    )
}
