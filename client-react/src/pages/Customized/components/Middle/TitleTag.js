import React from 'react'

function TitleTag(props) {
    const{className,title,buttonClass}=props
    const newClassName = className+" sticky-top"
    
    return (
        <>
            <div className={newClassName}>
        
          <button className={buttonClass}>{title}</button>
         
        </div>
        </>
    )
}
export default TitleTag