import React from 'react';
import { StyledFooter, StyledP } from './styles';
import ThemeToggler from '../Header/BurgerMenu/ThemeToggler/ThemeToggler';

const Footer = () => {
	return (
		<StyledFooter>
			<StyledP>©2023 Bookstore</StyledP>
			<div>
				<ThemeToggler />
			</div>
			<StyledP>Denis Alferov</StyledP>
		</StyledFooter>
	);
};

export default Footer;