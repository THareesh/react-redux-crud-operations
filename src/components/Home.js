import React from 'react'

class Home extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="container my-5">
                    <div className="col-lg-8 m-auto">
                        <i className="fa fa-users float-left" style={{ fontSize: '25px', color: 'blue' }} aria-hidden="true"></i><span className="text-primary" style={{ fontSize: '25px', position: 'relative', top: '-10px', left: '-181px' }}>Choose Number of <strong>people</strong></span>
                        <div className="card card-body">
                            <div className="container">
                                <div className="row">
                                    <div className="col-sm-6">
                                        <i className="fa fa-bed float-left  mx-2" aria-hidden="true" style={{ fontSize: '25px', color: 'blue' }}></i><span className="text-primary float-left mx-2" style={{ fontSize: '25px', marginTop: '-6px' }}>ROOMS</span>
                                    </div>
                                    <div className="col-sm-6">
                                        <i className="fa fa-plus-circle float-right mx-2 " style={{ fontSize: '30px',color:'red' }}></i><span className="float-right  mx-2" style={{ fontSize: '28px', marginTop: '-7px' }}>1</span><i className="fa fa-minus-circle float-right mx-2" style={{ fontSize: '30px',color:'blue' }}></i>
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-sm-6">
                                        <i className="fa fa-user float-left  mx-2" aria-hidden="true" style={{ fontSize: '25px', color: 'blue' }}></i><span className="text-primary float-left mx-2" style={{ fontSize: '25px', marginTop: '-6px' }}>ADULTS</span>
                                    </div>
                                    <div className="col-sm-6">
                                        <i className="fa fa-plus-circle float-right mx-2" style={{ fontSize: '30px',color:'red' }}></i><span className="float-right  mx-2" style={{ fontSize: '28px', marginTop: '-7px' }}>2</span><i className="fa fa-minus-circle float-right mx-2" style={{ fontSize: '30px',color:'blue' }}></i>
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-sm-6">
                                        <i className="fa fa-child float-left  mx-2" aria-hidden="true" style={{ fontSize: '25px', color: 'blue' }}></i><span className="text-primary float-left mx-2" style={{ fontSize: '25px', marginTop: '-6px' }}>CHILDREN</span>
                                    </div>
                                    <div className="col-sm-6">
                                        <i className="fa fa-plus-circle float-right mx-2" style={{ fontSize: '30px',color:'red' }}></i><span className="float-right  mx-2" style={{ fontSize: '28px', marginTop: '-7px' }}>0</span><i className="fa fa-minus-circle float-right mx-2" style={{ fontSize: '30px',color:'blue' }}></i>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>


                </div>

            </React.Fragment>
        )
    }
}
export default Home