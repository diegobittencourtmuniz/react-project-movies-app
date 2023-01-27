import React from 'react';
import Form from './common/form';
import Joi from 'joi-browser';

export class LoginForm extends Form {
  // userName = React.createRef();
  state = {
    data: { username: '', password: '' },
    errors: {},
  };

  schema = {
    username: Joi.string().required().label('Username'),
    password: Joi.string().required().label('Password'),
  };

  // componentDidMount() {
  //   this.userName.current.focus();
  // }

  doSubmit = () => {
    console.log('submitted');
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput('username', 'Username')}
          {this.renderInput('password', 'Password', 'password')}
          {this.renderButton('Login')}
        </form>
      </div>
    );
  }
}

export default LoginForm;
