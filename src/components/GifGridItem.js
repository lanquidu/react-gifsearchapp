import React from 'react'

export const GifGridItem = ({title, url}) => {

    return (
        <div className="card animate__animated animate__zoomIn" >
            <img src={url} alt={title} />
            <p>{title}</p>
        </div>
    )
}
