import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const App = () => {
    const [users, setUser] = useState([]);
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(true)

    async function getUsers() {
        const url = "https://localhost:7197/ShoppingList/";
        await fetch(url)
            .then(data => { return data.json() })
            .then(data => { setUser(data) })
            .catch((err) => { setError("Request failed, please try again later") })

        setLoading(false)
    }

    useEffect(() => {
        getUsers();
    }, [])



    const navigate = useNavigate();

    return (
        <div>
            {loading ? <div className="loading box">
                Loading...
            </div> :
                error !== "" ? (<div >
                    <div className="error box">{error}</div>
                    <button className="card" onClick={() => { navigate("/list", { state: { id: 1 } }) }}></button>

                </div>) :
                    (
                        users.map((user, index) => {
                            return (
                                <button key={index} className="card" onClick={() => { navigate("/list", { state: { id: user.id } }) }}><span>{user.name}</span><span>count</span></button>
                            )
                        })
                    )}
        </div>
    )
}

export default App;