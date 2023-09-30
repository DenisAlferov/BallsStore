import { FC } from "react";
import MainPage from "../pages/MainPage/MainPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import OneBookPage from "../pages/OneBookPage/OneBookPage";
import ForgotPasswordPage from "../pages/ForgotPasswordPage/ForgotPasswordPage";
import FavouritePage from "../pages/FavouritePage/FavouritePage";
import CardPage from "../pages/CardPage/CardPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";

type userRoutes = {
   id: string | number;
   path: string;
   Component: FC<any>;
   componentAdditionalProps?: any;

}

export const userRoutes: userRoutes[] = [

   {
      id: 1,
      path: '/log-in',
      Component: LoginPage,
   },
   {
      id: 2,
      path: '/book/:bookId',
      Component: OneBookPage,
      componentAdditionalProps: { bookId: '1'}
   },
   {
      id: 3,
      path: '/forgot-password',
      Component: ForgotPasswordPage,
   },
   {
      id: 4,
      path: '/favourite',
      Component: FavouritePage,
   },
   {
      id: 5,
      path: '/card',
      Component: CardPage,
   },







   {
      id: 9999,
      path: '*',
      Component: NotFoundPage,
   },


]