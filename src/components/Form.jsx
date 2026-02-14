import { useState } from 'react'
import '../styles/Form.css'

import GeneralInformationFieldset from './GeneralInformationFieldset.jsx';
import EducationalInformationFieldset from './EducationalInformationFieldset.jsx';
import PracticalExperienceFieldset from './PracticalExperienceFieldset.jsx';

export default function Form({state, onSubmit}) {
  const [generalInfo, setGeneralInfo] = useState(state.formObject.generalInfo);
  const [educationalInfo, setEducationalInfo] = useState(state.formObject.educationalInfo);
  const [practicalInfo, setPracticalInfo] = useState(state.formObject.practicalInfo);

  function handleSubmit() {
    onSubmit({isEditing: !state, formObject: {generalInfo, educationalInfo, practicalInfo}})
  }


  return (
    <form> 
        < GeneralInformationFieldset generalInfo={generalInfo} onChange={setGeneralInfo}/>
        < EducationalInformationFieldset educationalInfo={educationalInfo} onChange={setEducationalInfo} />
        < PracticalExperienceFieldset practicalInfo={practicalInfo} onChange={setPracticalInfo} />
        <button type="button" onClick={handleSubmit} >
          Submit form
        </button>
    </form>
  )
}