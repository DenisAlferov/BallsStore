import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';

export  const BasicRating = () => {
  const [value, setValue] = React.useState<number | null>(4);

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