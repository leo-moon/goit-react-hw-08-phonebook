import { Link } from 'react-router-dom';

import NavbarAuth from './NavbarAuth/NavbarAuth';

import styles from './navbar.module.css';



const Navbar = () => {
    return (
      <div className={styles.navbar}>
        <div className={styles.container}>
          <div className={styles.navbarRow}>
            <Link to="/">Logo</Link>
            <NavbarAuth />
          </div>
        </div>
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