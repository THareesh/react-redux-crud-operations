import {put,takeLatest} from 'redux-saga/effects'
import *as actionTypes from '../Action/actionTypes'
import *as actions from '../Action/index'
import axios from 'axios'

function* fetchData(){
    yield put(actions.fetchDataStart())
    try{
        const res = yield axios.get('https://jsonplaceholder.typicode.com/users');
        yield put(actions.fetchDataSuccess(res.data))
    }
    catch(err){
        yield put(actions.fetchDataFailure(err))
    }
}


export default function* watchFetchData() {
    yield takeLatest(actionTypes.FETCH_DATA_SAGA,fetchData)
}