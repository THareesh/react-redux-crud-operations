import React from 'react'
import {connect} from 'react-redux'
import {increment,decrement,addCounter,subCounter} from './../Action/counterAction'




class Counter extends React.Component{
    render(){
        const {title,count,incrementCounter,decrementCounter,addCounter,subCounter} = this.props
        return (
          <div className="container-fluid">
              <div className="row">
                  <div className="col-md-12 text-center mt-5">
                      <div className="card card-body bg-secondary shadow-lg">
        <h1>{title} Value is: {count}</h1>
                      </div>
                  </div>
                  <div className="col-md-12">
                      <div className="card card-body bg-light mt-5 shadow-sm">
                          <div className="container text-center">
                              <button onClick={incrementCounter} className="btn btn-primary mr-5">Increment</button>
                              <button onClick={decrementCounter} className="btn btn-secondary mr-5">Decrement</button>
                              <button onClick={addCounter} className="btn btn-success mr-5">AddCounter</button>
                              <button onClick={subCounter} className="btn btn-warning mr-5">SubCounter</button>

                          </div>
                      </div>
                  </div>

              </div>
          </div>
        )
    }
}
const mapStateToProps =(state)=>({
    count:state.count.count
})

const mapDispatchToProps = (dispatch) =>({
    incrementCounter : ()=>dispatch(increment()),
    decrementCounter : ()=> dispatch(decrement()),
    addCounter     :()=>dispatch(addCounter(5)),
    subCounter      :()=>dispatch(subCounter(10)) 
})

export default connect(mapStateToProps,mapDispatchToProps)(Counter)