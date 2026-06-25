// export default function Home()
// {
//     return(
//         <>
//         <h1>divya how are you</h1>
//         </>
//     )
// }
/*function Home(props)
{3
    return(
        <>
        <h1> sha is{props.name}and she is{props.age}</h1>

        
        </>
    )
}*/
// function Home( {name="user" ,age="no age"}){
//     return (
//         <>
//         <h1> she is{name}and she is{age}</h1>
//         </>
//     )
// }
// export default Home

import { useState } from "react"
export default function Home(){
    const [count, setCount] = useState(0)
    const [value, setValue] = useState(0)


   // const [count,setCount] = useState(0)
    const incCount = () => {
        setCount((prev) => prev + 1)
        const deCount = () =>
        {
            if(count>0){
            setCount((prev) => prev - 1)
            }
        }
          
    }
    return (
        <>
        <h1>{count}</h1>
        <button onClick={incCount}>+</button>
        </>
    )
}