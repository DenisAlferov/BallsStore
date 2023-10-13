import React from 'react';
import { StyledFooter } from './styles';
import ThemeToggler from '../Header/BurgerMenu/ThemeToggler/ThemeToggler';

const Footer = () => {
	return (
		<StyledFooter>
			<div>©2023 Bookstore</div>
			<div>
				<ThemeToggler />
			</div>
			<div>Denis Alferov</div>
		</StyledFooter>
	);
};

export default Footer;