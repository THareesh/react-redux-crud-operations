import React from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


class Material extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            userName: '',
            email: '',
            password: '',
            age    :''
        }
    }
    handleUpdate = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleClick = (e) => {
        e.preventDefault();
        console.log(this.state)
    }
    

    render() {    
        const { firstName, lastName, userName, email, password } = this.state
        return (
            <React.Fragment>
                <form>
                    <TextField
                        name="firstName"
                        label="FirstName"
                        value={firstName}
                        onChange={this.handleUpdate}


                    />
                    <br />
                    <TextField
                        name="lastName"
                        label="LastName"
                        value={lastName}
                        onChange={this.handleUpdate}
                    />
                    <br />
                    <TextField
                        name="userName"
                        label="UserName"
                        value={userName}
                        onChange={this.handleUpdate}
                    />
                    <br />
                    <TextField
                        name="email"
                        label="Email"
                        value={email}
                        onChange={this.handleUpdate}
                    />
                    <br />
                    <TextField
                        name="password"
                        label="Password"
                        value={password}
                        type="password"
                        onChange={this.handleUpdate}
                    />
                    <br />
                    <Button variant="contained" size="large" color="primary" className="mt-2" onClick={this.handleClick}>
                        Submit
                    </Button>

                </form>

            </React.Fragment>

        )
    }

}
export default Material