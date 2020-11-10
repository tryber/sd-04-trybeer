import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <>
    <Link to="/login">
      Login
    </Link>
    <Link to="/products">
      Products
    </Link>
    <Link to="/register">
      Register
    </Link>
  </>
);
export default Home;
