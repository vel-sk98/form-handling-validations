import { useState, useEffect } from "react";

export const Form1 = () => {
    const initialValues = { name: "", email: "", password: "", confirm: "" }
    const [formValues, setFormValues] = useState(initialValues)
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [error, setError] = useState(null)
    const [passCheck, setPassCheck] = useState("")
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value })

        if (name === "password") {
            let error = "";

            if (value.length < 8) {
                error = "Minimum 8 characters";
            }
            setFormErrors(prev => ({ ...prev, password: error }));
            // setPassCheck(error);

            if (formValues.confirm && value !== formValues.confirm) {
                setFormErrors(prev => ({ ...prev, password: "Password Mismatch" }));
            }
        }


        // User types password --> User types confirm password --> ✅ Both match → no error

        // User goes back and edits password --> Now confirm password is WRONG --> But no error shows, because:

        // User didn’t touch the confirm field again

        // This creates a false valid state

        if (name === "confirm") {
            let error = "";
            if (value != formValues.password) {
                error = "Password Mismatch"
            }
            setFormErrors(prev => ({ ...prev, confirm: error }));
        }
    }

    const handleClick = () => {
        setFormErrors(validate(formValues));
        setIsSubmit(true);
        console.log(formErrors)
        console.log(formValues)
        console.log((Object.keys(formErrors).length === 0 && isSubmit))
        console.log(Object.keys(formErrors).length === 0)
        console.log(Object.keys(formErrors))

        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formValues);
        }
    }
    const handleBlur = (e) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!regex.test(e.target.value)) {
            setError("Enter an valid email")
        } else {
            setError(" ")
        }
    }

    const validate = (values) => {
        const errors = {};
        if (!values.name) {
            errors.name = "Name is required"
        }
        if (!values.email) {
            errors.email = "Email is required"
        }
        if (!values.password) {
            errors.password = "Password is required"
        } else if (values.password !== values.comfirm) {
            errors.password = "Password Mismatch"
        }
        if (values.confirm !== values.password) {
            errors.confirm = "Password Mismatch"
        }
        return errors;
    }
    return (
        <div>
            {/* {(Object.keys(formErrors).length === 0 && isSubmit)?(<h3> 🌟🎉 LoggedIn Success 🎉🌟</h3>):(<h3>Not suc</h3>)} */}
            <h2>Login Form </h2><hr />
            <div>
                <label>Name : </label>
                <input type="text/;"
                    name="name"
                    value={formValues.name}
                    placeholder='Sasi'
                    onChange={handleChange} />
            </div>

            <p className='error'>{formErrors.name}</p>

            <div>
                <label>Email : </label>
                <input type="text"
                    name="email"
                    value={formValues.email}
                    onChange={handleChange}
                    placeholder='name@gmail.com'
                    onBlur={handleBlur}
                />
            </div>
            {error && (<p className='error'>{error}</p>)}
            <p className='error'>{formErrors.email}</p>

            <div>
                <label>Password : </label>
                <input type="password"
                    name="password"
                    value={formValues.password}
                    placeholder='123***'
                    onChange={handleChange} />
            </div>
            {passCheck && (<p>{passCheck}</p>)}
            <p className='error'>{formErrors.password}</p>
            <div>
                <label>Confirm Password : </label>
                <input type="password"
                    name="confirm"
                    value={formValues.confirm}
                    placeholder='123***'
                    onChange={handleChange} />
            </div>

            <p className='error'>{formErrors.confirm}</p>
            <button className='firstButton' onClick={handleClick}>Submit</button>

        </div>
    )
}