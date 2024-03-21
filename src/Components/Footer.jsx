import React from 'react';
import { footerLinks } from '.';
import { copyrightSign } from '../assets/Images';

const Footer = () => {
    return (
        <footer className='w-full px-8 bg-[#0a0b0e]'>
            <div className='flex justify-between items-start gap-20 flex-wrap max-lg:flex-col py-3'>
                {footerLinks.map((section) => (
                    <div key={section}>
                        <h4 className='text-white text-2xl font-semibold mb-6'>{section.title}</h4>
                        <ul>
                            {section.links.map((link) => (
                                <li className='mt-3 text-white hover:text-gray-500'><a href={link.link}>{link.name}</a></li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
            <div className="flex justify-between mt-5 text-white-400 max-sm:flex-col max-sm:items-center text-white pb-5">
                <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
                    <img src={copyrightSign} alt="copyright" width={20} height={20} className="rounded-full m-0" />
                    <p>Copyright. All rights reserved.</p>
                </div>
                <p className="font-montserrat cursor-pointer">Terms & Conditions</p>
            </div>
        </footer>
    )
}

export default Footer