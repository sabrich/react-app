import React from "react";

import FormInput from "../form-input/Form-input.component";
import CustonButton from "../custom-button/Custom-button.component";
import { signInWithGoogle } from "../../firebase/firebase.utils";

import "./Sign-in.styles.scss";

class SignIn extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.state({ email: "", password: "" });
  };

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            label="Email"
            name="email"
            type="email"
            value={this.state.email}
            required
            handleChange={this.handleChange}
          />
          <FormInput
            label="Password"
            name="password"
            type="password"
            value={this.state.password}
            required
            handleChange={this.handleChange}
          />
        </form>
        <div className="buttons">
          <CustonButton type="submit">Sign in</CustonButton>
          <CustonButton isGoogleSignIn onClick={signInWithGoogle}>
            Sign in with Google
          </CustonButton>
        </div>
      </div>
    );
  }
}

export default SignIn;
