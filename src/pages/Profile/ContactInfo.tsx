import React from 'react'
import SingleInfo from './SingleInfo'

function ContactInfo() {
    return (
        <div className='px-6 mt-4 py-6 shadow-[0px_4px_20px_0px_rgba(238,238,238,0.5)]'>
            <div className='flex justify-between'>
                <h2 className='text-xl font-semibold'>Contact Information</h2>
                <button className='bg-edit-button text-white font-semibold px-8 py-1 rounded-sm'>Edit</button>
            </div>
            <div className='mt-6  flex gap-4 '>
                <SingleInfo title={'Personal Email'} value={'John.smith@gmail.com '} />
                <SingleInfo title={'Mobile'} value={'011223344556'} />
            </div>
        </div>
    )
}

export default ContactInfo
