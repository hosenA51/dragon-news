import React from 'react';
import { Link } from 'react-router-dom';
import userIcon from '../assets/user.png'

const Navbar = () => {
    return (
        <div className='flex justify-between items-center'>
            <div></div>
            <div className="nav space-x-5 text-lg font-normal text-gray-500">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="career">Career</Link>
            </div>
            <div className='login flex gap-2 items-center'>
                <div>
                    <img src={userIcon} alt="" />
                </div>
                    <button className='btn btn-neutral rounded-none px-8 text-xl font-semibold'>Login</button>
            </div>
        </div>
    );
};

export default Navbar;