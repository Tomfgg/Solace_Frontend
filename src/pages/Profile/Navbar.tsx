import React from 'react'
import arrow from '../../assets/arrow-right.svg'
import pic from '../../assets/Rectangle 1393.svg'
import mail from '../../assets/Icon (7).svg'
import settings from '../../assets/Icon (5).svg'
import notification from '../../assets/Icon (6).svg'

function Navbar() {
    return (
        <div className='flex mt-3 justify-between px-6'>
            <div>
                <h2 className='text-2xl font-semibold'>John Smith Profile</h2>
                <div className='flex align-bottom gap-2 mt-2 text-sm text-breadcrumbs-grey'>
                    <p>Dashboard</p>
                    <img className='relative top-[1.1px]' src={arrow} />
                    <p>HR manage</p>
                    <img className='relative top-[1.1px]' src={arrow} />
                    <p>Employees</p>
                    <img className='relative top-[1.1px]' src={arrow} />
                    <p className='text-hov-button font-semibold'>John Smith Profile</p>
                </div>
            </div>
            <div className='flex gap-7'>
                <div className='flex align-middle relative'>
                    <img src={notification} className='w-6' />
                    <div className='w-3 h-3 rounded-full bg-red-600 absolute top-[14px] left-3 '></div>
                </div>

                <img src={mail} className='w-6' />
                <img src={settings} className='w-6' />
                <img src={pic} className='w-10' />
            </div>
        </div>
    )
}

export default Navbar
