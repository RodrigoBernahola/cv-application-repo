import '../styles/Form.css'
//import { useState } from 'react'

export default function GeneralInformationFieldset({generalInfo, onChange}) {

    return (
        <>
            <fieldset>
                <legend>
                    General Information
                </legend>
                <label htmlFor="Name"> Name: 
                    <input type="text" id="Name" placeholder="John" 
                    onChange={ (e) => onChange({...generalInfo, name: e.target.value})} value={generalInfo.name}
                    />
                </label>

                <label htmlFor="email"> Email:
                    <input type="email"  id="email" placeholder="johndoe@domain.com" 
                    value={generalInfo.email} 
                    onChange={(e) => onChange({...generalInfo, email: e.target.value})}/>
                </label>

                <label htmlFor="phone"> Phone Number: 
                    <input type="tel" id="phone" placeholder="+123456789" 
                    value={generalInfo.phoneNumber} 
                    onChange={(e) => onChange({...generalInfo, phoneNumber: e.target.value})}/>
                </label>
            </fieldset>
        </>
    )

}