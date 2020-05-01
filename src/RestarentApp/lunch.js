import React from 'react'
import data from '../data/data.json'
import { Table, Button } from 'react-bootstrap'
import {restaurent,remove} from '../RestarentApp/file'






class Lunch extends React.Component {
    
    state = {
        userData: data.restaurent
        
    }

    // componentDidMount() {
    //     this.setState({
    //         post: this.state.userData
    //     })
    // }
    handleRedirect = (e)=>{
          this.props.history.push('/createForm')
    }
    handleUpdate =(value,id)=>{
        
        
      this.props.history.push('/editForm/'+id)
      

      
    }
    
     
    render() {
        return (
            <React.Fragment>
                <h1>Restarent App</h1>
                
                <div>
                    <Table striped bordered hover >
                        <thead className="bg-info">
                            <tr>
                                <th>id</th>
                                <th>name</th>
                                <th>address</th>
                                <th>rating</th>
                                <th>email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                restaurent.map((item) => (
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.address}</td>
                                        <td>{item.rating}</td>
                                        <td>{item.email}</td>
                                        <td>
                                            <Button variant="primary" type="button" onClick={()=>this.handleUpdate(item,item.id)} >
                                                Edit
                                        </Button>
                                        </td>
                                        <td>
                                            <Button variant="danger" type="button" onClick={()=>
                                                {
                                                    remove(item.id);
                                                    this.forceUpdate()
                                                }
                                                }>
                                                Delete
                                           </Button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>

                    </Table>


                    <Button variant="success" type="button" onClick={this.handleRedirect} >CreateForm</Button>

                </div>

            </React.Fragment>
        )
    }
}

export default Lunch