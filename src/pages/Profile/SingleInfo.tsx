import React from 'react'
import Value from './Value'
import Title from './Title'

function SingleInfo({ title, value }) {
    return (
        <div className='w-56'>
            <Title>{title}</Title>
            <Value>{value}</Value>
        </div>
    )
}

export default SingleInfo
