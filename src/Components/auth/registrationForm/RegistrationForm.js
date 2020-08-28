import React, { Component } from 'react';
import { signUpOperation } from '../../../redux/operations/authOperation';
import {connect} from 'react-redux';


class RegistrationForm extends Component {
    state = {
        email: '',
        password: '',
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value,
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signUpOperation(this.state);
        this.setState({
            email:"",
            password: ""
        })
    }


    render() {
        const { email, password } = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Email: <input className="input" type="text" value={email} name="email" onChange={this.handleChange} />
                </label>
                <label>
                    Password: <input className="input" type="text" value={password} name="password" onChange={this.handleChange} />
                </label>
                <button type="submit" className="button">SignUp</button>
            </form>
        );
    }
}

export default connect(null, {signUpOperation})(RegistrationForm);