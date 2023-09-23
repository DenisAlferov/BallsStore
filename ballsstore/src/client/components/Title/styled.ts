import styled from "styled-components";

export const StyledTitle = styled("h2")`
text-transform: uppercase;
font-size: 36px;
margin: 0 auto;
max-width: 1200px;
padding: 60px 15px 50px;
text-align: left;
font-weight: 600;
background-color: ${props => props.theme.palette.primary.main};
`