import React from 'react';
import {StyledHeader} from "./styles"
import CustomInput from '../../CustomInput/CustomInput';
import { StyledIcon } from '../../CustomIcon/styles';



const Header = () => {
   return (
      <StyledHeader>
         <h1>BOOKSTORE</h1>
         <CustomInput inputLabel={''} inputType={'text'} placeholder={'Search'}></CustomInput>
         <div>
            <StyledIcon src={require("../../../assets/img/Like.svg").default} alt="img" />
            <StyledIcon src={require("../../../assets/img/Card.svg").default} alt="img" />
            <StyledIcon src={require("../../../assets/img/user.svg").default} alt="img" />
         </div>
      </StyledHeader>
   );
};

export default Header;