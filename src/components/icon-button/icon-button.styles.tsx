import styled from 'styled-components/macro';
import { theme } from 'twin.macro';
import { Button } from '../button/button.component';

export const IconButton = styled(Button)`
  > svg {
    margin-right: ${theme`spacing.1`};
    font-size: ${theme`fontSize.base`};
  }
`;
