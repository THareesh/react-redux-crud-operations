import React from 'react'
import { connect } from 'react-redux'
import *as actions from '../Action/index'


class Saga extends React.Component {
    render() {
        const { getSagaData, sagaData, sagaLoading } = this.props
        return (
            <div>
                <button onClick={getSagaData} className="btn btn-info">SagaAction</button>
                {
                    sagaLoading ? <h1>Loading...</h1> : null
                }
                <div className="container">
                    <table className="table table-bordered">
                        <thead className="bg-primary">
                            <tr>
                                <th>id</th>
                                <th>name</th>
                                <th>username</th>
                                <th>email</th>
                            </tr>
                        </thead>
                        <tbody className="bg-light">
                            {
                                sagaData && sagaData.map((val, i) => (
                                    <tr key={val.id}>
                                        <td>{val.id}</td>
                                        <td>{val.name}</td>
                                        <td>{val.username}</td>
                                        <td>{val.email}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    sagaData: state.saga.sagaData,
    sagaLoading: state.saga.sagaLoading
})
const mapDispatchToProps = (dispatch) => ({
    getSagaData: () => dispatch(actions.fetchData())
})
export default connect(mapStateToProps, mapDispatchToProps)(Saga)