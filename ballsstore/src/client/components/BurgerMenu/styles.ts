import styled from 'styled-components'

export const BurgerMenuWrapper = styled('div')`
width: 60px;
height: 60px;
display: flex;
justify-content: center;
align-items: center;
position: relative;



`
export const StyledModal = styled('div')`
height: 200px;
width: 150px;
background-color: ${props => props.theme.palette.primary.main};
position:absolute;
top: 60px;
border: 1px solid beige;
`
