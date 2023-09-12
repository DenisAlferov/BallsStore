import React from 'react';
import {StyledFilledButtons, StyledOutlinedButtons} from "./styles"
import { IStyledComponent } from 'styled-components';


interface IButtonsProps{
   content?: string,
   isBtnActive?: boolean,
   variant: 'filled' | 'outlined',
   onBtnClick?: () => void;
}

const buttons: Record<'filled' | 'outlined', typeof StyledOutlinedButtons<any>>= {
   filled: StyledFilledButtons,
   outlined: StyledOutlinedButtons,
}

const Buttons = ({content = 'Click me', isBtnActive = true, variant, onBtnClick}: IButtonsProps) => {
  const Component = buttons[variant];
   
   return (
      <Component $active={isBtnActive} onClick={onBtnClick}>
         {content}
      </Component>

   );
};

export default Buttons;