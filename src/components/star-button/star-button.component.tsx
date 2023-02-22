import { ButtonHTMLAttributes, FC } from 'react';
import { OutlineStar, Star, StyledButton } from './star-button.styles';

export type StarButtonProps = {
  checked?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const StarButton: FC<StarButtonProps> = ({
  checked,
  children,
  ...props
}) => {
  return (
    <StyledButton {...props}>
      {checked ? <Star /> : <OutlineStar className='' />}
      {children}
    </StyledButton>
  );
};
