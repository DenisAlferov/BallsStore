import React, { FC } from 'react';
import { BasicRating } from './Rating';
import { StyledBookAuthors, StyledBookItem, StyledBookName, StyledImg, StyledImgWrapper, StyledPriceWrapper } from './styles';
import { IBook, Book as BookType } from '../../../types';

 export type ResponseTypes = {
	error: string,
	total: string,
	books: IBook[];
	  };



const BookItem: FC<{bookData: BookType}> = ({bookData}) => {
   return (
      <StyledBookItem>
         <StyledImgWrapper>
            <StyledImg src={bookData.image} />
         </StyledImgWrapper>
         <StyledBookName>{bookData.title}</StyledBookName>
         <StyledBookAuthors>{bookData.authors}</StyledBookAuthors>
         <StyledPriceWrapper>
            <div>
               {bookData.price}
					ййццуййцуйцйцк
            </div>
            <div>
            <BasicRating/>
            </div>
         </StyledPriceWrapper>
      </StyledBookItem>
   );
};

export default BookItem;