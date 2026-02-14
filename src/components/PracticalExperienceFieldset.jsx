import '../styles/Form.css'


export default function PracticalExperienceFieldset({practicalInfo, onChange}) {
    return (
        <>
            <fieldset>
                <legend>
                    Practical Experience
                </legend>

                <label htmlFor="companyName">Company name: 
                    <input type="text" id="companyName" placeholder="Mercado Libre" value={practicalInfo.company}
                    onChange={ (e) => onChange({...practicalInfo, company: e.target.value})}
                    />
                </label>

                <label htmlFor="position">Position title: 
                    <input type="text" id="position" placeholder="Community manager" value={practicalInfo.position} 
                    onChange={ (e) => onChange({...practicalInfo, position: e.target.value}) }
                    />
                </label>

                <label htmlFor="responsibilities">Main responsibilites of your jobs: 
                    <textarea name="" id="responsibilities" placeholder="Enter a description" value={practicalInfo.responsibilities}
                    onChange={ (e) => onChange({...practicalInfo, responsibilities: e.target.value})}
                    >
                    </textarea>
                </label>

                <label htmlFor="dateFrom">Date from: 
                    <input type="date" id="dateFrom" value={practicalInfo.dateStart}
                    onChange={ (e) => onChange({...practicalInfo, dateStart: e.target.value})}
                    />
                </label>

                <label htmlFor="dateUntil">Date until: 
                    <input type="date" id="dateUntil" value={practicalInfo.dateEnd}
                    onChange={ (e) => onChange({...practicalInfo, dateEnd: e.target.value})}
                    />
                </label>
            </fieldset>
        </>
    )
}