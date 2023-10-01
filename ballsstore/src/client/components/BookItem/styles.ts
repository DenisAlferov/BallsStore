import styled from "styled-components";

const getRandomStart = (min:number, max:number) => {
   return Math.floor(Math.random() * (max - min)) + min;
};

const backgroundColorSS = () => {
   const myColor = 'rgb('+getRandomStart(0,255)+', '+getRandomStart(0,255)+', '+getRandomStart(0,255)+', '+0.5+')';
   return myColor
};

export const StyledBookItem = styled("div")`
border: 1px solid black;
width: 32%;
height: 450px;
padding: 15px;
position:relative;
`

export const StyledImgWrapper = styled("div")`
display: flex;
justify-content: center;
align-items: center;
background-color: ${backgroundColorSS};
`

export const StyledImg = styled("img")`
height: 264px;
width: 226px;
padding: 20px;
`

export const StyledBookName = styled("h3")`
font-size: 20px;
font-weight: 700;
line-height: 32px;
letter-spacing: 0em;
text-align: center;
text-transform: uppercase;
height: 110px;
`

export const StyledBookAuthors = styled("h4")`
`

export const StyledPrice = styled("p")`
`

export const StyledPriceWrapper = styled("div")`
display: flex;
align-items: flex-end;
justify-content: space-between;

font-weight: 700;

`
