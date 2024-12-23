import React from 'react'
import { GoHome } from "react-icons/go";
import { LiaDollarSignSolid } from "react-icons/lia";
import { IoGameControllerOutline } from "react-icons/io5";
import { HiMiniUserGroup } from "react-icons/hi2";
import { BsShopWindow } from "react-icons/bs";
import Link from 'next/link';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import Daily from '../components/daily';
import NavBar from '../components/navBar';

const Earn = () => {
  return (
    <div className='min-h-screen bg-black'>
     <div className='flex h-8 justify-around'>
        <Link href="/coin" className='relative'>
            <img src='/images/CoinCNB.png' alt='coin' className='z-1 w-14 absolute pmx:w-16'/>
            <div className='rounded-e-full text-white bg-orange-600 z-10  mt-4 pmx:mt-5
            ms-6 pmx:ms-8 text-[12px] pe-10 ps-6 py-[2px] flex-grow-1'>
                500,000,000
            </div>
        </Link>

        <div className='relative'>
            <img src='/images/CharcoalNB.png' alt='charcoal' className='w-14 absolute pmx:w-16'/>
            <div className='bg-orange-500 bg-opacity-10 px-3 py-[2px] pmx:mt-5
            rounded-e-full text-[12px] mt-4 ms-8 pmx:ms-10 ps-5 text-orange-600'>
                1,000+
            </div>
        </div>

        <div className='relative'>
            <img src='/images/EmberNB.png' alt='ember' className='w-14 h-14 absolute pmx:w-16 pmx:h-16'/>
            <div className='bg-orange-500 bg-opacity-10 px-3 py-[2px] pmx:mt-5
            rounded-e-full text-[12px] mt-4 ms-8 pmx:ms-10 ps-5 text-orange-600'>
                1,000+
            </div>
        </div>
     </div>

     <Tabs variant='unstyled' className='mt-20 pmx:mt-32'>
         <TabList className='bg-orange-400  bg-opacity-40'>
           <Tab _selected={{ color: 'white', bg: '#ea580c' }} className='w-[32%] font-bold uppercase ms-2 p-2' >
             <span className='text-white'> <LiaDollarSignSolid aria-hidden="true" className='text-[20px] ms-2 ' />
               <span className='text-[14px]'>daily</span>
             </span>
           </Tab>
           <Tab _selected={{ color: 'white', bg: '#ea580c' }} className='w-[32%] font-bold uppercase p-2' >
             <span className='text-white'> <IoGameControllerOutline aria-hidden="true" className='text-[20px] ms-4' />
               <span className='text-[14px]'>special</span>
             </span>
           </Tab>
           <Tab _selected={{ color: 'white', bg: '#ea580c' }} className='w-[32%] text-white font-bold uppercase p-2' >
              <span className='text-white'> <HiMiniUserGroup aria-hidden="true" className='text-[20px] ms-3' />
                 <span className='text-[14px]'>game</span>
              </span>
           </Tab>
         </TabList>
       
         <TabPanels>
           <TabPanel>
             <Daily />
           </TabPanel>
           <TabPanel>
             <p>empty!</p>
           </TabPanel>
           <TabPanel>
             <p>empty!</p> 
           </TabPanel>
         </TabPanels>
     </Tabs>

     <div className='bg-black flex p-[16.7px] uppercase fixed bottom-0 w-screen justify-between'>
       <div>
         <Link href="/" className='text-white'> <GoHome className='text-[20px] ms-3'/> home</Link>
       </div>
       <div className='underline decoration-orange-600 decoration-4 underline-offset-[18px]'>
         <Link href="/earn" className='text-white'> <LiaDollarSignSolid className='text-[20px] ms-3' /> earn</Link>
       </div>
       <div>
         <Link href="/play" className='text-white'> <IoGameControllerOutline className='text-[20px] ms-2' /> play</Link>
       </div>
       <div>
         <Link href="frens" className='text-white'> <HiMiniUserGroup className='text-[20px] ms-3' /> frens</Link>
       </div>
       <div>
         <Link href="/shop" className='text-white'> <BsShopWindow className='text-[20px] ms-2' /> shop</Link>
       </div>
     </div>
    </div>
  )
}

export default Earn

