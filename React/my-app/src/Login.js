import React from 'react'
import store from './redux/store'
import Alert from './Alert'
import { updateUser, deleteUser } from './redux/actions/updateUser'


class Login extends React.Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
            name: '',
            lastname: '',
            number: ''
        }
    }

    checkInput = (event) => {
        const inputValue = event.target.value
        if (inputValue.indexOf('@') <= 0) {
            console.log('imas greska u mejlo')
        }
        this.saveInput(event)
    }

    submit = () => {
        store.dispatch(updateUser(
            this.state.username, 
            this.state.password,
            this.state.name,
            this.state.lastname,
            this.state.number
        ))
    }

    saveInput = (event) => {
        this.setState({[event.target.id]: event.target.value})
    }

    deleteInput = () => {
        store.dispatch(deleteUser())
    }

    render () {
        return <React.Fragment>
            <Alert/>
            <input id='username'
                placeholder='Username'
                onChange={this.checkInput}
            />
            <input id='password'
                placeholder='Password' 
                onChange={this.saveInput}
            />
            <button id='submit' onClick={this.submit}>Log In!</button>
            <br/><br/>
            <input id='name'
                placeholder='Name'
                onChange={this.checkInput}
            />
            <input id='lastname'
                placeholder='Lastname' 
                onChange={this.saveInput}
            />
            <input id='number'
                placeholder='Number' 
                onChange={this.saveInput}
            />
            <button id='submit' onClick={this.submit}>Save</button>
            <button id='submit' onClick={this.deleteInput}>Delete</button>

        </React.Fragment>
    }
}

export default Login