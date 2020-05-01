import React from 'react'
import { Form, Button } from 'react-bootstrap'
import { add, restaurent, edit } from '../RestarentApp/file'
import { withRouter } from 'react-router-dom'





class CreateForm extends React.Component {
    state = {
        name: '',
        email: '',
        address: '',
        rating: '',
        edit: false,
        id: null



    }
    componentDidMount() {
        const id = this.props.match.params.id;
        if (id) {
            const item = restaurent.find(item => item.id == id)
            if (item) {
                this.setState({
                    name: item.name,
                    email: item.email,
                    address: item.address,
                    rating: item.rating,
                    edit: true,
                    id: id

                })
            }

        }
    }


    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleClick = (e) => {
        e.preventDefault();
        let obj = {};
        if (this.state.edit) {
            obj = {
                name: this.state.name,
                email: this.state.email,
                address: this.state.address,
                rating: this.state.rating
            }
            edit(obj,this.state.id)
            this.props.history.push('/lunch')
        } else {
            obj = {
                id: +new Date(),
                name: this.state.name,
                address: this.state.address,
                rating: this.state.rating,
                email: this.state.email
            }
            add(obj)
            this.props.history.push('/lunch')

        }






    }



    render() {
        return (
            <div>
                <Form className="mt-3">
                    <Form.Group controlId="formBasicName">
                        <Form.Label>Restaurent Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter Restaurent Name"
                            name="name"
                            className="w-25 m-auto"
                            onChange={this.handleChange}
                            value={this.state.name}
                        />

                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Restaurent Email</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter Restaurent Email"
                            name="email"
                            className="w-25 m-auto  "
                            onChange={this.handleChange}
                            value={this.state.email}
                        />


                    </Form.Group>

                    <Form.Group controlId="formBasicAddress">
                        <Form.Label>Address</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter Restaurent address"
                            name="address"
                            className="w-25 m-auto  "
                            onChange={this.handleChange}
                            value={this.state.address}
                        />
                    </Form.Group>
                    <Form.Group controlId="formBasicRating">
                        <Form.Label>Rating</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="Enter Restaurent rating"
                            name="rating"
                            className="w-25 m-auto "
                            onChange={this.handleChange}
                            value={this.state.rating}
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit" onClick={this.handleClick}>
                        {this.state.edit ? "edit" : "add"} Restaurent
                    </Button>
                </Form>
            </div>
        )
    }
}
export default withRouter(CreateForm)