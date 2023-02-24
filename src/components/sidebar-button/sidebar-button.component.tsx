import { ButtonHTMLAttributes, FC } from 'react';
import { StyledButton } from './sidebar-button.styles';

export const SidebarButton: FC<ButtonHTMLAttributes<HTMLButtonElement>> = (
  props
) => <StyledButton {...props} />;
