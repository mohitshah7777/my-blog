import { useState } from "react"

const Home = () => {

    const [name, setName] = useState("Mario")
    const [age, setAge] = useState(25)

    const handleClickMe = () => {
        setName("Luigi")
        setAge(30)
    }

    return (
        <div className="home">
            <h1>HomePage</h1>
            <p>{name} is {age} years old</p>
            <button onClick={handleClickMe}>Click me</button>
            <br/><br/>
        </div>
    );
}
    
export default Home;
