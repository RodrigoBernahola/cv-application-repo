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

    function updateGeneralInfo(newGeneralInfo) {
    setFormState({
        ...formState,
        formObject: {
        ...formState.formObject,
        generalInfo: newGeneralInfo
        }
    });
    }

    function updateEducationalInfo(newEducationalInfo) {
    setFormState({
        ...formState,
        formObject: {
        ...formState.formObject,
        educationalInfo: newEducationalInfo
        }
    });
    }

    function updatePracticalInfo(newPracticalInfo) {
    setFormState({
        ...formState,
        formObject: {
        ...formState.formObject,
        practicalInfo: newPracticalInfo
        }
    });
    }

    function handleSubmit() {
    setFormState({
        ...formState,
        isEditing: false
    });
    }
    
    function handleEdit() {
        setFormState({
            ...formState,
            isEditing: true
        });
    }

    return (
        <>
            {formState.isEditing
            ? <Form 
                formObject={formState.formObject}
                onUpdateGeneral={updateGeneralInfo}
                onUpdateEducational={updateEducationalInfo}
                onUpdatePractical={updatePracticalInfo}
                onSubmit={handleSubmit}
                />
            : <CV formState={formState} onClick={handleEdit} />
            }
        </>
    )

}