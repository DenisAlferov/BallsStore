import React, { useState } from 'react';
import { ButtonInUpWrapper, StyledAForgotBt, StyledLoginPageWrapper, StyledP, StyledSignIn, StyledSignInForm, StyledSignUp, StyledSignUpForm} from './styles';
import { StyledInput } from '../../client/components/Subscribe/styles';
import Buttons from '../../client/components/Buttons/Buttons';

const LoginPage = () => {

   const [signUpData, setSignUpData] = useState();


   return (
   <StyledLoginPageWrapper>
         <ButtonInUpWrapper>
            <StyledSignIn> Sign in </StyledSignIn>
            <StyledSignUp> Sign up </StyledSignUp>
         </ButtonInUpWrapper>

      <StyledSignInForm>
         <StyledP>Email</StyledP>
         <StyledInput placeholder='Your email' type='email'/>
         <StyledP>Password</StyledP>
         <StyledInput placeholder='Your password' type='password'/>
         <StyledAForgotBt>Forgot password ?</StyledAForgotBt>
         <Buttons content='Sing in'/>
      </StyledSignInForm>

      <StyledSignUpForm>
         <StyledP>Name</StyledP>
         <StyledInput placeholder='Your name' type='name'/>
         <StyledP>Email</StyledP>
         <StyledInput placeholder='Your email' type='email'/>
         <StyledP>Password</StyledP>
         <StyledInput placeholder='Your password' type='password'/>
         <StyledP>Confirm your password</StyledP>
         <StyledInput placeholder='Confirm your password' type='password'/>
         <Buttons content='Sing in'/>
      </StyledSignUpForm>
   </StyledLoginPageWrapper>
   );
};

export default LoginPage;   