import React from 'react';
import Depts from './Depts';
import Products from './Products';
import Contact from './Contact';
import Team from './Team';

const Home = () => {
    return (
        <>
            <Depts />
            <Products />
            <Team />
            <Contact/>
        </>
    );
}

export default Home;
