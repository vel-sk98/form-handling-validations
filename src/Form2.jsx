import { useState } from "react"

export const Form2 = () => {
    const initialValues = { country: "", gender: "", terms: false }
    const [country, setCountry] = useState(initialValues)
    const [error, setError] = useState({})
    const [gender, setGender] = useState()
    const handleClick = () => {
        setError(validate(country))
        console.log(country);

        if (Object.keys(validate(country)).length === 0) {
            console.log("Form submitted:", country);

            //  RESET STATE
            setCountry(initialValues);
        }

    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setCountry({ ...country, [name]: value })

    }
    const validate = (values) => {
        const error = {};
        if (!values.country) {
            error.country = "Must Select one"
        }
        if (!values.gender) {
            error.gender = "Must Select one"
        }
        if (!values.terms)
            error.terms = "Must accept terms"
        return error;
    }

    return (
        <div>
            <h3>Validate when Click submit</h3> <hr />
            <div>
                <h3>Select a country</h3>

                <select name="country" value={country.country} onChange={handleChange}>
                    <option value="">Choose</option>
                    <option value="India">India</option>
                    <option value="UnitedKingdom">United Kingdom</option>
                    <option value="Dubai">Dubai</option>
                    <option value="Scotland">Scotland</option>
                </select>


                <p className='error'>{error.country}</p>
                <br />
                <br />

                <div>
                    <label>
                        <input value="male" name="gender"
                            type="radio" onChange={handleChange} checked={country.gender === "male"} /> Male
                    </label>
                    <label>
                        <input value="female" name="gender"
                            type="radio" onChange={handleChange} checked={country.gender === "female"} /> Female
                    </label>
                    <p className='error'>{error.gender}</p>
                </div>
                <br />

                <label>
                    <input
                        type="checkbox"
                        name="terms"
                        checked={country.terms}
                        onChange={(e) => setCountry({ ...country, terms: e.target.checked })} /> Terms & conditions

                </label>
                <p className='error'>{error.terms}</p>

                <button onClick={handleClick}>Submit</button>

            </div>


        </div>
    )
}