import { getInitialData } from '../utils/api'
import { receiveUsers } from './users'
import  { receiveTweets } from './tweets'
import { setAuthedUser } from './authedUser'
import { showLoading, hideLoading } from 'react-redux-loading'

const AUTHED_ID = 'tylermcginnis'
 
export function handleInitialData() {
    return (dispatch) => {  
        dispatch(showLoading())
        return getInitialData()
        .then(({ users, tweets }) => {
            dispatch(receiveUsers(users))         // dispatching action creators
            dispatch(receiveTweets(tweets))       // dispatching action creators
            dispatch(setAuthedUser(AUTHED_ID))    // dispatching action creators 
            dispatch(hideLoading())
        })
    }
}