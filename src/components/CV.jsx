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
                <h3>Personal information</h3>
                <h2>{formState.formObject.generalInfo.name}</h2>
                <p>Contact me via email at: {formState.formObject.generalInfo.email}</p>
                <p>My phone number is: {formState.formObject.generalInfo.phoneNumber}</p>
            </section>
            <section>
                <h3>Educational experience</h3>
                <p>School name: {formState.formObject.educationalInfo.school}</p>
                <p>TItle of study: {formState.formObject.educationalInfo.title}</p>
                <p>Date of study: {formState.formObject.educationalInfo.date}</p>
            </section>
            <section>
                <h3>Practical experience</h3>
                <p>Company name: {formState.formObject.practicalInfo.company}</p>
                <p>Position title: {formState.formObject.practicalInfo.position}</p>
                <p>Main responsibilites at the company: {formState.formObject.practicalInfo.responsibilities}</p>
                <p>Date from: {formState.formObject.practicalInfo.dateStart}</p>
                <p>Until: {formState.formObject.practicalInfo.dateEnd}</p>
            </section>

            <button type="button" onClick={handleClick}>
                Edit your Information
            </button>
        </main>
    )

}