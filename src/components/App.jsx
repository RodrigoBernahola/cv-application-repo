import '../styles/Form.css'
import Form from './Form.jsx';
import { useState } from 'react'
import CV from './CV.jsx';

export default function App() {

    const [formState, setFormState] = useState({isEditing: true, formObject: {
        generalInfo: {
            name: '',
            email: '',
            phoneNumber: ''
        },
        educationalInfo: {
            school: '',
            title: '',
            date: ''
        },
        practicalInfo: {
            company: '',
            position: '',
            responsibilities: '',
            dateStart: '',
            dateEnd: ''
        }
    }});
    
    return (

        <>
            {formState.isEditing
            ? < Form state={formState} onSubmit={setFormState}/>
            : < CV formState={formState} onClick={setFormState}/>
            }
        </>

    )

}