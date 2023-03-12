import { NavLink, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import NavbarAuth from './NavbarAuth/NavbarAuth';
import NavbarUser from './NavbarUser/NavbarUser';

import { isUserLogin } from '../../redux/auth/auth-selectors';

import items from './items';

import styles from './navbar.module.css';

const Navbar = () => {
  const isLogin = useSelector(isUserLogin);

  console.log(isLogin);

  const elements = items.map(({ id, text, link }) => (
    <li key={id}>
      <NavLink className={styles.link} to={link}>
        {text}
      </NavLink>
    </li>
  ));
  return (
    <div className={styles.navbar}>
      <Link to="/">Logo</Link>
      <ul className={styles.menu}>{elements}</ul>
      {!isLogin && <NavbarAuth />}
      {isLogin && <NavbarUser />}
    </div>
  );
};

export default Navbar;

// import { useSelector } from 'react-redux';

// import NavbarUser from './NavbarUser/NavbarUser';

// import { isUserLogin } from '../../redux/auth/auth-selectors';

// import items from './items';

//   const isLogin = useSelector(isUserLogin);

//   const elements = items.map(({ id, text, link }) => (
//     <li key={id}>
//       <NavLink className={styles.link} to={link}>
//         {text}
//       </NavLink>
//     </li>
//   ));

//   return (
//     <div className={styles.navbar}>
//       <NavLink to="/">Logo</NavLink>

//       <ul className={styles.menu}>{elements}</ul>

//       {!isLogin && <NavbarAuth />}
//       {isLogin && <NavbarUser />}
//     </div>
//   );
