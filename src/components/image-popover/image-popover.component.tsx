import { ChangeEvent, createRef, useState } from 'react';
import {
  AddImageIcon,
  AddImageButton,
  AddImageButtonIcon,
} from './image-popover.styles';
import { useRemirrorContext } from '@remirror/react';
import { checkIfImageExists } from '../../utils';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../tabs';
import { Popover, PopoverTrigger, PopoverContent } from '../popover';
import { Button } from '../button/button.component';
import { Input } from '../input';

export const ImagePopover = () => {
  const { manager } = useRemirrorContext();
  const [imageUrl, setImageUrl] = useState('');
  const [showInvalidImageAlert, setShowInvalidImageAlert] = useState(false);
  const btnRef = createRef<HTMLButtonElement>();

  const onAddImageClick = () => {
    manager.store.commands.insertImage({
      src: `https://robohash.org/1?set=set&size=180x180`,
    });
  };

  const onAddImageUrlClick = async () => {
    const exists = await checkIfImageExists(imageUrl);

    if (exists) {
      manager.store.commands.insertImage({
        src: imageUrl,
      });
      setImageUrl('');
    } else {
      setShowInvalidImageAlert(true);
    }
  };

  const onImageUrlInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setImageUrl(event.target.value);
    setShowInvalidImageAlert(false);
  };

  return (
    <>
      <div className='flex flex-wrap'>
        <div className='w-full text-center flex'>
          <Popover>
            <PopoverTrigger asChild>
              <AddImageButton
                type='button'
                ref={btnRef}
                className='self-center'
              >
                <AddImageButtonIcon />
              </AddImageButton>
            </PopoverTrigger>
            <PopoverContent>
              <Tabs defaultValue='tab1'>
                <TabsList>
                  <TabsTrigger value='tab1'>Embed Link</TabsTrigger>
                  {/* <TabsTrigger value='tab2'>Upload</TabsTrigger> */}
                </TabsList>
                <TabsContent value='tab1' className='p-2 border-0'>
                  <div className='flex'>
                    <Input
                      type='text'
                      placeholder='Image Url'
                      value={imageUrl}
                      className='grow'
                      onChange={onImageUrlInputChange}
                    />
                    <Button variant='link' onClick={onAddImageUrlClick}>
                      <AddImageIcon />
                    </Button>
                  </div>

                  {showInvalidImageAlert && (
                    <div className='text-red-500 text-sm mt-3 bold'>
                      Invalid image. Try a diferent link.
                    </div>
                  )}
                </TabsContent>
                <TabsContent value='tab2' className='text-center p-2 border-0'>
                  <Button onClick={onAddImageClick}>Upload Image</Button>
                </TabsContent>
              </Tabs>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </>
  );
};
