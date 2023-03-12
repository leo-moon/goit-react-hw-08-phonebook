import { nanoid } from 'nanoid';

const items = [
  {
    id: nanoid(),
    text: 'Home page',
    link: '/',
    private: false,
  },
  {
    id: nanoid(),
    text: 'Phonebook page',
    link: '/contacts',
    private: true,
  },
  //   {
  //     id: nanoid(),
  //     text: 'My Favorite contacts page',
  //     link: '/my-favorite-contacts',
  //   },
];

export default items;
