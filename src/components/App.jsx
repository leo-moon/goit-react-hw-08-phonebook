import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import UserRoutes from './UserRoutes';
import Phonebook from '../Modules/Phonebook/Phonebook';
import Navbar from '../Modules/Navbar/Navbar';
import { store } from '../redux/store';

export function App() {
  return (
    <Provider store={store}>
      <BrowserRouter basename="/goit-react-hw-08-phonebook/">
        <Navbar />
        <UserRoutes />
        {/* <Phonebook /> */}
      </BrowserRouter>
    </Provider>
  );
}
