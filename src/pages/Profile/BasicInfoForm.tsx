import React, { useEffect, useState } from 'react'
import { useQuery, useMutation } from '@apollo/client';
import { gql } from '@apollo/client';
import SingleInfoInput from './SingleInfoInput';



const UPDATE_USER = gql`
  mutation UpdateUser($data: UserInput!) {
    updateUser(data: $data)}
`;

interface User {
    firstName: string;
    fatherName: string;
    grandfatherName: string;
    familyName: string;
    localizedName: LocalizedName;
    nationalId: NationalId;
    nationalities: Nationality[];
    maritalStatus: MaritalStatus;
    dependants: number;
}

interface LocalizedName {
    firstName: string;
    fatherName: string;
    grandfatherName: string;
    familyName: string;
}

interface NationalId {
    idNumber: string;
    expiryDate: string;
}

interface Nationality {
    country: Country;
    countryId: number;
}

interface Country {
    id: number;
    name: string;
}

interface MaritalStatus {
    id: number;
    name: string;
}

const removeTypename = (obj) => {
    if (Array.isArray(obj)) {
        return obj.map(removeTypename);
    } else if (typeof obj === "object" && obj !== null) {
        const newObj = {};
        Object.keys(obj).forEach((key) => {
            if (key !== "__typename") {
                newObj[key] = removeTypename(obj[key]);
            }
        });
        return newObj;
    }
    return obj;
};

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
function BasicInfoForm({ setEdit }) {
    const { loading, error, data } = useQuery(USER_QUERY, {
        variables: { userId: 1 },
        // fetchPolicy: 'cache-first'
    });
    const [user, setUser] = useState<User | null>(null)


    useEffect(() => {
        console.log(data)
        if (data) {
            setUser(data.user);
        }
    }, [data]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    const [updateUser] = useMutation(UPDATE_USER);

    const handleSubmit = async () => {
        const userDataWithoutTypename = removeTypename(user);
        console.log(userDataWithoutTypename)
        await updateUser({
            variables: {
                data: userDataWithoutTypename,
            },
        });
        setEdit(false)
        window.location.reload();
    }

    if (!user) return <p>Loading...</p>;
    return (
        <div className='px-6 py-6 shadow-[0px_4px_20px_0px_rgba(238,238,238,0.5)]'>
            <div className='flex justify-between'>
                <h2 className='text-xl font-semibold'>Basic Information</h2>
                <button onClick={handleSubmit} className='bg-edit-button text-white font-semibold px-8 py-1 rounded-sm'>Save</button>
            </div>
            <div className='mt-6  flex gap-4 '>
                <SingleInfoInput title={'National ID Number'} value={user!.nationalId.idNumber} setUser={setUser} field={'nationalId'} nestedField={'idNumber'} user={user} />
                <SingleInfoInput title={'National ID Expiring Date'} value={user!.nationalId.expiryDate} setUser={setUser} user={user} field={'nationalId'} nestedField={'expiryDate'} />
                <SingleInfoInput title={'Title'} value={'Mr.'} setUser={setUser} user={user} />
            </div>
            <div className='mt-6  flex gap-4' >
                <SingleInfoInput title={'First Name'} value={user!.firstName} setUser={setUser} user={user} field={'firstName'} />
                <SingleInfoInput title={'Father Name'} value={user!.fatherName} setUser={setUser} user={user} field={'fatherName'} />
                <SingleInfoInput title={'Grand Father Name'} value={user!.grandfatherName} setUser={setUser} user={user} field={'grandfatherName'} />
                <SingleInfoInput title={'Family Name'} value={user!.familyName} setUser={setUser} user={user} field={'familyName'} />
            </div>
            <div className='mt-6  flex gap-4'>
                <SingleInfoInput title={'الأسم الأول '} value={user!.localizedName.firstName} setUser={setUser} user={user} field={'localizedName'} nestedField={'firstName'} />
                <SingleInfoInput title={'اسم الأب'} value={user!.localizedName.fatherName} setUser={setUser} user={user} field={'localizedName'} nestedField={'fatherName'} />
                <SingleInfoInput title={'اسم الجد'} value={user!.localizedName.grandfatherName} setUser={setUser} user={user} field={'localizedName'} nestedField={'grandfatherName'} />
                <SingleInfoInput title={'اللقب / اسم العائلة'} value={user!.localizedName.familyName} setUser={setUser} user={user} field={'localizedName'} nestedField={'familyName'} />
            </div>
            <div className='mt-6  flex gap-4'>
                <SingleInfoInput title={'Date of birth'} value={'01 / 04 / 1980'} setUser={setUser} user={user} />
                <SingleInfoInput title={'Gender'} value={'Male'} setUser={setUser} user={user} />
                <SingleInfoInput title={'Nationality'} value={user!.nationalities[0].country.name} setUser={setUser} user={user} />
                <SingleInfoInput title={'Additional Nationality '} value={user!.nationalities[1].country.name} setUser={setUser} user={user} />
            </div>
            <div className='mt-6  flex gap-4'>
                <SingleInfoInput title={'Passport No.'} value={'A135464'} setUser={setUser} user={user} />
                <SingleInfoInput title={'Passport Issue Date'} value={'01 / 04 / 1980'} setUser={setUser} user={user} />
                <SingleInfoInput title={'Passport Expiry Date'} value={'01 / 04 / 1980'} setUser={setUser} user={user} />
            </div>
            <div className='mt-6  flex gap-4'>
                <SingleInfoInput title={'Marital Status'} value={user!.maritalStatus.name} setUser={setUser} user={user} field={'maritalStatus'} nestedField={'name'} />
                {/* <div className='w-56'>
                    <div className='text-breadcrumbs-grey text-sm mb-1'> Dependencies</div>
                    <div className='font-semibold'>0 </div>
                </div> */}
                <SingleInfoInput title={'Dependencies'} value={user!.dependants} setUser={setUser} user={user} field={'dependants'} />


            </div>
        </div>
    )
}

export default BasicInfoForm
