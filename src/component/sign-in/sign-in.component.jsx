import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import './sign-in.styles.scss';

class SignIn extends React.Component {
  state = {
    email: '',
    password: ''
  }

  handleSubmit = async event => {
    event.preventDefault();
    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: '', password: '' });
    } catch (err) {
      console.log(err);
    }
    
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }
  render() {
    return (
      <div className='sign-in'>
        <h2>I Already Have An Account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput 
            type="email" 
            name="email" 
            onChange={this.handleChange} 
            label='Email' 
            value={this.state.email} 
            required 
          />
          <FormInput 
            type="password" 
            name="password" 
            onChange={this.handleChange} 
            label='Password' 
            value={this.state.password} 
            required 
          />
          <div className='buttons'>
            <CustomButton type="submit">Sign In</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign In With Google</CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;