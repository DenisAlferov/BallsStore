import React from 'react';
import { StyledButtons } from "./styles"

interface IButtonsProps{
   content?: string,

}

const Buttons = ({content = 'Click me'}: IButtonsProps) => {
   
   return (
      <StyledButtons>
         {content}
      </StyledButtons>

   );
};

export default Buttons;