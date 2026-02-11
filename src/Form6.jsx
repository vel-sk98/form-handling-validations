import { useState } from "react";

export default function PhoneForm() {
    const [phones, setPhones] = useState([
        { value: "", error: "" }
    ]);

    const handleChange = (index, value) => {
        const updatedPhones = [...phones];
        updatedPhones[index].value = value;

        if (!/^\d*$/.test(value)) {
            updatedPhones[index].error = "Only numbers allowed";
        } else if (value.length !== 10) {
            updatedPhones[index].error = "Phone number must be 10 digits";
        } else {
            updatedPhones[index].error = "";
        }

        setPhones(updatedPhones);
    };

    const addPhoneField = () => {
        setPhones([...phones, { value: "", error: "" }]);
    };


    const removePhone = (index) => {
        if (phones.length === 1) return;
        setPhones(phones.filter((_, i) => i !== index));
    };
    return (
        <div>
            <h3>Dynamic Form Fields (Phone Validation)</h3> <hr />
            {phones.map((phone, index) => (
                <div key={index}>
                    <input
                        type="text"
                        value={phone.value}
                        onChange={(e) => handleChange(index, e.target.value)}
                        placeholder="Enter phone number"
                        className="phone"
                    />
                    <button className="firstButton" onClick={() => removePhone(index)}>Remove</button>
                    {phone.error && (
                        <p style={{ color: "red" }}>{phone.error}</p>
                    )}
                </div>
            ))}

            <button className="firstButton" onClick={addPhoneField}>Add </button>
        </div>
    );
}
