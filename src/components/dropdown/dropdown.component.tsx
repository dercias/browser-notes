import {
  ButtonHTMLAttributes,
  FC,
  PropsWithChildren,
  createRef,
  useState,
} from 'react';
import {
  DropdownButton,
  DropdownIcon,
  DropdownList,
  DropdownOptionButton,
} from './dropdown.styles';
import { createPopper } from '@popperjs/core';

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
  const [dropdownPopoverShow, setDropdownPopoverShow] = useState(false);

  const btnDropdownRef = createRef<HTMLButtonElement>();
  const popoverDropdownRef = createRef<HTMLUListElement>();

  const onButtonClick = () => {
    if (dropdownPopoverShow) {
      createPopper(btnDropdownRef.current!, popoverDropdownRef.current!, {
        placement: 'bottom-start',
      });
    }
    setDropdownPopoverShow(!dropdownPopoverShow);
  };

  return (
    <>
      <div className='flex justify-center'>
        <DropdownButton
          type='button'
          ref={btnDropdownRef}
          onClick={onButtonClick}
        >
          <DropdownIcon />
        </DropdownButton>
        <DropdownList
          ref={popoverDropdownRef}
          className={dropdownPopoverShow ? 'block ' : 'hidden '}
        >
          {children}
        </DropdownList>
      </div>
    </>
  );
};
