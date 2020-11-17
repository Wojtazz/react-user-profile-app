import React, { Component, Fragment } from "react";
import "../App.css";
import Form, {
  ErrorMessage,
  Field,
  FormFooter,
  HelperMessage,
  ValidMessage,
} from "@atlaskit/form";

import Button from "@atlaskit/button";
import TextField from "@atlaskit/textfield";
import { DatePicker } from "@atlaskit/datetime-picker";

class UserForm extends Component {
  validateUsername = (value) => {
    if (value.length < 5) {
      return "TOO_SHORT";
    }
    return undefined;
  };
  validateName = (value) => {
    if (value.length < 3) {
      return "TOO_SHORT";
    }
    if (/[^a-zA-Z]/.test(value)) {
      return "INVALID";
    }
    return undefined;
  };
  validateEmail = (value) => {
    if (!value.includes("@")) {
      return "INVALID_EMAIL";
    }
    return undefined;
  };
  render() {
    return (
      <div className="Form-width">
        <Form onSubmit={this.handleSubmit}>
          {({ formProps }) => (
            <form {...formProps}>
              <Field
                name="username"
                label="Username"
                defaultValue=""
                isRequired
                validate={this.validateUsername}
              >
                {({ fieldProps, error, valid }) => (
                  <Fragment>
                    <TextField {...fieldProps} />
                    {!error && !valid && (
                      <HelperMessage>
                        Please enter username, should be more than 4 characters
                      </HelperMessage>
                    )}
                    {!error && valid && (
                      <ValidMessage>
                        Nice one, this username is valid
                      </ValidMessage>
                    )}
                    {error === "TOO_SHORT" && (
                      <ErrorMessage>
                        Invalid username, needs to be more than 4 characters
                      </ErrorMessage>
                    )}
                  </Fragment>
                )}
              </Field>
              <Field
                name="firstname"
                label="First name"
                defaultValue=""
                isRequired
                validate={this.validateName}
              >
                {({ fieldProps, error, valid }) => (
                  <Fragment>
                    <TextField {...fieldProps} />
                    {!error && !valid && (
                      <HelperMessage>
                        Please enter your First name, should be without Polish
                        letters
                      </HelperMessage>
                    )}
                    {!error && valid && (
                      <ValidMessage>
                        Nice one, this First Name is valid
                      </ValidMessage>
                    )}
                    {error === "TOO_SHORT" && (
                      <ErrorMessage>
                        Invalid username, needs to be more than 2 characters
                      </ErrorMessage>
                    )}
                    {error === "INVALID" && (
                      <ErrorMessage>
                        Invalid First name, use only letters (English alphabeth)
                      </ErrorMessage>
                    )}
                  </Fragment>
                )}
              </Field>
              <Field
                name="lastname"
                label="Last name"
                defaultValue=""
                isRequired
                validate={this.validateName}
              >
                {({ fieldProps, error, valid }) => (
                  <Fragment>
                    <TextField {...fieldProps} />
                    {!error && !valid && (
                      <HelperMessage>
                        Please enter username, should be without Polish letters
                      </HelperMessage>
                    )}
                    {!error && valid && (
                      <ValidMessage>
                        Nice one, this Last Name is valid
                      </ValidMessage>
                    )}
                    {error === "INVALID" && (
                      <ErrorMessage>
                        Invalid Last name, use only letters (English alphabeth)
                      </ErrorMessage>
                    )}
                  </Fragment>
                )}
              </Field>
              <Field
                name="email"
                label="Email"
                defaultValue=""
                isRequired
                validate={this.validateEmail}
              >
                {({ fieldProps, error, valid }) => (
                  <Fragment>
                    <TextField {...fieldProps} />
                    {!error && !valid && (
                      <HelperMessage>Must contain @ symbol</HelperMessage>
                    )}
                    {!error && valid && (
                      <ValidMessage>Email is valid</ValidMessage>
                    )}
                    {error === "INVALID_EMAIL" && (
                      <ErrorMessage>
                        This email is invalid, need to have @
                      </ErrorMessage>
                    )}
                  </Fragment>
                )}
              </Field>
              <Field
                name="DOB"
                label="Date of Birth"
                defaultValue=""
                isRequired
              >
                {({ fieldProps, error }) => (
                  <Fragment>
                    <DatePicker
                      validationState={error ? "error" : "none"}
                      {...fieldProps}
                    />
                    {error && <ErrorMessage>{error}</ErrorMessage>}
                  </Fragment>
                )}
              </Field>

              <FormFooter>
                <Button type="submit">Next</Button>
              </FormFooter>
            </form>
          )}
        </Form>
      </div>
    );
  }
}

export default UserForm;
