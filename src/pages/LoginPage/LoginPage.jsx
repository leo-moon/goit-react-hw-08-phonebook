import { useDispatch } from 'react-redux';

import { login } from '../../redux/auth/auth-operations';

import LoginForm from '../../Modules/LoginForm/LoginForm';

const LoginPage = () => {
  const dispatch = useDispatch();

  const handleLogin = data => {
    dispatch(login(data));
  };

  return (
    <div>
      <h2>LoginPage</h2>
      <LoginForm onSubmit={handleLogin} />
    </div>
  );
};

export default LoginPage;
