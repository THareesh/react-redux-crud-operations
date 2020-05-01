import React from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from './../Action/thunkAction'

class ThunkReducer extends React.Component {
    render() {
        const {dataAction,data,loading} =this.props
        return (
            <div>
                <button onClick={dataAction} className="btn btn-primary">DATA Action</button>
                <div className="container mt-3">
                    <div className="row">
                        {loading && <div> Loading....</div>}
                        {data && data.map(val =>{
                            return (
                                <div className="col-md-4 mb-2" key={val.id}>
                                    <div className="card card-body shadow-sm">
                                        <h1>{val.id}</h1>
                                        <p>{val.name}</p>
                                        <p>{val.username}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }

}
const mapStateToProps = (state) => ({
    data: state.data.data,
    loading:state.data.loading
})
const mapdispatchToProps = (dispatch) => ({
    dataAction: () => dispatch(fetchUsers())
})

export default connect(mapStateToProps, mapdispatchToProps)(ThunkReducer)
