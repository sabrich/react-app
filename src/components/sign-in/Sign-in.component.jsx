import React from "react";

import FormInput from "../form-input/Form-input.component";
import CustonButton from "../custom-button/Custom-button.component";

import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

import "./Sign-in.styles.scss";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.state({ email: "", password: "" });
    } catch (error) {
      console.log(error);
    }
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

          <div className="buttons">
            <CustonButton type="submit">Sign in</CustonButton>
            <CustonButton isGoogleSignIn onClick={signInWithGoogle}>
              Sign in with Google
            </CustonButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
