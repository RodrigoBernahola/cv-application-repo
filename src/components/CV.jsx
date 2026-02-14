import '../styles/CV.css'

export default function CV({formState, onClick}) {

    function handleClick() {
        onClick({
            ...formState,
            isEditing: true,
        })
    }

    return (
        <main>
            <section>
                <h3>Personal Information</h3>
                <h2>{formState.formObject.generalInfo.name || 'Your Name'}</h2>
                <p>{formState.formObject.generalInfo.email || 'email@example.com'}</p>
                <p>{formState.formObject.generalInfo.phoneNumber || '+123 456 789'}</p>
            </section>
            <section>
                <h3>Educational Experience</h3>
                <p><strong>School:</strong> {formState.formObject.educationalInfo.school || 'Not specified'}</p>
                <p><strong>Title of Study:</strong> {formState.formObject.educationalInfo.title || 'Not specified'}</p>
                <p><strong>Date:</strong> {formState.formObject.educationalInfo.date || 'Not specified'}</p>
            </section>
            <section>
                <h3>Practical Experience</h3>
                <p><strong>Company:</strong> {formState.formObject.practicalInfo.company || 'Not specified'}</p>
                <p><strong>Position:</strong> {formState.formObject.practicalInfo.position || 'Not specified'}</p>
                <p><strong>Responsibilities:</strong> {formState.formObject.practicalInfo.responsibilities || 'Not specified'}</p>
                <p><strong>Period:</strong> {formState.formObject.practicalInfo.dateStart || 'N/A'} - {formState.formObject.practicalInfo.dateEnd || 'N/A'}</p>
            </section>

            <button type="button" onClick={handleClick}>
                Edit Your Information
            </button>
        </main>
    )

}
