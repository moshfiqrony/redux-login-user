import React from 'react'
import {connect} from 'react-redux'

class LoadUserDetails extends React.Component{
    render() {
        if(!this.props.activeUser){
            return(<div style={{width: 300, margin: '0 auto', marginTop: 50, border: '1px solid black', padding: 30}}>
                <h4>Select User Details</h4>
            </div>);
        }else{
            return (
                <div style={{width: 300, margin: '0 auto', marginTop: 50, border: '1px solid black', padding: 30}}>
                    <label>{this.props.activeUser.name}</label><hr/>
                    <label>{this.props.activeUser.address}</label><hr/>
                    <label>{this.props.activeUser.email}</label><hr/>
                </div>
            );
        }

    }
}

function mapStateToProps(state) {
    return{
        activeUser: state.activeUser
    }
}


export default connect(mapStateToProps) (LoadUserDetails);