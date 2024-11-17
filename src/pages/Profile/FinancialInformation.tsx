import React from 'react'
import SingleInfo from './SingleInfo'

function FinancialInformation() {
    return (
        <div className='px-6 mt-4 py-6 shadow-[0px_4px_20px_0px_rgba(238,238,238,0.5)] block w-full mr-4'>
            <div className='flex justify-between'>
                <h2 className='text-xl font-semibold'>Bank Information</h2>
                <button className='bg-edit-button text-white font-semibold px-8 py-1 rounded-sm'>Edit</button>
            </div>
            <div className='mt-6  flex gap-4 '>
                <SingleInfo title={'Bank Name'} value={'CIB'} />
                <SingleInfo title={'IBAN'} value={'12346546413216446'} />
            </div>
        </div>
    )
}

export default FinancialInformation
