import React from 'react'
import SingleInfo from './SingleInfo'

function AddressDetails() {
    return (
        <div className='px-6 mt-4 py-6 shadow-[0px_4px_20px_0px_rgba(238,238,238,0.5)]'>
            <div className='flex justify-between'>
                <h2 className='text-xl font-semibold'>Address Details</h2>
                <button className='bg-edit-button text-white font-semibold px-8 py-1 rounded-sm'>Edit</button>
            </div>
            <div className='mt-6  flex gap-4 '>
                <SingleInfo title={'Country'} value={'Egypt'} />
                <SingleInfo title={'City'} value={'Cairo'} />
                <SingleInfo title={'Postal Code'} value={'11728'} />
            </div>
            <div className='mt-6  flex gap-4 '>
                <SingleInfo title={'Building'} value={'7'} />
                <SingleInfo title={'Street'} value={'Street 127 '} />
                <SingleInfo title={'Floor No.'} value={'7'} />
                <SingleInfo title={'Apartment'} value={'72'} />
            </div>
        </div>
    )
}

export default AddressDetails
