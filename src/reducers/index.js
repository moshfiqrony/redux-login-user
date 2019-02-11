import {combineReducers} from "redux";
import Users from './reducer-user-list'
import activeUser from './reducer-active-user'
import givenUser from './givenUser'

const allReducers = combineReducers({
    Users: Users,
    activeUser:activeUser,
    givenUser: givenUser
})

export default allReducers;