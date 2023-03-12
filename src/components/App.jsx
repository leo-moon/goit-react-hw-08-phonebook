import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import UserRoutes from './UserRoutes';
import Navbar from '../Modules/Navbar/Navbar';
import { store } from '../redux/store';

export function App() {
  return (
    <Provider store={store}>
      <BrowserRouter basename="/">
        <Navbar />
        <UserRoutes />
      </BrowserRouter>
    </Provider>
  );
}
