import React from 'react'

function TitleTag(props) {
    const{className,title,buttonClass}=props
    const newClassName = className+" sticky-top"
    
    return (
        <>
            <div className={newClassName}>
          <a className="text-white fs-3 prevbutton" role="button">
            <i className="fas fa-caret-left"></i>
          </a>
          <button className={buttonClass}>{title}</button>
          <a className="text-white fs-3 nextbutton" role="button">
            <i className="fas fa-caret-right "></i>
          </a>
        </div>
        </>
    )
}
export default TitleTag