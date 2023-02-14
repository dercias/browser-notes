import { ButtonHTMLAttributes, FC } from 'react';
import { StyledButton } from './button.styles';

export type ButtonProps = {
  color?: 'primary' | 'error' | string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: FC<ButtonProps> = ({ color = 'primary', ...props }) => (
  <StyledButton color={color} {...props} />
);
