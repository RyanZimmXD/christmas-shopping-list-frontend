import { useNavigate } from "react-router-dom";

const App = () => {
    const navigate = useNavigate();
    return(
        <div>
            <button onClick={() => {navigate("/list/2323")}}>Testing</button>
        </div>
    )
}

export default App;