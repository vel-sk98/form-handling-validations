

import { useState } from "react"

export const Form5 = () => {
    const [mode, setMode] = useState("")
    const [error, setError] = useState("")
    const [locate, setLocate] = useState("")
    const handleChange = (e) => {
        const value = e.target.value
        setMode(value);
        setError("")
        setLocate("")
    }
    const handleChange2 = (e) => {
        setLocate(e.target.value)
        setError("")
    }
    const handleClick = () => {
        console.log(mode);
        if (!mode) {
            setError("Must select one")
        } else if (mode === "onsite" && locate !== "relocation") {
            setError("Reloaction is required")
        } else {
            setError("")
            setLocate("")
            setMode("")
            console.log(mode);
            console.log(locate);
        }
    }

    return (
        <div>
            <h3>Disable submit for invalid</h3> <hr />
            <select value={mode} name="workmode" onChange={handleChange}>
                <option value="">Select</option>
                <option value="offsite" >Offsite</option>
                <option value="onsite" >Onsite</option>
            </select>
            <br />
            {mode === "onsite" &&
                <label>
                    <input value="relocation"
                        onChange={handleChange2}
                        type="radio"
                        checked={locate === "relocation"} />  Relocation
                </label>
            }
            <p className="error">{error}</p>
            <button  disabled={!!error} onClick={handleClick}>Submit</button>
        </div>
    )
}