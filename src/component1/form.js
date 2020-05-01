import React from 'react';

const Form = (props) => {
    return (
        <React.Fragment>
            <div className="container">
                <div className="row mt-5 ">
                    <div 
                      className="col-lg-5 col-sm-16 col-12 border shadow m-auto text-center p-3">
                          <h4
                                className='text-info text-center'
                                style={{ textShadow: ' 1px 1px lightBlue' }}
                            >Please Enter Your Todo Text</h4>
                        <form>
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    onChange={props.handleChange}
                                    value={props.name}
                                />
                            </div>
                            <button className={`btn btn-${props.id !==null?'success':'primary'} float-left`} onClick={props.handleSubmit}>{props.id !==null?'Update':'Submit'}</button>
                        </form>
                        <button
                                onClick={props.handleOnClickRemoveAll}
                                className='btn btn-sm btn-danger py-2 float-right'>RemoveAll</button>
                            <div className='mt-3'>
                                {props.todoList.length === 0 && <p className='text-danger'>No Todos Found</p>}
                                {props.error && <p className='text-danger text-center'>Enter some todo text</p>}
                                {props.visible && <p className='text-danger text-center'>Todo Input Already Exists</p>}
                            </div>
                       
                    </div>

                </div>
            </div>
        </React.Fragment>
    )
}

export default Form