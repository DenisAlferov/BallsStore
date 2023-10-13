import React, { FC, PropsWithChildren } from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import { Outlet } from 'react-router-dom';
import { BodyWrapper, StyledLayout } from './layoutStyles';

const Layout: FC<PropsWithChildren> = () => {
	return (
		<BodyWrapper>
			<StyledLayout>
				<Header />

				<Outlet />

				<Footer />
			</StyledLayout>
		</BodyWrapper>
	);
};

export default Layout;