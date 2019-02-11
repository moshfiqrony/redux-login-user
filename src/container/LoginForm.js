import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from "redux";
import {givenUser} from "../actions/Login";

class LoginForm extends React.Component{

    constructor(){
        super();
        this.state = {
            email: '',
            password: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        const{name, value} = event.target
        this.setState({
            [name]: value
        })

    }

    handleSubmit(){
       console.log(this.state)
    }


    render() {
        return(
            <div>
                <form>
                    <input
                        type='email'
                        onChange={this.handleChange}
                        value={this.state.email} name='email'
                        placeholder='Email'
                    /><br/>
                    <input
                        type='password'
                        onChange={this.handleChange}
                        value={this.state.password}
                        name='password' placeholder='password'
                    /><br/>
                    <input type='button' onClick={() => this.props.givenUser(this.state.email, this.state.password)}/>
                </form>

            </div>
        )
    }

}

function matchDispatchToProps(dispatch) {
    return(
        bindActionCreators({givenUser: givenUser}, dispatch)
    )
}


export default connect(matchDispatchToProps) (LoginForm);