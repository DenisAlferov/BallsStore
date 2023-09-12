import styled from "styled-components";

type BtnProps = {
   $active: boolean
}

const StyledButtons = styled('button')<BtnProps>`
   font-family: Raleway;
   font-size: 24px;
   font-weight: 700;
   line-height: 24px;
   letter-spacing: 0.05em;
   text-align: center;
   padding: 15px;
   margin: 10px;
   text-transform: uppercase;

   ${(props) => {
   return props.$active ? `` : `pointer-events: none; background: #A8A8A8;` 
   }}

   &:hover{
      background: #5B5A62;
      transition: 0.3s;
   }

`

export const StyledFilledButtons = styled(StyledButtons)`
   background: #313037;
   color: white;
   
   &:active{
      background: #313037;
      transition: 0.1s;
   }
      
`

export const StyledOutlinedButtons = styled(StyledButtons)`
   background: unset;
   color: black;
   border: 2px solid black;
    
   &:active{
      background: unset;
      transition: 0.1s;
   }

`