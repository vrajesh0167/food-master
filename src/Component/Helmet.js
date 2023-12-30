import React from 'react'

export default function Helmet({title,children}) {
    document.title = `Food Master - ${title}`
    return (
        <div>
            {children}
        </div>
    )
}
