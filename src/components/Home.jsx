import { useState,useEffect } from "react"
import { getList } from "../services/Api";
import BlogList from "./BlogList";

const Home = () => {        //parent component

    const [list, setList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // const [name, setName] = useState(['Mario']);

    useEffect(() => {
        let mounted = true;
        getList().then(items => {
            if(mounted){
                setList(items)
                setIsLoading(false)
            }
        }).catch(err => {
            console.log(err.message);
        })
        return () => mounted = false;
    }, [])

    const handleDelete = (id) => {
        const newLists = list.filter(lists => lists.id !== id)
        setList(newLists);
    }

    return (
        //child component = Bloglist
        <div className="home">
            {isLoading && <div><h2>Loading...</h2></div>}
            <BlogList list={list} title="All blogs" handleDelete={handleDelete}/>
            {/* filter and reusability of components */ }           
            {/*<BlogList list={list.filter((lists) => lists.name === "Patricia Lebsack")} title="Filtered Blog"/>*/}
        </div>
    );
}
    
export default Home;
