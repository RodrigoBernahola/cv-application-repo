import { useState } from 'react'
import '../styles/Form.css'

import GeneralInformationFieldset from './GeneralInformationFieldset.jsx';
import EducationalInformationFieldset from './EducationalInformationFieldset.jsx';
import PracticalExperienceFieldset from './PracticalExperienceFieldset.jsx';

function Form() {
  const [generalInfo, setGeneralInfo] = useState({name: '', email: '', phoneNumber: ''});
  const [educationalInfo, setEducationalInfo] = useState({school: '', title: '', date: ''});
  const [practicalInfo, setPracticalInfo] = useState({company: '', position: '', responsibilities: '', dateStart: '', dateEnd: ''});

  return (
    <form action=""> 
      < GeneralInformationFieldset generalInfo={generalInfo} onChange={setGeneralInfo}/>
      < EducationalInformationFieldset educationalInfo={educationalInfo} onChange={setEducationalInfo} />
      < PracticalExperienceFieldset practicalInfo={practicalInfo} onChange={setPracticalInfo} />
      <button>Edit form data</button>
      <button>Submit form</button>
    </form>
  )
}

export default Form
