import React from 'react'
import Logo from '../../assets/PreformlyLogo.svg'
import Logo1 from '../../assets/Icon (1).svg'
import Logo2 from '../../assets/Icon (2).svg'
import Logo3 from '../../assets/Icon (3).svg'
import Logo4 from '../../assets/Icon (4).svg'

function Sidebar() {
    return (
        <div className='bg-aside-color px-6 h-screen border-r border-r-aside-border-color'>
            <img src={Logo} alt="logo" className='mt-8 mx-auto cursor-pointer' />
            <div className='bg-hov-button rounded-2xl p-3 flex cursor-pointer justify-center align-middle  w-12 h-12 mx-auto mt-8'><img src={Logo1} alt="logo" className='' /></div>
            <img src={Logo2} alt="logo" className='mt-8 mx-auto cursor-pointer' />
            <img src={Logo3} alt="logo" className='mt-8 mx-auto cursor-pointer' />
            <img src={Logo4} alt="logo" className='mt-8 mx-auto cursor-pointer' />
        </div>
    )
}

export default Sidebar
