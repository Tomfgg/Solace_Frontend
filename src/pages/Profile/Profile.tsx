import React, { useState } from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import UserCard from './UserCard'
import BasicInfo from './BasicInfo'
import ContactInfo from './ContactInfo'
import EmergencyContacts from './EmergencyContacts'
import AddressDetails from './AddressDetails'
import DrivingLicenseDetails from './DrivingLicenseDetails'
import MillitaryStatus from './MillitaryStatus'
import FinancialInformation from './FinancialInformation'
import BasicInfoForm from './BasicInfoForm'

function Profile() {
    const [info, setInfo] = useState('personal')
    const [edit, setEdit] = useState(false)
    return (
        <div className='flex pb-8'>
            <Sidebar />
            <div className='w-full'>
                <Navbar />
                <div className='flex mt-10 gap-4 items-start'>
                    <UserCard info={info} setInfo={setInfo} />
                    {
                        info === 'personal' ? <div className='block w-full pr-4'>
                            {!edit ? <BasicInfo setEdit={setEdit} /> : <BasicInfoForm setEdit={setEdit} />}
                            <ContactInfo />
                            <EmergencyContacts />
                            <AddressDetails />
                            <DrivingLicenseDetails />
                            <MillitaryStatus />
                        </div> : <FinancialInformation />
                    }
                </div>
            </div>
        </div>
    )
}

export default Profile
