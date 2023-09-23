import React, { FC } from 'react';
import { StyledInput } from './styles';
import { StyledIcon } from '../CustomIcon/styles';

type CustomInputProps = {
   label?: string;
   type?: "text" | "password" | "email";
   placeholder?: string;
   value?: string;
   onChange?: () => void
   }

const CustomInput : FC<CustomInputProps> = ({label, type, placeholder, value, onChange}) => {
   return (
      <label>
         {label}
         <StyledInput type={type} placeholder={placeholder} value={value} onChange={onChange} />
      </label>
   );
};

export default CustomInput;