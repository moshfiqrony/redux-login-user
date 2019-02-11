import React from 'react'
import {connect} from 'react-redux'
import LoadAllUser from './container/LoadAllUser'
import LoadUserDetails from './container/LoadUserDetails'
import LoginForm from './container/LoginForm'
import ShowLoginDetails from './container/ShowLoginDetails'


class MyApp extends React.Component{

    render() {
        return(
            <div>
                <div style={{width: '100%'}}>
                    <LoadAllUser/>
                </div>
                <div style={{width: '50%', float: 'left'}}>
                    <LoadUserDetails/>
                </div>
                <div style={{width: '50%', float: 'right'}}>
                    <LoginForm/>
                    <ShowLoginDetails/>
                </div>
            </div>
        )

    }
}




export default MyApp;