import '../styles/Form.css'

export default function EducationalInformationFieldset({educationalInfo, onChange}) {
    return (
        <>
            <fieldset>
                <legend>
                    Educational Experience
                </legend>
                <label htmlFor="schoolName">School name:
                    <input type="text" id="schoolName" placeholder="Manuel Belgrano" value={educationalInfo.school} 
                    onChange={ (e) => onChange({...educationalInfo, school: e.target.value})} 
                    />
                </label>
                <label htmlFor="titleOfStudy">Title of study: 
                    <input type="text" id="titleOfStudy" placeholder="Economy" value={educationalInfo.title}
                    onChange={(e) => onChange({...educationalInfo, title: e.target.value})}
                    />
                </label>
                <label htmlFor="dateOfStudy">Date of Study: 
                    <input type="date" id="dateOfStudy" value={educationalInfo.date} 
                    onChange={ (e) => onChange({...educationalInfo, date: e.target.value})}
                    />
                </label>
            </fieldset>
        </>
    )
}