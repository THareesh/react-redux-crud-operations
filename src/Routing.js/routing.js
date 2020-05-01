import React, { Component } from 'react'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
// import Home from '../components/Home'
import Login from '../components/Login'
import SignIn from './../components/sign-in/sign-in'
import SignUp from './../components/sign-up/sign-up'
import DashBoard from './../components/dashboard/dashboard'
import Main from './../component1/main'
import Material from '../container/material'
import Counter from '../container/counter'
import Thunk from '../container/thunk'
import Saga from '../container/saga'
import Valid from '../components/validForm'
import Lunch from '../RestarentApp/lunch'

import CreateForm from '../RestarentApp/createForm'
import Restaurent from '../container/restaurent'
import RestaurentForm from '../container/restarentForm'





 
class Routing extends Component {
    render() {
        return (
            <div>
            <Router>
                
                    <Switch>
                        <Route exact path='/' component={SignIn}/>
                        <Route path='/Login' component={Login} />
                        <Route path='/signup' component={SignUp} />
                        <Route path='/dashboard'component={DashBoard} />
                        <Route path='/main' component={Main} />
                        <Route path='/material' component={Material} />
                        <Route path='/counter' component={Counter} />
                        <Route path ='/thunk' component={Thunk} />
                        <Route path='/saga' component={Saga} />
                        <Route path ='/validForm' component={Valid} />
                        <Route path='/lunch' component={Lunch} />
                        <Route path='/createForm' component={CreateForm} />

                        <Route path='/editForm/:id' component={CreateForm} />
                        <Route path ='/restaurent' component={Restaurent} />
                        <Route path ='/restaurentForm' component={RestaurentForm} />
                        <Route path = '/editRestaurentForm/:id' component={RestaurentForm} />
                    </Switch>
                </Router>
            </div>
        )
    }
}
export default Routing
