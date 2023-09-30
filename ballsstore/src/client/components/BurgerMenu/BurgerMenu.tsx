import React, { useState } from 'react';
import { BurgerMenuWrapper, StyledModal } from './styles';
import { IconButton } from '@mui/material';
import { Close, Menu } from '@mui/icons-material';

const BurgerMenu = () => {
   const [opened, setOpened] = useState(false);

   const handleOpen = () => {
     setOpened ((prevOpened) => !prevOpened);
   };
   
   return (
      <BurgerMenuWrapper>
         <IconButton onClick={handleOpen}>
            {opened ? <Close/> : <Menu/>}
         </IconButton>
         {opened && 
         <StyledModal>
            
         </StyledModal>
         }
      </BurgerMenuWrapper>
   );
};

export default BurgerMenu;