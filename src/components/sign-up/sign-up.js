import React, { Component } from 'react';
import {register} from '../../services/register.js'
import {withRouter} from 'react-router-dom'


class SignUp extends Component {
    constructor() {
        super();
        this.state = {
            user: {
                firstName: '',
                lastName: '',
                phoneNumber: '',
                username: '',
                password: '',
                address: ''
            }
        };
    }
handleUpdate = (e)=>{
    this.setState({
        user:{
            ...this.state.user,
            [e.target.name]:e.target.value
        }
    })
}
signup = ()=>{
    register(this.state.user).then((res)=>console.log(res))
        this.props.history.push('/')
    

}
    
    render() {
        return (
            <div className=' container row ml-2 mt-5'>
                <a className="navbar-brand float-left" href="/">
                    <img className="bookstore-logo img-thumbnail rounded flaot-left" src={require('../../assets/images/resized.jpg')} alt="bookimage" />

                </a>

                <div className='col-md-3 '></div>
                <div className='col-md-6'>

                    <form>
                        <h3 className='text-primary mb-5'> Sign Up</h3>
                        <div className="row">
                            <div className="form-group col-md-6">
                                <label htmlFor="firstName">First NAME</label>
                                <input 
                                   type="text"
                                   name="firstName"
                                   className="form-control"
                                   onChange={this.handleUpdate}
                                   />
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="lastName">Last Name</label>
                                <input 
                                   type="text"
                                   name="lastName"
                                   className="form-control"
                                   onChange={this.handleUpdate}
                                   />
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group col-md-6">
                                <label htmlFor="firstName">User Name</label>
                                <input 
                                   type="text"
                                   name="username"
                                   className="form-control"
                                   onChange={this.handleUpdate}
                                   />
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="password">password</label>
                                <input 
                                   type="password"
                                   name="password"
                                   className="form-control"
                                   onChange={this.handleUpdate}
                                   />
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="phoneNumber">Phone Number</label>
                            <input 
                                type="number"
                                placeholder="Phone Number"
                                name = "phoneNumber"
                                className="form-control"
                                onChange={this.handleUpdate}
                                />
                        </div>
                          <div className="form-group">
                              <label htmlFor="address">ADDERESS</label>
                              <input 
                                type="text"
                                placeholder="Appartment,Studio,Floor"
                                name = "address"
                                className="form-control"
                                onChange={this.handleUpdate}
                                />

                          </div>
                          <button type="button" className="btn btn-primary float-left" onClick={this.signup}>SignUp</button>
                        
                        </form>

                    </div>    
            </div>




        );
    }

} export default withRouter(SignUp);