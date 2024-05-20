import React from 'react';
import './Home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaravan } from '@fortawesome/free-solid-svg-icons/faCaravan';
import logo1 from '../../images/badroom.png'
import logo2 from '../../images/Mattress.png'
import logo3 from '../../images/office.png'
import logo4 from '../../images/outdoor.png'
import logo5 from '../../images/sofa1.jpeg'
const Home = () => {
    return (
        <div className='mx-auto'>
              <div className='background-img flex relative'>
                <div className="container ml-28">
                    <h2 className='ml-28 text-6xl mt-20 text-primary'>hello world</h2>
                    <p className='ml-28 mt-9 text-2xl  text-orange-600'>Bangladesh is a small cuntry off the world</p>
                    <button className='bg-primary rounded-md mt-6 hover:bg-orange-500 transition text-white p-2 border-none ml-28'>shop now</button>
                </div>
              </div>

              {/* single feature start */}
               <div className=' py-16 w-6/12 grid grid-cols-3 gap-6 justify-center mx-auto'>
                 <div className='flex border border-primary rounded-sm p-4'>
                  <span className='text-primary'><FontAwesomeIcon icon={faCaravan}></FontAwesomeIcon></span>
                  <span>
                    <h2>Free shopping</h2>
                    <p>order over $ 200</p>
                  </span>
                 </div>
                 <div className='flex border border-primary rounded-sm p-4'>
                  <span className='text-primary'><FontAwesomeIcon icon={faCaravan}></FontAwesomeIcon></span>
                  <span>
                    <h2>Free shopping</h2>
                    <p>order over $ 200</p>
                  </span>
                 </div>
                 <div className='flex border border-primary rounded-sm p-4'>
                  <span className='text-primary'><FontAwesomeIcon icon={faCaravan}></FontAwesomeIcon></span>
                  <span>
                    <h2>Free shopping</h2>
                    <p>order over $ 200</p>
                  </span>
                 </div>
                 
               </div>
               {/* shop Category */}
               <h2 className='text-black text-12xl font-medium font-roboto ml-80 p-4'>SHOP BY CATEGORY</h2>
               <div className=" w-6/12 grid grid-cols-3 gap-6 justify-center mx-auto">
                    <div className=' relative rounded-sm overflow-hidden'>
                      <span><img className='w-full' src={logo1} alt="" /></span>
                       <span className='bg-black bg-opacity-40 absolute inset-0 flex items-center justify-center text-white font-roboto font-xl font-medium'>Bedroom</span>
                    </div>
                    <div className='w-52 relative rounded-sm overflow-hidden'>
                      <span><img className='' src={logo2} alt="" /></span>
                      <span className='bg-black bg-opacity-40 absolute text-white font-roboto font-medium inset-0 flex items-center justify-center'>Mattress</span>
                    </div>
                    <div className='w-52 relative rounded-sm overflow-hidden'>
                      <span><img className='' src={logo3} alt="" /></span>
                      <span className='bg-black bg-opacity-40 absolute text-white font-roboto font-medium inset-0 flex items-center justify-center'>Office</span>
                    </div>
                    <div className='w-52 relative rounded-sm overflow-hidden'>
                      <span><img className='' src={logo4} alt="" /></span>
                      <span className='bg-black bg-opacity-40 absolute text-white font-roboto font-medium inset-0 flex items-center justify-center'>outdoor</span>
                    </div>
                    <div className='w-52 relative rounded-sm overflow-hidden'>
                      <span><img className='' src={logo5} alt="" /></span>
                      <span className='bg-black bg-opacity-40 absolute text-white font-roboto font-medium inset-0 flex items-center justify-center'>Sofa</span>
                    </div>
                    <div className='w-52 relative rounded-sm overflow-hidden'>
                      <span><img className='' src={logo2} alt="" /></span>
                      <span className='bg-black bg-opacity-40 absolute text-white font-roboto font-medium inset-0 flex items-center justify-center'>Mattress</span>
                    </div>

                  </div>
         </div>
    );
};

export default Home;

