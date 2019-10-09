import React from 'react'
import UsersList from './UsersList'
import axios from 'axios'
import Error from "./Error"

class Wrapper extends React.Component {
    // let users = []
    // users = data.map(element => {
    //     return <User key={element.id} name={element.name} email={element.email} /> 
    // })

    constructor(props) {
        super(props)
        this.state = {
            data: null,
            error: null,
            loading: false
        }
    }


    componentDidMount() {
        this.setState({loading : true})
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
               this.setState({data: response.data, loading: false})
            })
            .catch((error) => {
                this.setState({ error: <Error/>, loading: false})
            })
        

    }





    // componentDidMount() {
    //     axios.get('https://jsonplaceholder.typicode.com/users')
    //         .then((response) => {
    //             const users = response.data.map((element) => {
    //                 return <User
    //                     key={element.id}
    //                     name={element.name}
    //                     email={element.email} />
    //             })

    //             this.setState({ data: users })
    //         })
    //         .catch((error) => {
    //             this.setState({ data: <Error /> })
    //         })
    // }

    render() {
        return (
            <React.Fragment>
                <UsersList data={this.state.data}/>
                {this.state.error}
                {this.state.loading && <div>LOADING....</div>}
            </React.Fragment>
        )

    }
}

export default Wrapper