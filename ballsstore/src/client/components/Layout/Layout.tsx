import React, {FC, PropsWithChildren} from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import { ContentWrapper } from './styles';
import Title from '../Title/Title';
import BookItem from '../BookItem/BookItem';



const Layout: FC<PropsWithChildren> = ({children}) => {
   return (
      <div>
         <Header></Header>
         <Title/>
         <ContentWrapper>
            <BookItem/>
            <BookItem/>
            <BookItem/>
            <BookItem/>
            <BookItem/>
            <BookItem/>
            

           {children}
         </ContentWrapper>
         <Footer/>
      </div>
   );
};

export default Layout;