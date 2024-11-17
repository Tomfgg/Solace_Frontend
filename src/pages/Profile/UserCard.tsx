import React from 'react'
import pic from '../../assets/Subtract.svg'
import camera from '../../assets/camera.svg'


function UserCard({ info, setInfo }) {
    return (
        <div className='ml-5 px-5 py-10 w-80 bg-aside-color rounded-2xl shadow-[0px_4px_20px_0px_rgba(238,238,238,0.5)] '>
            <div className='relative'>
                <img className='w-28' src={pic} />
                <div className='absolute bg-camera p-1 rounded-full top-[85px] left-[85px]'>
                    <img src={camera} />
                </div>
            </div>
            <h2 className='text-name-in-card mt-3 font-semibold'>John Smith</h2>
            <p className='text-breadcrumbs-grey'>Senior Product Manager</p>
            <div className=' border-t my-5'></div>
            <button onClick={() => setInfo('personal')} className={`block w-full py-3 px-3 rounded-lg text-left ${info === 'personal' ? 'bg-info-type-bgcolor text-info-type-color font-semibold' : ''}`}>Personal Information</button>
            <button onClick={() => setInfo('financial')} className={`block w-full py-3 px-3 rounded-lg text-left ${info === 'financial' ? 'bg-info-type-bgcolor text-info-type-color font-semibold' : ''}`}>Financial Information</button>
        </div>
    )
}

export default UserCard
