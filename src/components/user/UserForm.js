import "../../index.css";
import React, { Component, Fragment } from "react";
import { DatePicker } from "@atlaskit/datetime-picker";
import { withRouter } from "react-router-dom";
import Form, { Field, FormFooter } from "@atlaskit/form";
import Button from "@atlaskit/button";
import TextField from "@atlaskit/textfield";
import Select from "@atlaskit/select";
import {
  validateUsername,
  validateName,
  validateEmail,
  validateBirthdate,
  validatePhone,
  validateGender,
  restrictExtension,
} from "../validation/Validation";
import {
  ValidationUsernameMsg,
  ValidationNameMsg,
  ValidationEmailMsg,
  ValidationBirthdateMsg,
  ValidationPhoneMsg,
  ValidationGenderMsg,
  ValidationImgMsg,
} from "../validation/ValidationMsg";

const gender = [
  { label: "Male", value: "Male" },
  { label: "Female", value: "Female" },
];

class UserForm extends Component {
  state = {
    direct: false,
  };
  handleSubmit = (data) => {
    const { history } = this.props;
    this.setState(() => ({
      direct: true,
    }));
     //Jeśli podpiety backend mozna wyslac dane w tym miejscu (POST)
    localStorage.setItem("data", JSON.stringify(data));
    history.push("/user")
  };
  render() {
    return (
      <div className="Element-width">
        <h2>Fill user form with data :)</h2>
        <Form
          onSubmit={this.handleSubmit}
        >
          {({ formProps }) => (
            <form {...formProps}>
              <Field
                name="username"
                label="Username"
                defaultValue=""
                isRequired
                validate={validateUsername}
              >
                {({ fieldProps, error, valid }) => (
                  <Fragment>
                    <TextField {...fieldProps} />
                    <ValidationUsernameMsg error={error} valid={valid} />
                  </Fragment>
                )}
              </Field>
              <Field
                name="firstname"
                label="First name"
                defaultValue=""
                isRequired
                validate={validateName}
              >
                {({ fieldProps, error, valid }) => (
                  <Fragment>
                    <TextField {...fieldProps} />
                    <ValidationNameMsg error={error} valid={valid} />
                  </Fragment>
                )}
              </Field>
              <Field
                name="lastname"
                label="Last name"
                defaultValue=""
                isRequired
                validate={validateName}
              >
                {({ fieldProps, error, valid }) => (
                  <Fragment>
                    <TextField {...fieldProps} />
                    <ValidationNameMsg error={error} valid={valid} />
                  </Fragment>
                )}
              </Field>
              <Field
                name="email"
                label="Email"
                defaultValue=""
                isRequired
                validate={validateEmail}
              >
                {({ fieldProps, error, valid }) => (
                  <Fragment>
                    <TextField {...fieldProps} />
                    <ValidationEmailMsg error={error} valid={valid} />
                  </Fragment>
                )}
              </Field>
              <Field
                name="birthdate"
                label="Birthdate"
                defaultValue="1995-03-05"
                validate={validateBirthdate}
                isRequired
              >
                {({ fieldProps, error, valid }) => (
                  <Fragment>
                    <DatePicker {...fieldProps} />
                    <ValidationBirthdateMsg error={error} valid={valid} />
                  </Fragment>
                )}
              </Field>
              <Field
                name="phone"
                label="Phone"
                defaultValue=""
                isRequired
                validate={validatePhone}
              >
                {({ fieldProps, error, valid }) => (
                  <Fragment>
                    <TextField {...fieldProps} />
                    <ValidationPhoneMsg error={error} valid={valid} />
                  </Fragment>
                )}
              </Field>
              <Field
                name="gender"
                label="Select gender"
                defaultValue=""
                isRequired
                validate={validateGender}
              >
                {({ fieldProps: { id, ...rest }, error, valid }) => (
                  <Fragment>
                    <Select
                      inputId={id}
                      {...rest}
                      options={gender}
                      isClearable
                    />
                    <ValidationGenderMsg error={error} valid={valid} />
                  </Fragment>
                )}
              </Field>
              <Field
                name="imglink"
                defaultValue=""
                label="Link to profile img (optional)"
                validate={restrictExtension}
              >
                {({ fieldProps, error, valid }) => (
                  <Fragment>
                    <TextField {...fieldProps} />
                    <ValidationImgMsg error={error} valid={valid} />
                  </Fragment>
                )}
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

export default withRouter(UserForm);
