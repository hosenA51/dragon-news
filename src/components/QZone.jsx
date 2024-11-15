import React from 'react';
import swimming from '../assets/swimming.png'
import classImg from '../assets/class.png'
import playGround from '../assets/playground.png'

const QZone = () => {
    return (
        <div className='bg-[#F3F3F3] p-4 space-y-4'>
            <h2 className="font-semibold text-xl mb-3 text-[#403F3F]">Q-Zone</h2>
            <div className='border border-dashed border-gray-500 p-1'>
                <img className='w-full' src={swimming} alt="" />
            </div>
            <div className='border border-dashed border-gray-500 p-1'>
                <img className='w-full' src={classImg} alt="" />
            </div>
            <div className='border border-dashed border-gray-500 p-1'>
                <img className='w-full' src={playGround} alt="" />
            </div>
        </div>
    );
};

export default QZone;