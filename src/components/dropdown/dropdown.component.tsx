import { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react';
import {
  DropdownButton,
  DropdownIcon,
  DropdownList,
  DropdownOptionButton,
} from './dropdown.styles';

export const DropdownOption: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  onClick = () => {},
  children,
}) => {
  return (
    <li>
      <DropdownOptionButton data-te-dropdown-item-ref onClick={onClick}>
        {children}
      </DropdownOptionButton>
    </li>
  );
};

export const Dropdown: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className='flex justify-center'>
      <div>
        <div className='relative' data-te-dropdown-ref>
          <DropdownButton
            type='button'
            id='dropdownMenuButton1'
            data-te-dropdown-toggle-ref
            aria-expanded='false'
            data-te-ripple-init
            data-te-ripple-color='light'
          >
            <DropdownIcon />
          </DropdownButton>
          <DropdownList
            aria-labelledby='dropdownMenuButton1'
            data-te-dropdown-menu-ref
          >
            {children}
          </DropdownList>
        </div>
      </div>
    </div>
  );
};
