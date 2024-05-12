import React from 'react';
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
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
              <div className="icon">
                  <a href="">hi</a>
                  <a href="">hi</a>
                  <a href="">hi</a>
              </div>
             </div>
            </header>
        </div>
    );
};

export default Header;