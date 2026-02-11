
import { useState } from "react";


export const Form3    = () => {
    const [career, setCareer] = useState("")
    const [college, setCollege] = useState("")
    const [company, setCompany] = useState("")
    const [error, setError] = useState("")


    const handleChange = (e) => {
        setCareer(e.target.value);
        setError("")

        if (e.target.value === "student") {
            setCompany("");
        } else {
            setCollege("");
        }
    }

    const handleClick = () => {
        console.log(career);
        const err = validate();
        setError(err)


    }

    const validate = () => {
        if (!career) {
            return "please select a career"
        }
        if (career === "student" && !college.trim()) {
            return "College Name is required"
        }
        if (career === "professional" && !company.trim()) {
            return "Company Name is required"
        }

        return ""

    }

    return (
        <div>
            <h3>Validate while Selecting</h3> <hr/>
            <div>
                <label>
                    <input name="occupation"
                        value="student"
                        type="radio"
                        checked={career === "student"}
                        onChange={handleChange}
                    /> Student
                </label>
            </div>

            <div>
                <label>
                    <input name="occupation"
                        value="professional"
                        type="radio"
                        checked={career === "professional"}
                        onChange={handleChange}
                    /> Professional
                </label>
            </div>


            {career === "student" ? (
                <div>
                    <label className="optional"> College Name
                        <br />
                        <input type="text" value={college} onChange={(e) => setCollege(e.target.value)} name="college" />
                    </label>
                </div>) : career === "professional" ? (
                    <div>
                        <label className="optional">Company Name <br />
                            <input type="text" value={company} onChange={(e) => setCompany(e.target.value)} name="Company" />
                        </label>
                    </div>
                ) : (<div />)}
            <p className="error">{error}</p>

            <button className="firstButton" onClick={handleClick}>Submit</button>
        </div>
    )
}