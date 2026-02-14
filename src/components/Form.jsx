import '../styles/Form.css'
import GeneralInformationFieldset from './GeneralInformationFieldset.jsx';
import EducationalInformationFieldset from './EducationalInformationFieldset.jsx';
import PracticalExperienceFieldset from './PracticalExperienceFieldset.jsx';

export default function Form({formObject, onUpdateGeneral, onUpdateEducational, onUpdatePractical, onSubmit}) {

  return (
    <form> 
      <GeneralInformationFieldset 
        generalInfo={formObject.generalInfo}  
        onChange={onUpdateGeneral}
      />
      <EducationalInformationFieldset 
        educationalInfo={formObject.educationalInfo}
        onChange={onUpdateEducational}
      />
      <PracticalExperienceFieldset 
        practicalInfo={formObject.practicalInfo}
        onChange={onUpdatePractical}
      />
      <button type="button" onClick={onSubmit}>Submit form</button>
    </form>
  )
}