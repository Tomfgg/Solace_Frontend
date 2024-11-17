import React from 'react'
import SingleInfo from './SingleInfo'
import { useQuery } from '@apollo/client';
// import USER_QUERY from '../../utils/UserQuery';
import { gql } from '@apollo/client';

const USER_QUERY = gql`
  query User($userId: Int!) {
    user(id: $userId) {
      firstName
      fatherName
      grandfatherName
      familyName
      localizedName {
        firstName
        fatherName
        grandfatherName
        familyName
      }
      nationalId {
        idNumber
        expiryDate
      }
      nationalities {
        country {
          id
          name
        }
        countryId
      }
      maritalStatus {
        id
        name
      }
      dependants
    }
  }
`;

function BasicInfo({ setEdit }) {
  const { loading, error, data } = useQuery(USER_QUERY, {
    variables: { userId: 1 },
    // fetchPolicy: 'no-cache'
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const user = data.user;
  return (
    <div className='px-6 py-6 shadow-[0px_4px_20px_0px_rgba(238,238,238,0.5)]'>
      <div className='flex justify-between'>
        <h2 className='text-xl font-semibold'>Basic Information</h2>
        <button onClick={() => setEdit(true)} className='bg-edit-button text-white font-semibold px-8 py-1 rounded-sm'>Edit</button>
      </div>
      <div className='mt-6  flex gap-4 '>
        <SingleInfo title={'National ID Number'} value={user.nationalId.idNumber} />
        <SingleInfo title={'National ID Expiring Date'} value={user.nationalId.expiryDate} />
        <SingleInfo title={'Title'} value={'Mr.'} />
      </div>
      <div className='mt-6  flex gap-4' >
        <SingleInfo title={'First Name'} value={user.firstName} />
        <SingleInfo title={'Father Name'} value={user.fatherName} />
        <SingleInfo title={'Grand Father Name'} value={user.grandfatherName} />
        <SingleInfo title={'Family Name'} value={user.familyName} />
      </div>
      <div className='mt-6  flex gap-4'>
        <SingleInfo title={'الأسم الأول '} value={user.localizedName.firstName} />
        <SingleInfo title={'اسم الأب'} value={user.localizedName.fatherName} />
        <SingleInfo title={'اسم الجد'} value={user.localizedName.grandfatherName} />
        <SingleInfo title={'اللقب / اسم العائلة'} value={user.localizedName.familyName} />
      </div>
      <div className='mt-6  flex gap-4'>
        <SingleInfo title={'Date of birth'} value={'01 / 04 / 1980'} />
        <SingleInfo title={'Gender'} value={'Male'} />
        <SingleInfo title={'Nationality'} value={user.nationalities[0].country.name} />
        <SingleInfo title={'Additional Nationality '} value={user.nationalities[1].country.name} />
      </div>
      <div className='mt-6  flex gap-4'>
        <SingleInfo title={'Passport No.'} value={'A135464'} />
        <SingleInfo title={'Passport Issue Date'} value={'01 / 04 / 1980'} />
        <SingleInfo title={'Passport Expiry Date'} value={'01 / 04 / 1980'} />
      </div>
      <div className='mt-6  flex gap-4'>
        <SingleInfo title={'Marital Status'} value={user.maritalStatus.name} />
        {/* <div className='w-56'>
                    <div className='text-breadcrumbs-grey text-sm mb-1'> Dependencies</div>
                    <div className='font-semibold'>0 </div>
                </div> */}
        <SingleInfo title={'Dependencies'} value={user.dependants} />


      </div>
    </div>
  )
}

export default BasicInfo
