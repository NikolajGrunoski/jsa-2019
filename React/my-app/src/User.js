import React from 'react'
import './style.css'

const User = () => {
    return(
        // <div>
        // <div>Hello Niki!</div>
        // <div>This is your first app!</div>         {/* ova e za ako ni treba da stilizirame}*/}
        // </div>

        <React.Fragment>
        <div id='greeting' className = 'text'>Hello Niki!</div> 
        <div>This is your first app!</div>     
        </React.Fragment>
    )
}


export default User