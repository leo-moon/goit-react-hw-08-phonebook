import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { signup } from '../../redux/auth/auth-operations';
import { isUserLogin } from '../../redux/auth/auth-selectors';

import RegisterForm from '../../Modules/RegisterForm/RegisterForm';

const RegisterPage = () => {
  const dispatch = useDispatch();
  const handleSignup = data => {
    dispatch(signup(data));
  };

  const isLogin = useSelector(isUserLogin);

  if (isLogin) return <Navigate to="/my-contacts" />;

  return (
    <>
      <h3>RegisterPage</h3>

      <RegisterForm onSubmit={handleSignup} />
    </>
  );
};

export default RegisterPage;
