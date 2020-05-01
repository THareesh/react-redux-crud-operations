import React from 'react'
import Form from './form'
import List from './list';



class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      todoList: [],
      editable : false,
      todoInputEdit: null,
      visible :false,
      error:false

    }
  }
  handleChange = (e) => {
    this.setState({ name: e.target.value })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const {todoInputEdit,name,todoList}=this.state
    if(todoInputEdit !==null){
        this.update(todoInputEdit)
    }else if(name.length===0){
        this.setState({error:true})
    }else if(todoList.indexOf(name)>-1){
        this.setState({visible:true,name:''})
    }else{
        this.setState({
            todoList:todoList.concat(name),
            name :'',
            error:false,
            visible:false
        })
    }
    
      
    }
    deleteButton = (ind)=>{
        const todoList=[...this.state.todoList]
        todoList.splice(ind,1)
        this.setState({
         todoList:todoList

        })
    }
    editButton = (v,i)=>{
        this.setState({
            editable:true,todoInputEdit:i,name:v
        })

    }
    update =(id)=>{
        const copyData = [...this.state.todoList]
        copyData[id] = this.state.name;
        this.setState({
         todoList:copyData,
         name:'',
         todoInputEdit:null,
         error:true,
         visible:false
        })
     }
     RemoveAll = ()=>{
        this.setState({ todoList: [], name: '' })
     }
  

  render() {
    return (
      <React.Fragment>
        <Form
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          name={this.state.name}
          id = {this.state.todoInputEdit}
          error={this.state.error}
          visible={this.state.visible}
          handleOnClickRemoveAll={this.RemoveAll}
          todoList={this.state.todoList}
        />
        <List 
          todoList={this.state.todoList}
          deleteButton={this.deleteButton}
          editButton = {this.editButton}
        />
      </React.Fragment>
    )
  }
}

export default Main