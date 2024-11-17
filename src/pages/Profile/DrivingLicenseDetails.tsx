import React from 'react'
import SingleInfo from './SingleInfo'

function DrivingLicenseDetails() {
    return (
        <div className='px-6 mt-4 py-6 shadow-[0px_4px_20px_0px_rgba(238,238,238,0.5)]'>
            <div className='flex justify-between'>
                <h2 className='text-xl font-semibold'>Driving License Details</h2>
                <button className='bg-edit-button text-white font-semibold px-8 py-1 rounded-sm'>Edit</button>
            </div>
            <div className='mt-6  flex gap-4 '>
                <SingleInfo title={'Driving License'} value={'Yes'} />
                <SingleInfo title={'Driving License Type'} value={'C1E'} />
                <SingleInfo title={'Driving License expiry date'} value={'01 / 04 / 2025'} />
            </div>
        </div>
    )
}

export default DrivingLicenseDetails
