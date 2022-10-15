import React, { useState } from 'react'

const UploadImage = ({file, setFile}) => {


    const handleChange = (e) => {
        setFile(URL.createObjectURL(e.target.files[0]))
    }

    return (
        <div>
            <input type="file" onChange={handleChange} />
            <img src={file} />
        </div>
    )
}

export default UploadImage