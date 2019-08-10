import React from 'react'

import './styles.css'

const FormInput = ({ labelName, type, name, placeholder }) => (
    <div className="row">
        <div className="col-25">
            <label> {labelName} </label>
        </div>
        <div className="col-75">
            <input 
                type={type}
                name={name} 
                placeholder={placeholder}
            />
        </div>
    </div>
)

export default FormInput