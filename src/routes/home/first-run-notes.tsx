import { nanoid } from '@reduxjs/toolkit';

const welcomeContent = `
# Heading 1

Lorem ipsum **dolor sit amet**. Sit repudiandae quos aut asperiores facere et distinctio repellendus.

## Heading 2

Est rerum _molestias sed laboriosam_ tempora et ~~exercitationem eius~~.

### Heading 3

#### Heading 4

##### Heading 5

1. First ordered list item
2. Another item

- Unordered sub-list.

1. Actual numbers don't matter, just that it's a number
1. Ordered sub-list
1. And another item.

`;

export const firstRunNotes = [
  {
    id: nanoid(),
    content: welcomeContent,
    title: 'Hello world!',
    starred: true,
  },
  {
    id: nanoid(),
    content: welcomeContent,
    title: 'A second note',
  },
];
