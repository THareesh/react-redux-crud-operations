import React from 'react'
import {login} from '../../services/authentications'
import {Link,withRouter} from 'react-router-dom'

class SignIn extends React.Component {
    constructor() {
        super();
        this.state = {
            user: {
                username: "",
                password: ""
            }
        }
    }
    handleChange = (e)=>{
     this.setState({
        user :{
            ...this.state.user,
            [e.target.name]:e.target.value
        }
     })
    console.log(this.state.user)

    }
    signin = () => {
        login(this.state.user)
            .then((res) => {
                 console.log(res)
                localStorage.setItem("token", res.data.token)
                localStorage.setItem("user", JSON.stringify(res.data.details))
                this.props.history.push('/dashboard');
            });

    }
   
    render() {
        return (
            <div className="container mt-5">
                <a className="navbar-brand float-left" href="/">
                    <img className="bookstore-logo img-thumbnail rounded flaot-left" src={require('.././../assets/images/resized.jpg')} alt="bookimage" />

                </a>
                <div className="row mt-5">
                    <div className="col-md-8"></div>
                    <div className="col-md-4 float-right">
                        <form>
                            <h3 className="text-primary mb-5 mr-5">Sign In</h3>
                                <div className="form-group">
                                    <label htmlFor="username" className="float-left">UserName</label>
                                    <input
                                        type="text"
                                        name="username"
                                        className="form-control"
                                        id="username"
                                        onChange={this.handleChange}
                                        value={this.state.user.username}

                                    />
                                    </div>
                                    <div className="form-group">
                                    <label htmlFor="password" className="float-left">Password</label>
                                    <input
                                        type="password"
                                        name="password"
                                        className="form-control"
                                        id="password"
                                        onChange={this.handleChange}
                                    />
                                    </div>
                                    <button type="button" className="btn btn-success float-left" onClick={this.signin}>SignIn</button>
                                    <button type="button" className="btn btn-link btn-lg float-right">
                                        <Link to='/signup'> Register</Link>
                                       </button>
                                    
                                
                        </form>
                    </div>

                </div>


            </div>
        )
    }
}
export default withRouter(SignIn)