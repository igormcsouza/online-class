import React from 'react'

import './styles.css'

const FormInput = ({ labelName, type, name, placeholder, value, onChange }) => (
    <div className="row">
        <div className="col-25">
            <label> {labelName} </label>
        </div>
        <div className="col-75">
            <input 
                type={type}
                name={name} 
                placeholder={placeholder}
                value={value} 
                onChange={onChange}
            />
        </div>
    </div>
)

export default FormInput