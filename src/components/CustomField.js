// import React, { Fragment } from "react";
// import {
//   ErrorMessage,
//   Field,
//   HelperMessage,
//   ValidMessage,
// } from "@atlaskit/form";

// import TextField from "@atlaskit/textfield";

// const CustomField = ({fieldName}) => {
//   console.log("fieldname", fieldName);
//   const GetLabelName = (fieldName) => {
//     if (fieldName === "userName") return "Username";
//   };

//   const validateUsername = (value) => {
//     if (value && value.length < 5) {
//       return "TOO_SHORT";
//     }
//     return undefined;
//   };

//   const getValidationUserName = (error, valid) => {
//     if (!error && !valid)
//       return (
//         <HelperMessage>
//           Please enter username, should be more than 4 characters
//         </HelperMessage>
//       );
//     if (!error && valid)
//       return <ValidMessage>Nice one, this username is valid</ValidMessage>;

//     if (error === "TOO_SHORT")
//       return (
//         <ErrorMessage>
//           Invalid username, needs to be more than 4 characters
//         </ErrorMessage>
//       );
//   };
//   return (
//     <Field
//       name={fieldName}
//       label={GetLabelName(fieldName)}
//       defaultValue=""
//       isRequired
//       validate={validateUsername(fieldName)}
//     >
//       {({ fieldProps, error, valid }) => (
//         <Fragment>
//           <TextField {...fieldProps} />
//           {getValidationUserName(error, valid)}
//         </Fragment>
//       )}
//     </Field>
//   );
// };

// export default CustomField;
