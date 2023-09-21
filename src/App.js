import React from 'react';
import { Route,    Routes } from 'react-router-dom';
import Home from './Components/Home';
import Depts from './Components/Depts';
import Products from './Components/Products';
import Team from './Components/Team';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Nav from './Components/Nav';
import Slider from './Components/Slider';
import ProDet from './Components/ProDet';


const App = () =>
{
    return (
        <>
            <Nav />
            <Slider />
            <Routes>
                <Route  path='/' element={ <Home /> }></Route>
                <Route  path= 'Departments'  element={<Depts />}></Route> 
                <Route  path= 'Products'  element={<Products />}></Route>
                <Route  path= 'Team'  element={<Team/>}></Route>
                <Route  path= 'Contact'  element={<Contact/>}></Route> 
                <Route  path= 'ProDet/:id'  element={<ProDet/>}></Route> 
            </Routes>
            <Footer/> 
        </>
    );
}

export default App;
