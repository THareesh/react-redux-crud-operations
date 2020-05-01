import React from 'react'
import {Link} from 'react-router-dom'
import {Table,Button} from 'react-bootstrap'
import {connect} from 'react-redux'
import {getData,remove,edit} from '../Action/restaurentAction'





class Restaurent extends React.Component{



   componentDidMount(){
       this.props.getData()
   }
   handleUpdate = (val,id)=>{
    this.props.history.push('/editRestaurentForm/'+id)
      
   }

    render(){
        const {title,crd,removeItems} = this.props
       return (
            <div>
                <h1>{title}</h1>
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
                            crd&&crd.map((item)=>(
                                <tr key ={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.address}</td>
                                <td>{item.rating}</td>
                                <td>{item.email}</td>
                                <td>
                                    <Button variant="primary" type="button"  onClick = {()=>this.handleUpdate(item,item.id)}
                                    >
                                        Edit
                                </Button>
                                </td>
                                <td>
                                            <Button variant="danger" type="button" onClick = {()=>
                                                {
                                                    removeItems(item.id)
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
                     <Link to='/restaurentForm' ><Button variant="success" type="button">RestaurentForm</Button></Link>   
            

            </div>
        )
    }
}
const mapStateToProps = (state)=>({
    crd :state.text.post,
    title:state.text.title
})
const mapDispatchToProps = (dispatch) =>({
     getData:()=>dispatch(getData()),
     removeItems : (id)=>dispatch(remove(id)),
     editItems   : (item,id) =>dispatch(edit(item,id))
})

export default connect(mapStateToProps,mapDispatchToProps)(Restaurent) 