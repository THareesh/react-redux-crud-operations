import React, { Component } from 'react'

class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            a: 20,
            b: 30,
            c: 40
        }
    }
    componentDidMount() {
        const {a,b,c}=this.state
        this.setState({ a: 1 }, () => this.setState({ b: 2 }, 
            () => this.setState({ c: 3 },
                 () => console.log(a+b+c))))
    }

    render() {
        const {a,b,c}=this.state
        console.log(a+b+c)
        return (
            <div>
                
            </div>
        )
    }
}
export default Login