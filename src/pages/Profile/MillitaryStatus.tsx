import React from 'react'
import SingleInfo from './SingleInfo'
import attach from '../../assets/icon-attachment.svg'

function MillitaryStatus() {
    return (
        <div className='px-6 mt-4 py-6 shadow-[0px_4px_20px_0px_rgba(238,238,238,0.5)]'>
            <div className='flex justify-between'>
                <h2 className='text-xl font-semibold'>Military Status</h2>
                <button className='bg-edit-button text-white font-semibold px-8 py-1 rounded-sm'>Edit</button>
            </div>
            <div className='mt-6  flex gap-4 '>
                <SingleInfo title={'Require Travel Permit'} value={'Yes'} />
                <SingleInfo title={'Military Status'} value={'Exempted '} />
                <div className='w-56'>
                    <div className='text-breadcrumbs-grey text-sm mb-1'> Document</div>
                    <div className='px-2 py-1 bg-document-btn rounded-sm flex w-2/3 gap-2'>
                        <img src={attach} />
                        <p>filename1.docx</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MillitaryStatus
