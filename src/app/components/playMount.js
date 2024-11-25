import React from 'react'
import { MdOutlineTimer } from "react-icons/md";
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'

const PlayMount = () => {
  return (
    <div className='mt-4'>
        <div className='flex space-x-3 spm:space-x-4 p4m:space-x-5'>
        <div className='rounded-xl p-3 w-[170px] pmx:w-[190px] spm:w-[175px]' style={{ background: "linear-gradient(to bottom, #96B4B4, #414E4E)" }}>
            <div className=''>
                <img src='/images/frog2.png' alt='fire creature' className='rounded-md h-[98px] w-[150px] pmx:h-[130px] pmx:w-[170px] blur-sm spm:h-[130px] spm:w-[170px]' />
            </div>
            <div className='absolute -mt-24 ms-6 pmx:-mt-28 pmx:ms-9 spm:-mt-28 spm:ms-8'>
                 <CircularProgress value={97} color='yellow' trackColor='#000003' thickness='5px' size='90px' label="30%" >
                 <CircularProgressLabel fontSize="14px">   
                  <MdOutlineTimer className='text-[22px] ms-[34px]' />
                    05:52:30
                 </CircularProgressLabel>
                 </CircularProgress>
            </div>
        <div className='text-center text-orange-600 font-bold uppercase pmx:text-[20px] pmx:mb-1 spm:text-[20px] spm:mb-1'>
            <p>fire</p>
            <p className='-mt-[8px]'>creature</p>
        </div>
        <div className='text-center uppercase bg-gray-500 bg-opacity-45 w-[60px] py-[2px] rounded-full text-[9px] ms-[43px] mb-2 pmx:ms-[52px] pmx:text-[12px] spm:ms-[43px] spm:text-[12px]'>
            owned
        </div>
        <div className='flex uppercase text-[11px] pmx:text-[13px] font-bold border-t-2 border-white'>
            <span className='text-orange-600 me-5 mt-1'>pwr 1/ 10</span> 
                <span className='border-e-2 border-white me-5 h-4 mt-1'></span>
                <img src='/images/targetNB.png' alt='target' className='w-5 h-5 mt-1 me-1' />
            <span className='mt-[5px] '>
                20k
            </span> 
        </div>
        </div>

        <div className='rounded-xl p-3 w-[170px] pmx:w-[190px] spm:w-[175px]' style={{ background: "linear-gradient(to bottom, #96B4B4, #414E4E)" }}>
              <div className='rounded-md'>
                  <img src='/images/ghost.png' alt='shadow creature' className='rounded-md h-[98px] pmx:h-[130px] w-[150px] pmx:w-[170px] blur-sm spm:h-[130px] spm:w-[170px]' />
              </div>
              <div className='absolute -mt-24 ms-6 pmx:-mt-28 pmx:ms-9 spm:-mt-28 spm:ms-8'>
                 <CircularProgress value={97} color='yellow' trackColor='#000003' thickness='5px' size='90px' label="30%" >
                 <CircularProgressLabel fontSize="14px">   
                  <MdOutlineTimer className='text-[22px] ms-[34px]' />
                    05:52:30
                 </CircularProgressLabel>
                 </CircularProgress>
              </div>
        <div className='text-center text-orange-600 font-bold uppercase pmx:text-[20px] pmx:mb-1 spm:text-[20px] spm:mb-1'>
            <p>shadow</p>
            <p className='-mt-[8px]'>creature</p>
        </div>
        <div className='text-center uppercase bg-gray-500 bg-opacity-45 w-[95px] py-[2px] rounded-full text-[9px] ms-6 mb-2 pmx:ms-[25px] pmx:text-[12px] pmx:w-[120px] spm:ms-[16px] spm:w-[120px] spm:text-[12px]'>
            lvl 10 required
        </div>
        <div className='flex uppercase text-[11px] pmx:text-[13px] font-bold border-t-2 border-white'>
            <span className='text-orange-600 me-5 mt-1'>pwr 1/ 10</span> 
                <span className='border-e-2 border-white me-5 h-4 mt-1'></span>
                <img src='/images/targetNB.png' alt='target' className='w-5 h-5 mt-1 me-1' />
            <span className='mt-[5px] '>
                20k
            </span>
          </div>
        </div>
        </div>

        <div className='rounded-xl p-3 w-[170px] pmx:w-[190px] mt-2 spm:w-[175px]' style={{ background: "linear-gradient(to bottom, #96B4B4, #414E4E)" }}>
            <div className=''>
                <img src='/images/sojo.png' alt='lightning creature' className='rounded-md h-[98px] w-[150px] pmx:h-[130px] pmx:w-[170px] blur-sm spm:h-[130px] spm:w-[170px]' />
            </div>
            <div className='absolute -mt-24 ms-6 pmx:-mt-28 pmx:ms-9 spm:-mt-28 spm:ms-8'>
                 <CircularProgress value={97} color='yellow' trackColor='#000003' thickness='5px' size='90px' label="30%" >
                 <CircularProgressLabel fontSize="14px">   
                  <MdOutlineTimer className='text-[22px] ms-[34px]' />
                    05:52:30
                 </CircularProgressLabel>
                 </CircularProgress>
            </div>
        <div className='text-center text-orange-600 font-bold uppercase pmx:text-[20px] pmx:mb-1 spm:text-[20px] spm:mb-1'>
            <p>lightning</p>
            <p className='-mt-[8px]'>creature</p>
        </div>
        <div className='text-center uppercase bg-gray-500 bg-opacity-45 w-[60px] py-[2px] rounded-full text-[9px] ms-[43px] mb-2 pmx:ms-[52px] pmx:text-[12px] spm:ms-[43px] spm:text-[12px]'>
            owned
        </div>
        <div className='flex uppercase text-[11px] pmx:text-[13px] font-bold border-t-2 border-white'>
            <span className='text-orange-600 me-5 mt-1'>pwr 1/ 10</span> 
                <span className='border-e-2 border-white me-5 h-4 mt-1'></span>
                <img src='/images/targetNB.png' alt='target' className='w-5 h-5 mt-1 me-1' />
            <span className='mt-[5px] '>
                20k
            </span> 
        </div>
        </div>
    </div>
  )
}

export default PlayMount