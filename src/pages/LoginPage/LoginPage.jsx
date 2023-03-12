import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { login } from '../../redux/auth/auth-operations';
import { isUserLogin } from '../../redux/auth/auth-selectors';

import LoginForm from '../../Modules/LoginForm/LoginForm';

const LoginPage = () => {
  const dispatch = useDispatch();
  const handleLogin = data => {
    dispatch(login(data));
  };

  const isLogin = useSelector(isUserLogin);

  if (isLogin) return <Navigate to="/contacts" />;

  return (
    <div>
      <h3>LoginPage</h3>

      <LoginForm onSubmit={handleLogin} />
    </div>
  );
};

export default LoginPage;
