import React from 'react';
import { StyledInput, StyledP, StyledSpan, StyledSubscribe } from './styles';
import Buttons from '../Buttons/Buttons';

const Subscribe = () => {
   return (
      <StyledSubscribe>
         <StyledP>Subscribe to Newsletter</StyledP>
         <StyledSpan>Be the first to know about new IT books, upcoming releases, exclusive offers and more.</StyledSpan>
         <StyledInput placeholder='Your email'/>
         <Buttons content='SUBSCRIBE'/>
         
      </StyledSubscribe>
   );
};

export default Subscribe;