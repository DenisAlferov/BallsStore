import styled from "styled-components"

export const StyledLoginPageWrapper = styled('div')`
width: 500px;
border: 2px solid black;
margin: 10% auto;
`
export const ButtonInUpWrapper = styled('div')`
width: 500px;
height: 70px;

display: flex;


`
export const StyledSignIn = styled('button')`
font-size: 20px;
background-color: ${props => props.theme.palette.primary.main};
border: none;
font-weight: 700;
align-items: center;
margin: 0 auto;
width: 48%;
padding: 20px;
text-transform: uppercase;
border-bottom: 1px solid #E7E7E7;
   &:hover{
border-bottom: 3px solid black;
cursor: pointer;
}


`
export const StyledSignUp = styled('button')`
font-size: 20px;
background-color: ${props => props.theme.palette.primary.main};
border: none;
font-weight: 700;
align-items: center;
margin: 0 auto;
width: 48%;
text-transform: uppercase;
padding: 20px;
border-bottom: 1px solid #E7E7E7;
   &:hover{
border-bottom: 3px solid black;
cursor: pointer;
}
`
export const StyledSignInForm = styled('div')`


`
export const StyledSignUpForm = styled('div')`


`
export const StyledAForgotBt = styled('a')`

font-size: 14px;
text-align: left;
margin: 20px 0 0 48px;
display: block;
&:hover{
   text-decoration: underline;
   cursor: pointer;
}

`
export const StyledP = styled('p')`
font-size: 14px;
text-align: left;
padding: 20px;
margin-left: 28px;

`


