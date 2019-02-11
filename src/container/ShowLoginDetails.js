import React from 'react';
import {connect} from 'react-redux'

class ShowLoginDetails extends React.Component{

    showData(){
        return(
            <div>
                <p>ok</p>
            </div>
        )
    }


    render() {
        if (this.props.loginInfo){
            return(this.showData())
        }else {
            return('No inputted Data')
        }
    }
}

function mapStateToProps(state) {
    return{
        loginInfo: state.loginInfo
    }
}


export default connect(mapStateToProps) (ShowLoginDetails);