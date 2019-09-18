import React from 'react'
import './style.css'

class User extends React.Component {   //props sekogas stavame koga ke upotrebuvame varijabla

    render() {
        return (
            // <div>
            // <div>Hello Niki!</div>
            // <div>This is your first app!</div>         {/* ova e za ako ni treba da stilizirame}*/}
            // </div>

            <React.Fragment>
                <div id='greeting' className='text'>
                    {this.props.name}
                    {this.props.email}
                </div>
            </React.Fragment>
        )
    }
}


export default User