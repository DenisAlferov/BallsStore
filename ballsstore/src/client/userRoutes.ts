import { FC } from "react";
import MainPage from "../pages/MainPage/MainPage";
import LoginPage from "../pages/LoginPage/LoginPage";

type userRoutes = {
   id: string | number;
   path: string;
   Component: FC<any>;
   componentAdditionalProps?: any;
}

export const userRoutes: userRoutes[] = [
   {
      id: 1,
      path: '/',
      Component: MainPage,
      componentAdditionalProps: { bookId: '1'}
   },
   {
      id: 2,
      path: '/log-in',
      Component: LoginPage,
     
   }
]