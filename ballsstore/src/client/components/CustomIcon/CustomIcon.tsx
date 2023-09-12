import React from 'react';
import { StyledIcon } from './styles';

interface IImg{
   src: string;
   alt: string;
}
const CustomIcon = ({src, alt}:IImg) => {
   return (
      <StyledIcon>
         <img src={src} alt={alt}/>
      </StyledIcon>
   );
};

export default CustomIcon;