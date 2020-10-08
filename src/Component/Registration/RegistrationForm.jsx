import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../Redux/Actions/UserAction";
import { isEmail } from "validator";
import $ from "jquery";
import jsonData from "../AjaxCall/Country_State_City.json";

class RegistrationForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: "",
      userEmail: "",
      userCountry: "",
      userState: "",
      userGender: "",
      userCity: "",
      userPassword: "",
      userConfirmPassword: "",
      errors: [],
    };
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  componentDidMount() {
    load_json_data("userCountry");

    function load_json_data(id, parent_id) {
      var html_code = '<option value="">Select </option>';

      jsonData.map((data) => {
        if (id === "userCountry") {
          if (data.parent_id === "0") {
            html_code +=
              '<option value ="' + data.id + '">' + data.name + "</option>";
          }
        } else {
          if (data.parent_id === parent_id) {
            html_code +=
              '<option value ="' + data.id + '">' + data.name + "</option>";
          }
        }

        $("#" + id).html(html_code);
      });
    }

    $(document).on("change", "#userCountry", function () {
      var country_id = $(this).val();

      if (country_id !== "") {
        load_json_data("userState", country_id);
      } else {
        $("#userState").html('<option value="">Select State</option>');
        $("#userCity").html('<option value="">Select City</option>');
      }
    });

    $(document).on("change", "#userState", function () {
      var state_id = $(this).val();

      if (state_id !== "") {
        load_json_data("userCity", state_id);
      } else {
        $("#userCity").html('<option value="">Select City</option>');
      }
    });
  }

  validate = () => {
    let errors = {};

    if (this.state.userName) {
      if (!this.state.userName.match(/^[a-zA-Z ]*$/)) {
        errors.userName = "Please Enter Alphabet Characters Only";
      }
    } else {
      errors.userName = "Please Enter UserName";
    }

    if (this.state.userEmail) {
      if (!isEmail(this.state.userEmail)) {
        errors.userEmail = "Please Enter Valid Email";
      }
    } else {
      errors.userEmail = "Please Enter Email";
    }

    if (this.state.userPassword) {
      if (
        !this.state.userPassword.match(
          /^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/
        )
      ) {
        errors.userPassword = "Please Enter Secure And Strong Password";
      }
    } else {
      errors.userPassword = "Please Enter UserPassword";
    }

    if (this.state.userConfirmPassword !== this.state.userPassword) {
      errors.userConfirmPassword = "Please Match Password";
    }

    if (this.state.userCity === "") {
      errors.userCity = "Please Enter City";
    }

    if (this.state.userCountry === "") {
      errors.userCountry = "Please Select Country";
    }

    if (this.state.userState === "") {
      errors.userState = "Please Select State";
    }

    if (this.state.userCity === "") {
      errors.userCity = "Please Select City";
    }

    if (this.state.userGender === "") {
      errors.userGender = "Plese Select Gender";
    }
    return errors;
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const errors = this.validate();

    if (Object.keys(errors).length === 0) {
      alert("welcome");
      this.props.insertUserRecord(this.state);
      this.props.history.push("/");
    } else {
      alert("Please Fill Up Details");
      this.setState({ errors });
    }
  };
  render() {
    const { errors } = this.state;

    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} autoComplete="off">
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              name="userName"
              value={this.state.userName}
              onChange={this.handleInputChange}
            ></input>
            <small className="form-text text-danger">{errors.userName}</small>
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="text"
              className="form-control"
              name="userEmail"
              value={this.state.userEmail}
              onChange={this.handleInputChange}
            ></input>
            <small className="form-text text-danger">{errors.userEmail}</small>
          </div>

          <div className="form-group">
            <label>Select Country</label>
            <select
              name="userCountry"
              id="userCountry"
              className="form-control input-lg"
              onChange={this.handleInputChange}
            >
              <option value="">Country_Name</option>
            </select>
            <small className="form-text text-danger">
              {" "}
              {errors.userCountry}
            </small>

            <label>Select State</label>
            <select
              name="userState"
              id="userState"
              className="form-control input-lg"
              onChange={this.handleInputChange}
            >
              <option value="">State_Name</option>
            </select>
            <small className="form-text text-danger"> {errors.userState}</small>

            <label>Select City</label>
            <select
              name="userCity"
              id="userCity"
              className="form-control input-lg"
              onChange={this.handleInputChange}
            >
              <option value="">City_Name</option>
            </select>
            <small className="form-text text-danger"> {errors.userCity}</small>
          </div>

          <div className="form-group">
            <label>Select Gender</label>
            <div className="radio">
              <label>
                <input
                  type="radio"
                  name="userGender"
                  value="Male"
                  onChange={this.handleInputChange}
                  checked={this.state.userGender === "Male"}
                />
                Male &nbsp;&nbsp;
                <input
                  type="radio"
                  name="userGender"
                  value="Female"
                  onChange={this.handleInputChange}
                  checked={this.state.userGender === "Female"}
                />
                Female &nbsp;&nbsp;
                <input
                  type="radio"
                  name="userGender"
                  value="Others"
                  onChange={this.handleInputChange}
                  checked={this.state.userGender === "Others"}
                />
                Others
              </label>
            </div>
            <small className="form-text text-danger">
              {" "}
              {errors.userGender}
            </small>
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              name="userPassword"
              value={this.state.userPassword}
              onChange={this.handleInputChange}
            ></input>
            <small className="form-text text-danger">
              {errors.userPassword}
            </small>
          </div>
          <div className="form-group">
            <label>Confirm Password</label>
            <input
              type="password"
              className="form-control"
              name="userConfirmPassword"
              value={this.state.userConfirmPassword}
              onChange={this.handleInputChange}
            ></input>
            <small className="form-text text-danger">
              {errors.userConfirmPassword}
            </small>
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          <br />
          <br />

          <Link to="/">Already Exists....?</Link>
        </form>
      </div>
    );
  }
}

// const mapStateToProps = (state) =>
// {
//     console.log("i am for registration",state)
// }

const mapStateToProps = (state) => ({
  userList: state.userReducer.userList,
  currentIndex: state.userReducer.currentIndex,
});

const mapDispatchToProps = (dispatch) => ({
  insertUserRecord: (state) => {
    dispatch(actions.userInsert(state), alert("User Registered Successfully"));
  },

  updateUserRecord: (state) => {
    dispatch();
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationForm);
