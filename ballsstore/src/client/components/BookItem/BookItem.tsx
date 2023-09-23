import React from 'react';
import { BasicRating } from './Rating';
import { StyledBookAuthors, StyledBookItem, StyledBookName, StyledImg, StyledImgWrapper, StyledPriceWrapper } from './styles';


 export interface IBook {
	title: string;
	subtitle: string;
	isbn13: string;
	price: string;
	image: string;
	url: string;
	authors?: string;
	publisher?: string;
	isbn10?: string;
	pages?: string;
	year?: string;
	rating?: string;
	desc?: string;
	error?: string;
	isFavourite?: boolean;
	amount?: number;
}

const BookItem = (book: IBook) => {
   return (
      <StyledBookItem>
         <StyledImgWrapper>
            <StyledImg src={book.image} />
         </StyledImgWrapper>
         <StyledBookName>{book.title}</StyledBookName>
         <StyledBookAuthors></StyledBookAuthors>
         <StyledPriceWrapper>
            <div>
               {book.price}
            </div>
            <div>
            <BasicRating/>
            </div>
         </StyledPriceWrapper>
      </StyledBookItem>
   );
};

export default BookItem;