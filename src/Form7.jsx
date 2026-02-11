import { useState, useEffect } from "react"


export const Form7 = () => {
    const UserUrl = "https://jsonplaceholder.typicode.com/users"
    const [result, setResult] = useState([]);
    const [userName, setUserName] = useState("");
    const [error, setError] = useState("")

    const handleChange = (e) => {
        setUserName(e.target.value)
        setError("")
    }

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await fetch(UserUrl);
                const data = await response.json();
                setResult(data);
            } catch (e) {
                console.log(e)
            }
        }
        fetchUser();

    }, [])

    const handleClick = () => {
        const found = result.find((user) => user.username === userName)
        if (!userName) {
            setError("Please enter the UserName")
            return;
        }
        if (result.length === 0) {
            setError("Its loading...")
            return;
        }
        if (!found) {
            setError("UserName is not existed")
        } else {
            setError("")
            console.log(found);
        }
        setUserName("")
    }

    return (
        <div>
            <h3>API-Based User Search</h3> <hr/>
            <label>
                UserName <input
                    type="text"
                    value={userName}
                    placeholder="Enter your Username"
                    onChange={handleChange}
                    className="phone"
                />
            </label>
            <p className="error">{error}</p>
            <button className="firstButton" disabled={!!error} onClick={handleClick}>Submit</button>
        </div>
    )
}