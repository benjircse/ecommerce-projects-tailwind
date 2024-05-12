import React from 'react';
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faHeart, faSearch, faShieldHeart, faUser } from '@fortawesome/free-solid-svg-icons';
const Header = () => {
    return (
        <div>
            <header className='py-4 shadow-sm bg-white'>
             <div className="container flex justify-between items-center">
                {/* logo section */}
              <div className="logo">
               <h1 className='font-bold'><span className='text-primary '>BEN</span>GIR</h1>
              </div>

              {/* input section */}
              <div className="w-full max-w-xl relative flex ">
               <span className='text-gray-400 absolute text-lg left-4 top-2 '>
             <FontAwesomeIcon className='' icon={faSearch}></FontAwesomeIcon>
               </span>
               <input className='w-full border border-primary rounded-l-md border-r-0 h-10 pl-12 py- focus:outline-none' placeholder='search' type="text" />
                 <button className='bg-primary text-white border border-primary rounded-r-md px-4 hover:bg-transparent hover:text-primary transition'>search</button>
              </div>
               {/* icon section */}
              <div className="flex items-center space-x-4">
                  <a className='text-center text-gray-400 t hover:text-primary transition relative' href="">
                    <div className='text-2xl'>
                        <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
                    </div>
                    <div className='text-xs leading-3'>wish list</div>
                    <span className='w-4 h-4 rounded-full flex items-center absolute justify-center
                      bg-primary text-black text-xs right-0 top-0'>8</span>
                  </a>
                  <a className='text-center text-gray-400 t hover:text-primary transition relative' href="">
                    <div className='text-2xl'>
                        <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
                    </div>
                    <div className='text-xs leading-3'>Cart</div>
                    <span className='w-4 h-4 rounded-full flex items-center absolute justify-center
                      bg-primary text-black text-xs right-0 top-0'>8</span>
                  </a>
                  <a className='text-center text-gray-400 t hover:text-primary transition relative' href="">
                    <div className='text-2xl'>
                        <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                    </div>
                    <div className='text-xs leading-3'>Account</div>
                     
                  </a>
              </div>
             </div>
            </header>
        </div>
    );
};

export default Header;