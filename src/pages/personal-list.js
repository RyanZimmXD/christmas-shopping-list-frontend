import { useParams } from "react-router-dom";

function List(){
    const { id } = useParams();
    return(
        <div>You have this tests your id is {id} </div>
    )
}

export default List;