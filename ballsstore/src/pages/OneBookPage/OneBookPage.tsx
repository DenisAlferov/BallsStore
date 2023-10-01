import React, { FC, useEffect, useState } from 'react';
import { OneBookWrapper } from './styles';
import BookItem from '../../client/components/BookItem/BookItem';
import CircularProgress from '@mui/material/CircularProgress';
import { Book } from '../../types';

interface IOneBookProps {
   isbn13: string;
}

const getBookById = async (isbn13:string): Promise<any> => {
   const responce = await fetch (`https://api.itbook.store/1.0/books/${isbn13}/`)

   return await responce.json();
}


const OneBookPage: FC<IOneBookProps> = ({isbn13}) => {
const [book, setBook] = useState<Book>();

useEffect (() => {
   getBookById(isbn13).then((book) => {
      setBook(book);
   })
}, [isbn13])

   return (
      <OneBookWrapper>
         
      </OneBookWrapper>
   );
};

export default OneBookPage;