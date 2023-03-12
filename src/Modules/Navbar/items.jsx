import { nanoid } from 'nanoid';

const items = [
  {
    id: nanoid(),
    text: 'Home page',
    link: '/',
  },
  {
    id: nanoid(),
    text: 'Phonebook page',
    link: '/contacts',
  },
//   {
//     id: nanoid(),
//     text: 'My Favorite contacts page',
//     link: '/my-favorite-contacts',
//   },

];

export default items;
