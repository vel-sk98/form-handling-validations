import { useState } from "react"
const skills = [
    { id: "1", value: "React" },
    { id: "2", value: "Javascript" },
    { id: "3", value: "CSS" },
    { id: "4", value: "HTML" }
]

export const Form4 = () => {
    const [checkedList, setCheckedList] = useState([])
    const [errors, setErrors] = useState(" ");

    const handleChange = (e) => {
        const value = e.target.value;
        // const isChecked = e.target.checked;

        // if (isChecked) {
        //     setCheckedList([...checkedList, value])
        //     console.log(checkedList);
        // } else {
        //     const filteredList = checkedList.filter((item) => (item !== value));
        //     setCheckedList(filteredList);
        //     console.log(checkedList);
        // }


        setCheckedList(prev => {
            const updated = prev.includes(value) ?
                prev.filter(((item) => (item !== value))) : [...prev, value]
            console.log(updated);
            return updated
        });


        if (checkedList.length < 2) {
            return setErrors("Must select atleast 2")
        } else if (checkedList.length >= 2) {
            return setErrors("")
        }

    }


    return (
        <div>
            <h3>Validate while Selecting</h3> <hr />
            <label> <b>Select Skills</b></label>
            <div>
                {skills.map((item) => (
                    <div key={item.id}>
                        <input
                            type="checkbox"
                            value={item.value}
                            onChange={handleChange} />

                        <label htmlFor={item.id}>{item.value}</label>
                    </div>
                ))}
                <p className="error">{errors}</p>
            </div>
        </div>
    )
}