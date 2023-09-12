import React, { FC } from 'react';
import { StyledInput } from './styles';
import { StyledIcon } from '../CustomIcon/styles';

type CustomInputProps = {
   inputLabel: string;
   inputType: "text" | "password" | "email";
   placeholder: string;
}

const CustomInput : FC<CustomInputProps> = ({inputLabel, inputType, placeholder}) => {
   return (
      <label>
         {inputLabel}
         <StyledInput type={inputType} placeholder={placeholder} />
         <StyledIcon src={require("../../assets/img/Search.svg").default} alt="img" />
      </label>
   );
};

export default CustomInput;