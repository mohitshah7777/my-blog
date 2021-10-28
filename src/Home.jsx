import { useState,useEffect } from "react"
import { getList } from "./services/Api";

const Home = () => {

    const [list, setList] = useState([]);

    useEffect(() => {
        let mounted = true;
        getList().then(items => {
            if(mounted){
                setList(items)
            }
        })
        return () => mounted = false;
    }, [])

    return (
        <div className="home">
            {list.map((lists) => (
                <div className="blog-preview" key={lists.id}>
                <h2>Name : {lists.name}</h2>
                <p>Email : {lists.email}</p>
                </div>
            ))}
        </div>
    );
}
    
export default Home;
