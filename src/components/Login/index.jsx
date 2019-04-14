import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {
  setLoginAC,
  setPasswordAC,
  fieldValidationErrorsAC,
  emailValidAC,
  passwordValidAC,
  validateFormAC,
  authorizedAC
} from '../../redux/actions/login-actions';
import {
  selectEmail,
  selectPassword,
  selectFormErrors,
  selectEmailValid,
  selectPasswordValid,
  selectForm,
  selectAuthorized
} from '../../redux/selectors/login-selectors';
import { mockSendServer } from '../../service/mockSendServer'
import { FormErrors } from '../FormErrors';
import './form.css';

const mapStateToProps = state => ({
  email: selectEmail(state),
  password: selectPassword(state),
  formErrors: selectFormErrors(state),
  emailValid: selectEmailValid(state),
  passwordValid: selectPasswordValid(state),
  formValid: selectForm(state),
  authorize: selectAuthorized(state)
});

const mapDispatchToProps = dispatch => bindActionCreators({
  setLogin: setLoginAC,
  setPassword: setPasswordAC,
  setFormErrors: fieldValidationErrorsAC,
  setEmailValid: emailValidAC,
  setPasswordValid: passwordValidAC,
  setValidateForm: validateFormAC,
  setAuthorized: authorizedAC
}, dispatch);

class LoginForm extends Component {
  state = {
    formErrors: { email: '', password: '' },
    emailValid: false,
    passwordValid: false,
    formValid: false
  }

  handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    if (name === 'email') {
      this.props.setLogin(value);
      this.validateEmail(value)
    } else {
      this.props.setPassword(value);
      this.validatePassword(value)
    }
  }

  validateEmail = (value) => {
    const fieldValidationErrors = { ...this.props.formErrors };
    const emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);

    fieldValidationErrors.email = emailValid ? '' : ' is invalid';

    this.setValidateForm(fieldValidationErrors);
  }

  validatePassword = (value) => {
    const fieldValidationErrors = { ...this.props.formErrors };
    const passwordValid = value.length >= 6;

    fieldValidationErrors.password = passwordValid ? '' : ' is too short';

    this.setValidateForm(fieldValidationErrors);
  }

  setValidateForm = (validateErrors) => {
    const emailValid = validateErrors.email === '';
    const passwordValid = validateErrors.password === '';
    this.props.setFormErrors(validateErrors);
    this.props.setEmailValid(emailValid);
    this.props.setPasswordValid(passwordValid);
    this.props.setValidateForm(emailValid && passwordValid);
  }

  errorClass = (error) => {
    return (error.length === 0 ? '' : 'has-error');
  }

  handleClick = (e) => {
    e.preventDefault();
    const responce = mockSendServer(this.props.email, this.props.password);
    console.log(responce.authorized);
    this.props.setAuthorized(responce.authorized)
  }

  render() {
    if(this.props.authorize) return (
      <div>
        Привет!
      </div>
    )
    return (
      <form className="loginForm">
        <h2>Авторизуйтесь для входа в систему</h2>
        <div className="panel panel-default">
          <FormErrors formErrors={this.props.formErrors} />
        </div>
        <div className={`form-group ${this.errorClass(this.props.formErrors.email)}`}>
          <label htmlFor="email">Email address</label>
          <input type="email" required className="form-control" name="email"
            placeholder="Email"
            value={this.props.email}
            onChange={this.handleUserInput} />
        </div>
        <div className={`form-group ${this.errorClass(this.props.formErrors.password)}`}>
          <label htmlFor="password">Password</label>
          <input type="password" className="form-control" name="password"
            placeholder="Password"
            value={this.props.password}
            onChange={this.handleUserInput} />
        </div>
        <button type="submit" className="btn btn-primary" onClick={this.handleClick} disabled={!this.props.formValid}>Sign up</button>
      </form>
    )
  }
}

const Login = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);

export default Login;