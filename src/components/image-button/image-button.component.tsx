import { createRef, useState } from 'react';
import { createPopper } from '@popperjs/core';
import {
  PopoverButton,
  PopoverButtonIcon,
  PopoverWrapper,
} from './image-button.styles';
import { useRemirrorContext } from '@remirror/react';

export const ImageButton = () => {
  const { manager } = useRemirrorContext();

  const [popoverShow, setPopoverShow] = useState(false);
  const btnRef = createRef<HTMLButtonElement>();
  const popoverRef = createRef<HTMLDivElement>();

  const onShowPopoverButtonClick = () => {
    if (popoverShow) {
      createPopper(btnRef.current!, popoverRef.current!, {
        placement: 'bottom',
      });
    }
    setPopoverShow(!popoverShow);
  };

  const onAddImageClick = () => {
    manager.store.commands.insertImage({
      src: `https://robohash.org/1?set=set&size=180x180`,
    });
  };

  return (
    <>
      <div className='flex flex-wrap'>
        <div className='w-full text-center flex'>
          <PopoverButton
            type='button'
            onClick={onShowPopoverButtonClick}
            ref={btnRef}
            className='self-center'
          >
            <PopoverButtonIcon />
          </PopoverButton>
          <PopoverWrapper
            ref={popoverRef}
            className={(popoverShow ? 'block ' : 'hidden ') + 'self-top'}
          >
            <button onClick={onAddImageClick}>Add image</button>
            <br />
            <button onClick={onAddImageClick}>Add image</button>
          </PopoverWrapper>
        </div>
      </div>
    </>
  );
};
