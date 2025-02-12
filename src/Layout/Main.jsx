import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Components/Shared/Navbar';
import Footer from './Components/Shared/Footer';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <div className='mt-40'>
                {/* <h2 className='text-center font-bold text-4xl mb-2 text-orange-400'>This is template main page</h2>
                <p className='text-center font-medium text-indigo-400'> <span className='text-red-400'> ⚠️Note: </span> You can customize this tamplate </p> */}
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;