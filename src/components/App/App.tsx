import React, { FC } from 'react';
import Button from '@mui/material/Button';

import { MyComponent } from './App.styles';

export const App: FC = () => {
  return (
    <div className="App">
      <Button variant="contained">Hello World</Button>
      <MyComponent primary={'yellow'} />
    </div>
  );
};
