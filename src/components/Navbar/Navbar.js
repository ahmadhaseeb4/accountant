import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as BsIcons from 'react-icons/bs';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

export const SideBarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiTwotoneHome />,
    active: true,
  },
  {
    title: 'Customer',
    path: '/customers',
    icon: <BsIcons.BsFillPersonLinesFill />,
    active: false,
  },
];

function Navbar() {
  return (
    SideBarData.map((item) => (
      <Link to={item.path} className={styles.nav_item} key={item.id}>
        <span className={styles.nav_item_icon}>{item.icon}</span>
        <span className={styles.nav_item_title}>{item.title}</span>
      </Link>
    ))
  );
}
export default Navbar;
