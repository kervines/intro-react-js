import React from "react";

import { InputContainer, IconContainer, InputText } from "./style";

const Input = ({ leftIcon, name, ...rest }) => {
  return (
    <IconContainer>
      {leftIcon ? <IconContainer>{leftIcon}</IconContainer> : null}
      <InputText {...rest} />
    </IconContainer>
  );
};

export { Input };
