import React, {FC, PropsWithChildren, useState} from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import { BodyWrapper } from './styles';
import { Outlet, Route, Routes } from 'react-router-dom';
import { userRoutes } from '../../userRoutes';



const Layout: FC<PropsWithChildren> = () => {


   return (
      <BodyWrapper>
         <Header></Header>
            <Outlet/>
         <Footer/>
      </BodyWrapper>
   );
};

export default Layout;