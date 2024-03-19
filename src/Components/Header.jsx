import React, { useState } from 'react';
import logo from './../assets/Images/logo.svg';
import avatar from './../assets/Images/avatar.png';
import { HiDotsVertical } from 'react-icons/hi';
import { Menu } from './index.js';
import HeaderItems from './HeaderItems.jsx';

const Header = () => {
    const [toggle, setToggle] = useState(false);
    return (
        <div className='flex items-center justify-between p-2'>
            <div className='flex gap-8 items-center'>
                <img src={logo} alt="logo" className='w-[80px] md:w-[115px] object-contain' />
                <div className='hidden md:flex gap-8'>
                    {Menu.map((item) => (
                        <HeaderItems name={item.name} Icon={item.icon} />
                    ))}
                </div>
                <div className='flex items-center md:hidden gap-5'>
                    {Menu.map((item, index) => index < 3 && (
                        <HeaderItems key={index} name={''} Icon={item.icon} />
                    ))}
                    <div className='md:hidden' onClick={()=>setToggle(!toggle)}>
                        <HeaderItems name={''} Icon={HiDotsVertical} />
                        {toggle ? <div className='absolute mt-3 bg-[#121212] border-[1px] border-gray-700 px-5 py-4'>
                            {Menu.map((item, index) => index > 2 && (
                                <HeaderItems name={item.name} Icon={item.icon} />
                            ))}
                        </div> : null}
                    </div>
                </div>
            </div>
            <img src={avatar} alt="avatar" className='w-[40px] h-[40px] rounded-full' />
        </div>
    )
}

export default Header