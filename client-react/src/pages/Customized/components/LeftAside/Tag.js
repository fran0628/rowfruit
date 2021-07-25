import React from 'react'

function Tag(props){
   const {className,tagName}=props
   const newClass = className + " btn d-block text-center"
 
    
    return (
        <>
            <span className={newClass}>{tagName}</span>
        </>
    )
}
export default Tag