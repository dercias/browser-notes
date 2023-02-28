import { useRef, InputHTMLAttributes, FC } from 'react';
import {
  ClearButton,
  CloseIcon,
  Input,
  InputContainer,
} from './search-input.styles';

type SearchInputProps = {
  onClear?: (value?: string) => void;
} & InputHTMLAttributes<HTMLInputElement>;

export const SearchInput: FC<SearchInputProps> = ({
  type = 'text',
  value,
  onClear = () => {},
  ...props
}) => {
  const ref = useRef<HTMLInputElement>(null);

  const onClearClick = () => onClear(ref?.current?.value);

  return (
    <InputContainer>
      <Input ref={ref} type={type} value={value} {...props} />
      {value && (
        <ClearButton onClick={onClearClick}>
          <CloseIcon />
        </ClearButton>
      )}
    </InputContainer>
  );
};
