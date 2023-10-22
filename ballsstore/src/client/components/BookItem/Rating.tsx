import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';

export  const BasicRating = () => {
  const num = () => {
    return Math.random() * (5 - 0) + 0;
  }
  const [value, setValue] = React.useState<number | null>(num);

  return (
    <Box
      sx={{'& > legend': { mt: 2 }, }}>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />          
    </Box>
  );
}