import { useDispatch } from 'react-redux';

import { signup } from '../../redux/auth/auth-operations';

import RegisterForm from '../../Modules/RegisterForm/RegisterForm';

const RegisterPage = () => {
  const dispatch = useDispatch();

  const handleSignup = data => {
    dispatch(signup(data));
  };

  return (
    <>
      <h2>RegisterPage</h2>
      <RegisterForm onSubmit={handleSignup} />
    </>
  );
};

export default RegisterPage;
