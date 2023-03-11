import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import UserRoutes from './UserRoutes';
import Phonebook from '../Modules/Phonebook/Phonebook';
import NavbarAuth from '../Modules/Navbar/NavbarAuth/NavbarAuth';
import { store } from '../redux/store';

export function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <NavbarAuth />
        < UserRoutes/>
        <Phonebook />
      </BrowserRouter>
    </Provider>
  );
}
