import  styled  from "styled-components";

export const BodyWrapper = styled('section')`
background-color: ${props => props.theme.palette.primary.main};
color: ${props => props.theme.palette.text.main};
`

export const ContentWrapper = styled("div")`
display: flex;
flex-wrap: wrap;
justify-content: space-between;
align-items: flex-start;
align-content: flex-start;
gap: 10px;
min-height: calc(100vh - 120px);
max-width: 1200px;
padding: 0 15px;
margin: 0 auto;
border: 1px solid black;


`
export const StyledPagination = styled('div')`
width: 100%;
max-width: 1200px;
display: flex;
justify-content: space-between;
margin: 30px auto 0;
`

export const StyledPrev = styled('div')`
font-size: 20px;
display: flex;
align-items: center
`

export const StyledNext = styled('div')`
font-size: 20px;
display: flex;
align-items: center

`

export const Pagination = styled('div')`
font-size: 20px;
display: flex;
align-items: center

`
