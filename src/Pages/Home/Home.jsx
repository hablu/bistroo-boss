import React from 'react';
import Banner from './Banner/Banner';
import Order from './Order/Order';
import BistroBoss from './BistroBoss/BistroBoss';
import Menu from './Menu/Menu';

const Home = () => {
  return (
    <div>
      <Banner />
      <Order />
      <BistroBoss />
     <Menu />
    </div>
  );
};

export default Home;