import {useState} from "react";

export default function Main(){
    const [count, setCount] = useState(0)
    const handleClick = () => setCount(count+1)
    return(
        <main>
            <h2>Main section here...</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores reprehenderit, itaque fuga sapiente cupiditate tempore vitae obcaecati debitis rerum nulla earum voluptatem, quod hic vel, sint quidem aut nobis deleniti.</p>
            <h3>Counter: {count}</h3>
            <button onClick={handleClick}>
                Click Me!
            </button>
        </main>
    )
}