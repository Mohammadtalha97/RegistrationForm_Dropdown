import React, { Component } from 'react';
import { isEmail } from 'validator';
import {Link} from 'react-router-dom';

class Login extends React.Component {
    constructor(props)
    {
        super(props)

        this.state = {
            userEmail : "",
            userPassword : "",
            errors : []
        }
    }


    handleInputChange = (event) => 
    {
        event.preventDefault();
        this.setState
        ({
            [event.target.name] : event.target.value
        })
    }

    validate = () => {
        let errors = [];

        if(this.state.userEmail)
        {
            if(!isEmail(this.state.userEmail))
            {
                errors.userEmail = "Please Enter Valide Email";
            }
        }
        else
        {
            errors.userEmail = "Please Enter Email";
        }

        if(this.state.userPassword === "")
        {
            errors.userPassword = "Please Enter Password";
        }

        return errors;
    }

    handleSubmit = (event) => 
    {
        event.preventDefault();
        let errors = this.validate();

        if(Object.keys(errors).length === 0)
        {
            let userList = JSON.parse(localStorage.getItem("userData"));
            let loginCounter = 0;

            userList.map( value => 
            {
                if(value.userEmail === this.state.userEmail && value.userPassword === this.state.userPassword)
                {
                    loginCounter ++;
                }
            })

            if(loginCounter === 1)
            {
                alert("Login Successfull");
                sessionStorage.setItem("userLoggedIn",this.state.userEmail);
                this.props.history.push("/Dashboard");
            }
            else
            {
                alert("Invalid Email Or Password");
            }
        }
        else
        {
            this.setState({
                errors : errors
            })
        }
    }

    render() {
        const  {
            errors
        } = this.state
        return (
            <div className="container">
                <form onSubmit = {this.handleSubmit}>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="text" className="form-control" name="userEmail" onChange={this.handleInputChange}></input>
                        <small className="form-text text-danger">{errors.userEmail}</small>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" name="userPassword" onChange={this.handleInputChange}></input>
                        <small className="form-text text-danger">{errors.userPassword}</small>
                    </div>
                    
                    <button type="submit" className="btn btn-primary">Login</button><br/>
                    <Link to="/Registration">New User....?</Link>
                    
                </form>
            </div>
        )
    }
}

export default  Login