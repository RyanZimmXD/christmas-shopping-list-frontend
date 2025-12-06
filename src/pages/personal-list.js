import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
//import "../css/personal-list.css";
//import "../App.css"

function List() {
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(true)
    const [info, setInformation] = useState([])
    const [buttons, setButtons] = useState([{
        id: 0,
        touched: false,
    }])

    const { id } = useLocation().state;

    async function getUserShoppingList() {
        const url = `https://localhost:7197/ShoppingList/${id}`;
        await fetch(url)
            .then(data => { return data.json() })
            .then(data => { setInformation(data['shoppingItems'])})
            .catch((err) => { setError("Request failed, please try again later") })

        setLoading(false)
    }
    useEffect(() => {
        setButtons(info.map((value, index) => ({
            id: index,
            touched: false,
        })))
    }, [info]);

    useEffect(() => {
        getUserShoppingList();
    }, [])

    function handleChange(index, newValue) {

    }

    function ErrorPart() {
        return (
            <div className="error box">
                {error}
            </div>
        )
    }

    function MainPart() {
        return (
            <div>
                {info.map((value, index) => {
                    return (
                        <input key={index} className="item" value={value.item} onChange={() => handleChange(index, value.item)} />
                    )
                })}
                <input className="item" />
                <button className="save-button">Save</button>
            </div>
        )
    }

    function LoadingPart(){
        return(
            <div className="loading box">
                Loading...
            </div>
        )
    }


    return (
        <div id="main">
            <div id="list-backdrop">
                {
                    loading ? (<LoadingPart/> ) : 
                    error !== "" ? (
                        <ErrorPart />
                    ) :
                        <MainPart />
                }   
            </div>
        </div>
    )
}

export default List;