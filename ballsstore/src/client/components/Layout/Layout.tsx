import React, {FC, PropsWithChildren, useState} from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import { BodyWrapper, ContentWrapper, Pagination, StyledNext, StyledPagination, StyledPrev } from './styles';
import { Route, Routes } from 'react-router-dom';
import MainPage from '../../../pages/MainPage/MainPage';
import LoginPage from '../../../pages/LoginPage/LoginPage';
import ForgotPasswordPage from '../../../pages/ForgotPasswordPage/ForgotPasswordPage';
import FavouritePage from '../../../pages/FavouritePage/FavouritePage';
import CardPage from '../../../pages/CardPage/CardPage';
import OneBookPage from '../../../pages/OneBookPage/OneBookPage';
import { userRoutes } from '../../userRoutes';



const Layout: FC<PropsWithChildren> = () => {


   return (
      <BodyWrapper>
         <Header></Header>
         <Routes>
            {userRoutes.map(({path, id, Component, componentAdditionalProps}) => {
               return <Route key={id} path={path} element={<Component {...componentAdditionalProps}/>}/>
            })}


         </Routes>
         <Footer/>
      </BodyWrapper>
   );
};

export default Layout;