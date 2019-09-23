import React from 'react'

class Home extends React.Component {
    constructor() {
        super()
        /* Initial state */
        this.state = {
            show: false
        }

    }

    showOrHide = () => {
        /*if(!this.state.show) {
            this.setState({show: true})
        } else {
            this.setState({show: false})
        } */

        this.setState({show: !this.state.show})
    }

    /* Render method*/
    render() {
        // najnovite state i props gi citame tuka
         
        
      



        return <React.Fragment>
            <button id="toggle" onClick={this.showOrHide}>Toggle me</button>
            {this.state.show ? <div>Hello Semos!</div> : null }  
        </React.Fragment>
    }
}

export default Home