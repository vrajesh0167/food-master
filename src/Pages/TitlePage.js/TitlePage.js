import React from 'react'

export default function TitlePage(props) {
    return (
        <div className='tilepage_section'>
            <div className=' container'>
                <div className='tilepage_head text-center'>
                    <h2>{props.title}</h2>
                </div>
            </div>
        </div>
    )
}
