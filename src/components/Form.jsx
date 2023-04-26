import "../styles/form.css"

export const Form = ({setLocation}) => {

  const handleSubmit = (e) => {
    e.preventDefault()
    setLocation(e.target[0].value)
  }

  return (
    <section className="form_container">
        <form className="form" onSubmit={handleSubmit}>
            <input placeholder=" " type="text" id="input_location" className="input_form"/>
            <label htmlFor="input_location" className="label_form">Location</label>
            <button className="button_form">Search</button>
        </form>
    </section>
  )
}
