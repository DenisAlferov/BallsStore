import  styled  from "styled-components";


export const StyledSubscribe = styled("div")`
max-width: 1200px;
margin: 70px auto;
width: 100%;
height: 290px;
background-color: ${props => props.theme.palette.sub.main};
padding: 30px;
`

export const StyledP = styled("p")`
text-transform: uppercase;
font-weight: 700;
padding: 50px 50px 0;
text-align: left;
`

export const StyledSpan = styled("p")`
font-weight: 200;
font-size: 14px;
text-align: left;
padding: 0 50px;
`

export const StyledInput= styled("input")`
font-size: 16px;
background-color: ${props => props.theme.palette.primary.main};
padding: 8px;
width: 80%;
text-align: left;
`

