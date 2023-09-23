import styled from "styled-components";


export const StyledButtons = styled('button')`
   font-family: Raleway;
   font-size: 16px;
   font-weight: 700;
   line-height: 24px;
   letter-spacing: 0.05em;
   text-align: center;
   padding: 10px;
   text-transform: uppercase;
   background: #313037;
   color: ${props => props.theme.palette.btn.main};
   cursor: pointer;
   width: 80%;
   margin: 5px;
   &:hover{
      background: #5B5A62;
      transition: 0.3s;
   }

`

