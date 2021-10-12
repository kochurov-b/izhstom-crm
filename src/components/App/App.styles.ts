import { styled } from '@mui/system';
import Box, { BoxProps } from '@mui/material/Box';

interface TestMyComponent extends BoxProps {
  primary: string;
}

export const MyComponent = styled(Box)<TestMyComponent>(({ primary }) => ({
  color: primary,
  backgroundColor: primary,
  padding: 8,
  borderRadius: 4,
}));
