import React from 'react'

export default (props) =>{
    const style={
         left:`${props.dot[0]}%`,
         top:`${props.dot[1]}%`
    }

    return(
        <div className="ui snake_food mini red empty circular label" style={style} ></div>
    )
}