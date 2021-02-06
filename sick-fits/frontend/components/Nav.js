import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import NavStyles from './styles/NavStyles';

function Nav(props) {
  return (
    <NavStyles>
      <Link href="/products">Products</Link>
      <Link href="/sell">Sell</Link>
      <Link href="/orders">Orders</Link>
      <Link href="/account">Account</Link>
    </NavStyles>
  );
}

Nav.propTypes = {};

export default Nav;
