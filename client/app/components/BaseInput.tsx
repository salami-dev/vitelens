import React from "react";
import { TextField, Grid, FormLabel, OutlinedInput } from "@mui/material";
import { styled } from "@mui/system";

import { InputLabelProps, TextFieldProps } from "@mui/material";

const FormGrid = styled(Grid)(() => ({
  display: "flex",
  flexDirection: "column",
}));

type InputProps = TextFieldProps & {
  label?: string;
  name: string;
  id: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  value: string;
};

export const BaseInput: React.FC<InputProps> = ({
  label,
  name,
  type = "text",
  id,
  placeholder,
  required = true,
  value,
  ...rest
}) => {
  return (
    <TextField
      autoComplete={id}
      name={name}
      required={required}
      fullWidth
      placeholder={placeholder ? placeholder : `please enter ${name}`}
      id={id}
      type={type}
      value={value}
      label={label ? label : name}
      autoFocus
      {...rest}
    />
  );
};

// export const BaseInput2 = () => {
//   return (
//     <FormGrid item xs={12} md={6}>
//       <FormLabel htmlFor="first-name" required>
//         First name
//       </FormLabel>
//       <OutlinedInput
//         id="first-name"
//         name="first-name"
//         type="name"
//         placeholder="John"
//         autoComplete="first name"
//         required
//       />
//     </FormGrid>
//   );
// };
