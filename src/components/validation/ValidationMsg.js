import React, { Fragment } from "react";
import { ErrorMessage, HelperMessage, ValidMessage } from "@atlaskit/form";

export const ValidationUsernameMsg = ({ error, valid }) => {
  return (
    <Fragment>
      {!error && !valid && (
        <HelperMessage>
          Please enter username, should be more than 4 characters
        </HelperMessage>
      )}
      {!error && valid && <ValidMessage>This Username is valid</ValidMessage>}
      {error === "TOO_SHORT" && (
        <ErrorMessage>
          Invalid username, needs to be more than 4 characters
        </ErrorMessage>
      )}
    </Fragment>
  );
}

export const ValidationNameMsg = ({ error, valid }) => {
  return (
    <Fragment>
      {!error && !valid && (
        <HelperMessage>
          Please enter your first name, should be without Polish letters
        </HelperMessage>
      )}
      {!error && valid && <ValidMessage>This first Name is valid</ValidMessage>}
      {error === "TOO_SHORT" && (
        <ErrorMessage>
          Invalid first name, needs to be more than 2 characters
        </ErrorMessage>
      )}
      {error === "INVALID_NAME" && (
        <ErrorMessage>
          Invalid first name, use only letters (English alphabet) without space
        </ErrorMessage>
      )}
    </Fragment>
  );
};

export const ValidationEmailMsg = ({ error, valid }) => {
  return (
    <Fragment>
      {!error && !valid && (
        <HelperMessage>Please enter email, must contain @ symbol</HelperMessage>
      )}
      {!error && valid && <ValidMessage>This email is valid</ValidMessage>}
      {error === "INVALID_EMAIL" && (
        <ErrorMessage>This email is invalid, need to have @</ErrorMessage>
      )}
    </Fragment>
  );
};

export const ValidationBirthdateMsg = ({ error, valid }) => {
  return (
    <Fragment>
      {!error && !valid && (
        <HelperMessage>Please choose your birthdate</HelperMessage>
      )}
      {error === "EMPTY" && (
        <ErrorMessage>This birthday is empty, choose birthdate</ErrorMessage>
      )}
    </Fragment>
  );
};

export const ValidationPhoneMsg = ({ error, valid }) => {
  return (
    <Fragment>
      {!error && !valid && (
        <HelperMessage>Must contain only digits (9 digits)</HelperMessage>
      )}
      {!error && valid && <ValidMessage>This phone is valid</ValidMessage>}
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
  );
};

export const ValidationGenderMsg = ({ error, valid }) => {
  return (
    <Fragment>
      {!error && !valid && <HelperMessage>Please select gender</HelperMessage>}
      {error === "EMPTY" && (
        <ErrorMessage>This gender is empty, choose gender</ErrorMessage>
      )}
    </Fragment>
  );
};

export const ValidationImgMsg = ({ error, valid }) => {
  return (
    <Fragment>
      {!error && valid && <ValidMessage>This field is valid</ValidMessage>}
      {error === "INVALID_EXTENSION" && (
        <ErrorMessage>This link is invalid, need to be jpg</ErrorMessage>
      )}
    </Fragment>
  );
};
