import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from "redux";
import {selectUser} from '../actions/index'

class LoadAllUser extends React.Component{
    render() {
        return (
            <div>
                {this.props.Users.map((user) => {
                    return(
                        <div style={{width: '300px', margin: '0 auto'}}>
                            <a style={{cursor: 'pointer'}} onClick={() => this.props.selectUser(user)}>{user.name}</a>
                            <hr/>
                        </div>
                    )
                })}
            </div>
        );
    }

}


function mapStateToProps(state) {
    return{
        Users: state.Users,
        activeUser: state.activeUser
    }
}

function mapDispatchToProps(dispatch) {
    return(
        bindActionCreators({
            selectUser: selectUser
        }, dispatch)
    )
}

export default connect(mapStateToProps, mapDispatchToProps) (LoadAllUser);