import { useState,useEffect } from "react"
import { getList } from "../services/Api";
import BlogList from "./BlogList";

const Home = () => {        //parent component

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
        //child component = Bloglist
        <div className="home">
            <BlogList list={list}/>             
        </div>
    );
}
    
export default Home;
