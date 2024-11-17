import React from 'react'
import Title from './Title'
import Input from './Input'

function SingleInfoInput({ title, value, setUser, field = '', nestedField = '', user }) {
    return (
        <div className='w-56'>
            <Title>{title}</Title>
            <Input value={value} setUser={setUser} field={field} user={user} nestedField={nestedField} />
        </div>
    )
}

export default SingleInfoInput
