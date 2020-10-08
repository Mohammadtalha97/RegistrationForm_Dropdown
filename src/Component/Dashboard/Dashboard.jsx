import React from 'react';
import Navigation from '../Navigation/Navigation';

import { connect } from 'react-redux';
import * as actions from '../../Redux/Actions/ProductAction';

class Dashboard extends React.Component {
    constructor(props)
    {
        super(props);

        this.state = {
            productName : "",
            productPrice : "",
            errors : []
        }
    }

    handleInputChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }


    validate = () => 
    {
        let errors = {}

        if(this.state.productName)
        {
            if(!(this.state.productName).match(/^[a-zA-Z ]*$/))
            {
                errors.productName = "Please Enter Alphabet Characters Only"
            }
        }
        else
        {
            errors.productName = "Please Enter Product Name";
        }

        if(this.state.productPrice === "")
        {
            errors.productPrice = "Please Enter Product Price";
        }

        return errors;
    }

    handleSubmit = (event) => 
    {
        event.preventDefault();
        
        let errors = this.validate();

        if(Object.keys(errors).length === 0)
        {
            if(this.props.productIndex === -1)
            {
                alert("Product Added Successfully");
                this.props.insertProductRecord(this.state);
                this.props.history.push("/ProductDisplay");
            }
            else
            {

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
        const {
            errors
        } = this.state
        return (
            <div className="container">
                { sessionStorage.getItem("userLoggedIn") ? <Navigation/>: ''}
                <form onSubmit = {this.handleSubmit}>
                    <div className="form-group">
                        <label>ProductName</label>
                        <input type="text" className="form-control" name="productName" value={this.state.productName} onChange={this.handleInputChange}></input>
                        <small className="form-text text-danger">{errors.productName}</small>
                    </div>
                    <div className="form-group">
                        <label>ProductPrice</label>
                        <input type="number" className="form-control" name="productPrice" value={this.state.productPrice} onChange={this.handleInputChange}></input>
                        <small className="form-text text-danger">{errors.productPrice}</small>
                    </div>
                    
                    <button type="submit" className="btn btn-primary">Add Product</button><br/>
                    
                </form>
            </div>
        )
    }
}

// const mapStateToProps = (state) => 
// ({
//     productList : state.productReducer.productList,
//     productIndex : state.productReducer.productIndex    
// })

const mapStateToProps = (state) => (  console.log("state", state),{
    productList : state.productReducer.productList,
    productIndex : state.productReducer.productIndex  
})



const mapDispatchToProps = (dispatch) => 
({
    insertProductRecord : (state) => 
    {
        dispatch(actions.insertProduct(state))
    }
}) 

export default connect(mapStateToProps,mapDispatchToProps) (Dashboard)