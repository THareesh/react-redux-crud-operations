import React,{Fragment,useState,useEffect} from 'react'
import {Form,Button} from 'react-bootstrap'
import {connect} from 'react-redux'
import  {add,edit} from '../Action/restaurentAction'
import data from '../data/data.json'




const RestaurentForm = (props)=>{
    const[state,setState] = useState({
        name: '',
        email: '',
        address: '',
        rating: '',
        userdata:data.restaurent,
        edit : false,
        id:null
    })
    const {name,email,address,rating,edit,id} = state;
    useEffect(() => {
        const id = props.match.params.id;
           if(id){
            const item = state.userdata.find(item => item.id == id)
            if (item) {
                setState({
                    name: item.name,
                    email: item.email,
                    address: item.address,
                    rating: item.rating,
                    edit: true,
                    id: id

                })
            }

           }
    }, [])

  const  setInput = (e)=>{
      const Input = e.target
      setState({
          ...state,
          [Input.name]:Input.value

      })

    }
    const handleSubmitForm = (event)=>{
        event.preventDefault();
        let obj ={}
        if(edit){
            obj={
                name: name,
                address:address,
                rating: rating,
                email: email 
            }
            props.editItems(obj,id)
            props.history.push('/restaurent')
            
        }else if(props.addItems){
             obj = {
                id: +new Date(),
                name: name,
                address:address,
                rating: rating,
                email: email
             }
             props.items.push(obj)
            
         props.history.push('/restaurent')
         }
    

    }
    

    return (
        
        <Fragment>
            <Form className="mt-3" onSubmit={handleSubmitForm}>
                    <Form.Group controlId="formBasicName">
                        <Form.Label>Restaurent Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter Restaurent Name"
                            name="name"
                            className="w-25 m-auto"
                            onChange={setInput}
                            value={name}
                        />

                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Restaurent Email</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter Restaurent Email"
                            name="email"
                            className="w-25 m-auto  "
                            onChange={setInput}
                            value={email}
                        />


                    </Form.Group>

                    <Form.Group controlId="formBasicAddress">
                        <Form.Label>Address</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter Restaurent address"
                            name="address"
                            className="w-25 m-auto  "
                            onChange={setInput}
                            value={address}
                        />
                    </Form.Group>
                    <Form.Group controlId="formBasicRating">
                        <Form.Label>Rating</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="Enter Restaurent rating"
                            name="rating"
                            className="w-25 m-auto "
                            onChange={setInput}
                            value={rating}
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                     {edit?"edit":"add"}  Restaurent
                    </Button>
                </Form>

        </Fragment>
    )
}
const mapStateToProps = (state)=>({
      items :state.text.post
})
const mapDispatchToProps =(dispatch)=>({
    addItems : (item)=>dispatch(add(item)),
    editItems : (item,id)=>dispatch(edit(item,id))
    
})
export default  connect(mapStateToProps,mapDispatchToProps)(RestaurentForm)


