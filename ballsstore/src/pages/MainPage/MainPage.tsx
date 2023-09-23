import React, { useEffect, useState } from 'react';
import BookItem, { IBook } from '../../client/components/BookItem/BookItem';
import Title from '../../client/components/Title/Title';
import { ContentWrapper, Pagination, StyledNext, StyledPagination, StyledPrev } from '../../client/components/Layout/styles';
import Subscribe from '../../client/components/Subscribe/Subscribe';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const MainPage = () => {

   
   const [books, setBooks] = useState(null);

   const getBook = async () => {
     // const responce = await fetch("https://api.itbook.store/1.0/new")
     const responce = await fetch("https://studapi.teachmeskills.by/blog/posts/?limit=1")


      return responce.json();
   };

   useEffect(() => {
      getBook().then(({results}) => {
         setBooks(results);
      })
   }, [])
   
   return (
      <div>

<Title/>

<ContentWrapper>
{books && books.map((book: IBook) => <BookItem 
                     title={book.title}
       subtitle={book.subtitle}
       isbn13={book.isbn13}
       price={book.price}
       image={book.image}
       url={book.url}
       key={book.isbn13 + book.url}/>)}
</ContentWrapper>
<StyledPagination> 
   <StyledPrev>
      <ArrowBackIosNewIcon/> 
      Prev
   </StyledPrev>
   <Pagination>1 2 3 ... 16</Pagination>
   <StyledNext>
      Next
      <ArrowForwardIosIcon/> 
   </StyledNext>
</StyledPagination>
<Subscribe/>
         
      </div>
   );
};

export default MainPage;