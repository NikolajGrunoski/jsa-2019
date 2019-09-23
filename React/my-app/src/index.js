import ReactDOM from 'react-dom'
import React from 'react'
import Wrapper from './Wrapper'
import Heading from './Heading'
import Home from "./Home"
import About from "./About"
import Contact from "./Contact"
import Login from "./Login"
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"

const app = document.getElementById('app')

const Menu = () => {
    return (
        <ul>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/about'>About</Link>
            </li>
            <li>
                <Link to='/contact'>Contact</Link>
            </li>
            <li>
                <Link to='/login'>Log in</Link>
            </li>

            <li>
                <Link to='/user'>User</Link>
            </li>
        </ul>
    )
}







const Routes = () => {
    return (
        <Router>
            <Menu />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/about' component={About} />
                <Route path='/contact' component={Contact} />
                <Route path='/login' component={Login} />
                <Route path='/user'
                    render={(props) =>

                        <React.Fragment>
                            <Wrapper />
                            <Heading />
                        </React.Fragment>

                    }
                />
            </Switch>
        </Router>
    )
}


// const Container = () => {
//     return (
//         <React.Fragment>
//             <User />
//             <Heading />
//         </React.Fragment>
//     )
// }
// ReactDOM.render(<Container />, app)

ReactDOM.render(<Routes />, app)