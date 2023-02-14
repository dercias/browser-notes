import { ButtonHTMLAttributes, FC } from 'react';
import { IconButton as StyledButton } from './icon-button.styles';

type IconButtonProps = {
  Icon: FC;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const IconButton: FC<IconButtonProps> = ({
  Icon,
  children,
  ...props
}) => (
  <StyledButton color='error' {...props}>
    <Icon />
    {children}
  </StyledButton>
);
