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
import TextArea from "@atlaskit/textarea";
import { DatePicker } from "@atlaskit/datetime-picker";
import Select from "@atlaskit/select";

const handleSubmit = (data) => {
  //console.log(data);
};
const gender = [
  { label: "Male", value: "Male" },
  { label: "Female", value: "Female" },
];
class UserForm extends Component {
    state = {
        toDashboard: false,
      }

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
      return "INVALID_NAME";
    }
    return undefined;
  };
  validateEmail = (value) => {
    if (!value.includes("@")) {
      return "INVALID_EMAIL";
    }
    return undefined;
  };
  validatePhone = (value) => {
    if (value.length !== 9) {
      return "PHONE_LENGTH";
    }
    if (!/^[0-9]+$/.test(value)) {
      return "PHONE_INVALID";
    }
    return undefined;
  };
  validateBirthdate = (value) => {
    if (value.length === 0) {
      return "EMPTY";
    }
    return undefined;
  };
  validateSelect = (value) => {
    if (value === null || value.length === 0) {
      return "EMPTY";
    }
    return undefined;
  };
  render() {
    return (
      <div className="Form-width">
        <Form
          onSubmit={(data) => {
            handleSubmit(data);
          }}
        >
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
                        This Username is valid
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
                        Please enter your first name, should be without Polish
                        letters
                      </HelperMessage>
                    )}
                    {!error && valid && (
                      <ValidMessage>
                        This first Name is valid
                      </ValidMessage>
                    )}
                    {error === "TOO_SHORT" && (
                      <ErrorMessage>
                        Invalid first name, needs to be more than 2 characters
                      </ErrorMessage>
                    )}
                    {error === "INVALID_NAME" && (
                      <ErrorMessage>
                        Invalid first name, use only letters (English alphabeth)
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
                        Please enter your last name, should be without Polish letters
                      </HelperMessage>
                    )}
                    {!error && valid && (
                      <ValidMessage>
                       This last Name is valid
                      </ValidMessage>
                    )}
                    {error === "INVALID_NAME" && (
                      <ErrorMessage>
                        Invalid last name, use only letters (English alphabeth)
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
                      <HelperMessage>Please enter email, must contain @ symbol</HelperMessage>
                    )}
                    {!error && valid && (
                      <ValidMessage>This email is valid</ValidMessage>
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
                name="birthdate"
                label="Birthdate"
                defaultValue=""
                validate={this.validateBirthdate}
                isRequired
              >
                {({ fieldProps, error, valid }) => (
                  <Fragment>
                    <DatePicker
                      {...fieldProps}
                    />
                    {!error && !valid && (
                      <HelperMessage>Please choose your birthdate</HelperMessage>
                    )}
                    {error === "EMPTY" && (
                      <ErrorMessage>
                        This birthday is empty, choose birthdate
                      </ErrorMessage>
                    )}
                  </Fragment>
                )}
              </Field>
              <Field
                name="phone"
                label="Phone"
                defaultValue=""
                isRequired
                validate={this.validatePhone}
              >
                {({ fieldProps, error, valid }) => (
                  <Fragment>
                    <TextField {...fieldProps} />
                    {!error && !valid && (
                      <HelperMessage>
                        Must contain only digits (9 digits)
                      </HelperMessage>
                    )}
                    {!error && valid && (
                      <ValidMessage>This phone is valid</ValidMessage>
                    )}
                    {error === "PHONE_LENGTH" && (
                      <ErrorMessage>
                        This phone is invalid, need to have 9 digits
                      </ErrorMessage>
                    )}
                    {error === "PHONE_INVALID" && (
                      <ErrorMessage>
                        This phone is invalid, need to have only digits
                      </ErrorMessage>
                    )}
                  </Fragment>
                )}
              </Field>
              <Field
                name="gender"
                label="Select gender"
                defaultValue=""
                isRequired
                validate={this.validateSelect}
              >
                {({ fieldProps: { id, ...rest }, error, valid }) => (
                  <Fragment>
                    <Select
                      inputId={id}
                      {...rest}
                      options={gender}
                      isClearable
                    />
                     {!error && !valid && (
                      <HelperMessage>Please select gender</HelperMessage>
                    )}
                    {error === "EMPTY" && (
                      <ErrorMessage>
                        This gender is empty, choose gender
                      </ErrorMessage>
                    )}
                  </Fragment>
                )}
              </Field>
              <Field
                name="imglink"
                defaultValue=""
                label="Link to profile img (optional)"
              >
                {({ fieldProps }) => <TextArea {...fieldProps} />}
              </Field>

              <FormFooter>
                <Button type="submit">Submit</Button>
              </FormFooter>
            </form>
          )}
        </Form>
      </div>
    );
  }
}

export default UserForm;
