import React from 'react'

function Input({ value, setUser, field, user, nestedField }) {
    if (nestedField) return (
        <input onChange={(e) => setUser({
            ...user, [field]: {
                ...user[field], // Preserve other properties in the nested object
                [nestedField]: e.target.value, // Update the specific nested property
            },
        })} className='font-semibold border-gray-300 border rounded md px-2 py-1' value={value} />
    )
    else if (!field) return (
        <input className='font-semibold border-gray-300 border rounded md px-2 py-1' value={value} />
    )
    else return (
        <input onChange={(e) => setUser({ ...user, [field]: e.target.value })} className='font-semibold border-gray-300 border rounded md px-2 py-1' value={value} />
    )
}

export default Input
